
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

export default function ChiroProHeader() {
  return (
    <header className="w-full bg-white shadow-sm page-header">
      <div className="container mx-auto px-6">
        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="logo-container flex items-center">
            <Image
              src="/images/chiropro-logo.png"
              alt="ChiroPro Wellness Logo"
              width={50}
              height={50}
              className="object-contain mr-3"
            />
            <span className="font-serif text-xl font-bold">
              <span className="text-primary">Chiro</span>
              <span className="text-gold">Pro</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-10">
            <Link href="#" className="text-neutral-dark hover:text-primary font-medium transition-colors">
              HOME
            </Link>
            <Link href="#services" className="text-neutral-dark hover:text-primary font-medium transition-colors">
              SERVICES
            </Link>
            <Link href="#about" className="text-neutral-dark hover:text-primary font-medium transition-colors">
              ABOUT
            </Link>
            <Link href="#contact" className="text-neutral-dark hover:text-primary font-medium transition-colors">
              CONTACT
            </Link>
            <Link href="tel:8585550101" className="text-primary font-medium hover:text-primary-dark transition-colors">
              (858) 555-0101
            </Link>
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-neutral-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
