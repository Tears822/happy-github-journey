import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function TexasTechFooter() {
  // Define a placeholder image path
  const logoPath = "/images/texas-tech-fcu-logo.png"
  const placeholderPath = "/texas-tech-credit-union-exterior.png"

  return (
    <footer className="w-full py-8 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            {logoPath && logoPath !== "" ? (
              <Image
                src={logoPath || "/placeholder.svg"}
                alt="Texas Tech Federal Credit Union Logo"
                width={180}
                height={180}
                className="object-contain bg-white p-2 rounded"
              />
            ) : (
              <Image
                src={placeholderPath || "/placeholder.svg"}
                alt="Texas Tech Federal Credit Union Logo"
                width={180}
                height={180}
                className="object-contain bg-white p-2 rounded"
              />
            )}
            <p className="text-sm">
              Texas Tech Credit Union is federally insured by the National Credit Union Administration and is an Equal
              Housing Lender.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Phone: (806) 742-3606</li>
              <li>Toll-Free: (877) 546-1818</li>
              <li>Email: info@texastechfcu.org</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Texas Tech Federal Credit Union. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
