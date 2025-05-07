import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PureHealthHeader() {
  return (
    <header className="w-full bg-white shadow-sm page-header">
      <div className="container mx-auto px-4">
        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="logo-container">
            <Image
              src="/images/pure-health-logo.png"
              alt="PURE Health Logo"
              width={180}
              height={60}
              className="object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-10">
            <Link href="#" className="pure-nav-item text-black hover:text-primary font-medium">
              HOME
            </Link>
            <div className="relative group">
              <Link href="#" className="pure-nav-item text-black hover:text-primary font-medium flex items-center">
                SERVICES
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors"
                >
                  IV Therapy
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors"
                >
                  Wellness Consultations
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors"
                >
                  Health Optimization
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors"
                >
                  Preventative Care
                </Link>
              </div>
            </div>
            <Link href="#" className="pure-nav-item text-black hover:text-primary font-medium">
              ABOUT US
            </Link>
            <Link href="#" className="pure-nav-item text-black hover:text-primary font-medium">
              CONTACT
            </Link>
            <Link href="tel:8062567873" className="pure-nav-item text-primary font-medium">
              806-256-PURE
            </Link>
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-black">
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
