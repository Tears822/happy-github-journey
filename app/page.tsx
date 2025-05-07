import Image from "next/image"
import RatingSystem from "@/components/rating-system"
import ReviewGallery from "@/components/review-gallery"
import WelcomePopup from "@/components/welcome-popup"
import { MapPin } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      {/* Welcome Popup */}
      <WelcomePopup />

      {/* Hero Section */}
      <div className="w-full bg-gray-100 py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Reviews made simple.
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 animate-slide-up">
              Your feedback matters to us.
            </h1>
            <p className="text-lg text-neutral-dark mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Your opinion helps us improve our services. Please take a moment to rate your experience with PURE Health.
            </p>
            <p className="text-xl font-semibold text-primary animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Please Share Your Experience
            </p>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <Image
              src="/images/pure-health-logo.png"
              alt="PURE Health Logo"
              width={250}
              height={250}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex-1 flex flex-col items-center">
        <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8 text-center border-t-4 border-primary card animate-fade-in">
          <div className="flex items-center justify-center mb-4 text-black animate-slide-down">
            <MapPin className="mr-2 text-primary" size={20} />
            <p className="font-medium">8004 Quaker Ave Suite D, Lubbock, TX 79424</p>
          </div>

          <h1 className="text-3xl font-bold text-black mb-2 animate-slide-up">How Was Your Experience?</h1>
          <p className="text-lg text-neutral-dark mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Your feedback helps us improve our services. Please take a moment to rate your experience.
          </p>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <RatingSystem />
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <ReviewGallery />
          </div>

          <div className="mt-10 text-neutral-light text-sm animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p>Thank you for choosing PURE Health.</p>
            <p>Your feedback helps us provide better healthcare services to our community.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
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
                  <a href="tel:8062567873" className="text-primary-light hover:text-white transition-colors">
                    806-256-PURE
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@pureivhealth.com"
                    className="text-primary-light hover:text-white transition-colors"
                  >
                    support@pureivhealth.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} PURE Health. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
