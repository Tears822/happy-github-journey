
import Image from "next/image";
import RatingSystem from "../components/rating-system"; 
import ReviewGallery from "../components/review-gallery";
import WelcomePopup from "../components/welcome-popup";
import ChiroProHeader from "../components/chiropro-header";
import ChiroProFooter from "../components/chiropro-footer";
import { Button } from "../components/ui/button";
import { MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-white">
      <WelcomePopup />
      <ChiroProHeader />

      {/* Hero Section */}
      <section className="w-full py-20 bg-[url('/images/chiropro-bg.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-black mb-4 animate-slide-up">
              Elite Chiropractic Care <span className="text-primary">in the Heart of the City</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-dark mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Trusted by over 500 happy clients for personalized treatments and exceptional results
            </p>
            <Button
              className="animate-fade-in text-lg py-6 px-10"
              style={{ animationDelay: "0.2s" }}
              onClick={() => document.getElementById("rating-section")?.scrollIntoView({ behavior: "smooth" })}
            >
              Leave Us a Review on Google
            </Button>
          </div>
        </div>
      </section>

      {/* Rating Section */}
      <section id="rating-section" className="container mx-auto px-6 py-16 flex-1 flex flex-col items-center">
        <div className="max-w-4xl w-full glass rounded-2xl p-10 text-center border-t-4 border-gold shadow-glass">
          <div className="flex items-center justify-center mb-6 text-neutral-dark animate-slide-down">
            <MapPin className="mr-2 text-gold" size={20} />
            <p className="font-medium">890 Harbor View Blvd, San Diego, CA 92101</p>
          </div>
          <h2 className="text-3xl font-serif font-bold text-black mb-3 animate-slide-up">How Was Your Experience?</h2>
          <p className="text-neutral-dark mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Your feedback helps us provide better care. Please take a moment to rate your experience with ChiroPro Wellness.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <RatingSystem />
          </div>
        </div>
      </section>

      {/* Review Gallery */}
      <section className="container mx-auto px-6 py-16">
        <div className="animate-fade-in">
          <ReviewGallery />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-20 bg-neutral-light">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-serif font-bold text-black mb-6">About ChiroPro Wellness</h2>
              <div className="h-1 w-24 bg-gold mb-6"></div>
              <p className="text-neutral-dark mb-6 leading-relaxed">
                ChiroPro Wellness offers personalized chiropractic care focused on long-term relief, posture alignment, and holistic well-being. Located in downtown San Diego, our team of experts is committed to helping you achieve optimal health through innovative techniques and compassionate care.
              </p>
              <p className="text-neutral-dark mb-6 leading-relaxed">
                Our state-of-the-art facility combines luxury comfort with cutting-edge technology to provide you with the best possible experience. We believe that true wellness comes from addressing the root causes of discomfort, not just treating symptoms.
              </p>
              <div className="mt-8">
                <Button>Book a Consultation</Button>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-glass animate-float">
              <Image
                src="/images/chiropro-team.jpg"
                alt="ChiroPro Wellness Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-black mb-3">Contact Us</h2>
          <div className="h-px w-24 bg-gold mx-auto mb-6"></div>
          <p className="text-neutral-dark">Have questions or ready to start your wellness journey? Reach out to our team today.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl p-8 glass shadow-glass">
            <h3 className="text-2xl font-serif font-bold text-black mb-6">Get In Touch</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-dark mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-light/50 focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-light/50 focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-dark mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-light/50 focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                  placeholder="How can we help you?"
                />
              </div>
              <Button className="w-full py-6">Send Message</Button>
            </form>
          </div>
          
          <div className="bg-white rounded-2xl p-8 glass shadow-glass">
            <h3 className="text-2xl font-serif font-bold text-black mb-6">Visit Our Clinic</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gold mb-2">Address</h4>
                <p className="text-neutral-dark">
                  890 Harbor View Blvd<br/>
                  San Diego, CA 92101
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gold mb-2">Contact</h4>
                <p className="text-neutral-dark">
                  Phone: (858) 555-0101<br/>
                  Email: info@chiropronow.com
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gold mb-2">Hours</h4>
                <p className="text-neutral-dark">
                  Monday - Friday: 8am - 7pm<br/>
                  Saturday: 9am - 4pm<br/>
                  Sunday: Closed
                </p>
              </div>
              <div className="h-40 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.977383700754!2d-117.16444048469007!3d32.715585780989104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d95359645ae8af%3A0x6560e7b3c0a17ff2!2s890%20Harbor%20View%20Blvd%2C%20San%20Diego%2C%20CA%2092101!5e0!3m2!1sen!2sus!4v1651771201654!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ChiroProFooter />
    </main>
  );
}
