
import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

export default function ChiroProFooter() {
  return (
    <footer className="w-full py-12 bg-white text-neutral-dark border-t border-gold/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold mb-4 text-gold">HOURS</h3>
            <ul className="space-y-3">
              <li className="flex justify-between border-b border-gold/10 pb-2">
                <span>MON-FRI:</span>
                <span>8am - 7pm</span>
              </li>
              <li className="flex justify-between border-b border-gold/10 pb-2">
                <span>SAT:</span>
                <span>9am - 4pm</span>
              </li>
              <li className="flex justify-between border-b border-gold/10 pb-2">
                <span>SUN:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-bold mb-4 text-gold">DIRECTIONS</h3>
            <div className="h-48 rounded-lg overflow-hidden shadow-glass">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.977383700754!2d-117.16444048469007!3d32.715585780989104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d95359645ae8af%3A0x6560e7b3c0a17ff2!2s890%20Harbor%20View%20Blvd%2C%20San%20Diego%2C%20CA%2092101!5e0!3m2!1sen!2sus!4v1651771201654!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-xl font-bold mb-4 text-gold">CHIROPRO WELLNESS</h3>
            <ul className="space-y-3">
              <li>890 Harbor View Blvd</li>
              <li>San Diego, CA 92101</li>
              <li className="pt-2">
                <Link href="tel:8585550101" className="text-primary hover:text-primary-dark transition-colors">
                  (858) 555-0101
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:info@chiropronow.com"
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  info@chiropronow.com
                </Link>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-gold hover:text-gold-dark transition-transform hover:scale-110">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="text-gold hover:text-gold-dark transition-transform hover:scale-110">
                <Facebook size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gold/10 text-center text-sm text-neutral">
          <p>© {new Date().getFullYear()} ChiroPro Wellness. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
