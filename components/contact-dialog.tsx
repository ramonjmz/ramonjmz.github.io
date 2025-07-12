"use client";

import { useState, useEffect, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      render: (element: string | HTMLElement, options: any) => number;
      execute: (siteKey: string, options: any) => Promise<string>;
      reset: (widgetId: number) => void;
    };
  }
}

export function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const recaptchaWidgetId = useRef<number | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const resetForm = () => {
    form.reset();
    setSubmitStatus('idle');
    setErrorMessage('');
    setIsSubmitting(false);
  };

  const handleClose = () => {
    resetForm();
    onOpenChange(false);
  };

  const submitToGoogleForms = async (values: z.infer<typeof formSchema>, recaptchaToken: string) => {
    const formData = new FormData();
    
    // Add form fields
    formData.append(process.env.NEXT_PUBLIC_FORM_NAME_FIELD!, values.name);
    formData.append(process.env.NEXT_PUBLIC_FORM_EMAIL_FIELD!, values.email);
    formData.append(process.env.NEXT_PUBLIC_FORM_MESSAGE_FIELD!, values.message);
    
    // Add reCAPTCHA token
    formData.append('g-recaptcha-response', recaptchaToken);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_FORM_URL!, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Important for Google Forms
      });

      // With no-cors, we can't read the response, but we can check if the request was sent
      return true;
    } catch (error) {
      console.error('Error submitting to Google Forms:', error);
      return false;
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Execute reCAPTCHA
      const recaptchaToken = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
        { action: 'submit' }
      );

      // Submit to Google Forms
      const success = await submitToGoogleForms(values, recaptchaToken);

      if (success) {
        setSubmitStatus('success');
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        
        // Reset form after success
        setTimeout(() => {
          resetForm();
          onOpenChange(false);
        }, 2000);
      } else {
        setSubmitStatus('error');
        setErrorMessage('Failed to send message. Please try again.');
        toast({
          title: "Error sending message",
          description: "Please try again or contact me directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error in form submission:', error);
      setSubmitStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Get in touch</DialogTitle>
          <DialogDescription>
            Send me a message and I'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <Alert className="border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Message sent successfully! Thank you for reaching out.
            </AlertDescription>
          </Alert>
        )}

        {submitStatus === 'error' && (
          <Alert className="border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              {errorMessage || 'Failed to send message. Please try again.'}
            </AlertDescription>
          </Alert>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your name" 
                      {...field} 
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your email" 
                      {...field} 
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message"
                      className="min-h-[100px]"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* reCAPTCHA Container */}
            <div 
              ref={recaptchaRef}
              className="flex justify-center"
              data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            />

            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}