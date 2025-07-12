import Link from "next/link";
import { GitHubIcon, XIcon, LinkedInIcon } from "@/components/social-icons";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between py-10 md:py-12">
          <div className="flex flex-col items-center lg:items-start">
            <Link href="/" className="font-bold text-xl mb-2">
              Portfolio
            </Link>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Portfolio SaaS. All rights reserved.
            </p>
          </div>

          <div className="flex items-center mt-6 lg:mt-0 space-x-4">
            <Link 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <XIcon className="h-5 w-5" />
              <span className="sr-only">X (Twitter)</span>
            </Link>
            <Link 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <GitHubIcon className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <LinkedInIcon className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>

          <nav className="mt-6 lg:mt-0">
            <ul className="flex flex-wrap justify-center space-x-6">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}