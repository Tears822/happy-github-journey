import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function PureHealthFooter() {
  return (
    <footer className="w-full py-8 bg-[#2c3e50] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg mb-4">HOURS</h3>
            <ul className="space-y-2">
              <li className="flex justify-between border-b border-gray-700 pb-2">
                <span>MON-FRI:</span>
                <span>9am - 6pm</span>
              </li>
              <li className="flex justify-between border-b border-gray-700 pb-2">
                <span>SAT:</span>
                <span>10am - 5:30pm</span>
              </li>
              <li className="flex justify-between border-b border-gray-700 pb-2">
                <span>SUN:</span>
                <span>1pm - 5pm</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">DIRECTIONS</h3>
            <div className="h-48 bg-gray-200 rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8610456075236!2d-101.92382492422837!3d33.58055997334306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fe6d8f8d9530d1%3A0x5f3e41dc6d0a3c85!2s8004%20Quaker%20Ave%20Suite%20D%2C%20Lubbock%2C%20TX%2079424!5e0!3m2!1sen!2sus!4v1714591066121!5m2!1sen!2sus"
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
            <h3 className="font-bold text-lg mb-4">PURE HEALTH</h3>
            <ul className="space-y-2">
              <li>8004 Quaker Ave Suite D</li>
              <li>Lubbock, Texas 79424</li>
              <li className="pt-4">
                <Link href="tel:8062567873" className="text-primary-light hover:text-white transition-colors">
                  806-256-PURE
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:support@pureivhealth.com"
                  className="text-primary-light hover:text-white transition-colors"
                >
                  support@pureivhealth.com
                </Link>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
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

        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} PURE Health. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
