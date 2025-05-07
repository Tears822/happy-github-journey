
import { MapPin } from "lucide-react"
import ChiroProHeader from "../../components/chiropro-header"
import ChiroProFooter from "../../components/chiropro-footer"

export const metadata = {
  title: "ChiroPro Wellness - Share Your Feedback",
  description: "We value your feedback. Please let us know how we can improve our services at ChiroPro Wellness.",
  openGraph: {
    title: "Share Your Feedback with ChiroPro Wellness",
    description: "We value your feedback. Please let us know how we can improve our services.",
  },
}

export default function ReviewFormPage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-white">
      {/* Header */}
      <ChiroProHeader />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 flex-1 flex flex-col items-center">
        <div className="max-w-2xl w-full glass rounded-2xl p-10 text-center border-t-4 border-gold shadow-glass animate-fade-in">
          <div className="flex items-center justify-center mb-4 text-neutral-dark animate-slide-down">
            <MapPin className="mr-2 text-gold" size={20} />
            <p className="font-medium">890 Harbor View Blvd, San Diego, CA 92101</p>
          </div>

          <h1 className="text-3xl font-serif font-bold text-black mb-4 text-center animate-slide-up">We Value Your Feedback</h1>
          <p className="text-lg text-neutral-dark mb-8 text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
            We're committed to excellence. Please share your experience to help us improve our services.
          </p>

          <div className="w-full animate-fade-in" style={{ animationDelay: "0.2s", height: "580px" }}>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/RE9S5SY47Cq8yhV4Lp5h"
              style={{ width: "100%", height: "100%", border: "none", borderRadius: "12px" }}
              id="inline-RE9S5SY47Cq8yhV4Lp5h"
              data-layout={`{'id':'INLINE'}`}
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Client Feedback Form"
              data-height="580"
              data-layout-iframe-id="inline-RE9S5SY47Cq8yhV4Lp5h"
              data-form-id="RE9S5SY47Cq8yhV4Lp5h"
              title="Client Feedback Form"
            />
          </div>
          <script src="https://link.msgsndr.com/js/form_embed.js" />
        </div>
      </div>

      {/* Footer */}
      <ChiroProFooter />
    </main>
  )
}
