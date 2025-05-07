import { MapPin } from "lucide-react"

export const metadata = {
  title: "PURE Health - Share Your Feedback",
  description: "We value your feedback. Please let us know how we can improve our services at PURE Health.",
  openGraph: {
    title: "Share Your Feedback with PURE Health",
    description: "We value your feedback. Please let us know how we can improve our services.",
  },
}

export default function ReviewFormPage() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex-1 flex flex-col items-center">
        <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 border-t-4 border-primary card animate-fade-in">
          <div className="flex items-center justify-center mb-4 text-black animate-slide-down">
            <MapPin className="mr-2 text-primary" size={20} />
            <p className="font-medium">8004 Quaker Ave Suite D, Lubbock, TX 79424</p>
          </div>

          <h1 className="text-3xl font-bold text-black mb-2 text-center animate-slide-up">We Value Your Feedback</h1>
          <p className="text-lg text-neutral-dark mb-8 text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
            We're sorry your experience wasn't perfect. Please let us know how we can improve.
          </p>

          <div className="w-full animate-fade-in" style={{ animationDelay: "0.2s", height: "580px" }}>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/RE9S5SY47Cq8yhV4Lp5h"
              style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
              id="inline-RE9S5SY47Cq8yhV4Lp5h"
              data-layout={`{'id':'INLINE'}`}
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Review Feedback Form"
              data-height="580"
              data-layout-iframe-id="inline-RE9S5SY47Cq8yhV4Lp5h"
              data-form-id="RE9S5SY47Cq8yhV4Lp5h"
              title="Review Feedback Form"
            />
          </div>
          <script src="https://link.msgsndr.com/js/form_embed.js" />
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
