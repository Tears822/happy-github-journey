import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TexasTechHeader() {
  // Define a placeholder image path
  const logoPath = "/images/texas-tech-fcu-logo.png"
  const placeholderPath = "/texas-tech-credit-union-exterior.png"

  return (
    <header className="w-full bg-white shadow-sm page-header">
      <div className="container mx-auto px-4">
        {/* Top navigation */}
        <div className="flex justify-end items-center py-2 text-sm">
          <nav className="flex items-center space-x-6">
            <Link href="#" className="hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Contact Us
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Rates
            </Link>
            <button className="text-neutral-dark hover:text-primary transition-colors">
              <Search size={18} />
            </button>
            <Button className="bg-primary hover:bg-primary-dark text-white font-medium px-4 py-1 rounded-md transition-all">
              Sign In
            </Button>
          </nav>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="logo-container">
            <Image
              src={logoPath && logoPath !== "" ? logoPath : placeholderPath}
              alt="Texas Tech Federal Credit Union Logo"
              width={180}
              height={180}
              className="object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-10">
            <Link href="#" className="ttfcu-nav-item text-black hover:text-primary font-medium">
              Bank
            </Link>
            <Link href="#" className="ttfcu-nav-item text-black hover:text-primary font-medium">
              Borrow
            </Link>
            <Link href="#" className="ttfcu-nav-item text-black hover:text-primary font-medium">
              Mortgage
            </Link>
            <Link href="#" className="ttfcu-nav-item text-black hover:text-primary font-medium">
              Learn
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
