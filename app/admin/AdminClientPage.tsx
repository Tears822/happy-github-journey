"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { format } from "date-fns"
import { Lock, User } from "lucide-react"

function LeadConnectorForm() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://link.msgsndr.com/js/form_embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div style={{ height: "100vh", overflowY: "auto" }}>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/aP3N5ZCcX72EFuNP8JOe"
        style={{ width: "100%", height: "100%", border: "none", borderRadius: "0px" }}
        id="inline-aP3N5ZCcX72EFuNP8JOe"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Add New Client"
        data-height="508"
        data-layout-iframe-id="inline-aP3N5ZCcX72EFuNP8JOe"
        data-form-id="aP3N5ZCcX72EFuNP8JOe"
        title="Add New Client"
      />
    </div>
  )
}

export default function AdminClientPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginData, setLoginData] = useState({ username: "", password: "" })
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    visitDate: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would validate credentials against a backend
    // This is just a simple demo
    if (loginData.username === "admin" && loginData.password === "password") {
      setIsLoggedIn(true)
    } else {
      alert("Invalid credentials. Try username: admin, password: password")
    }
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log("Client added:", {
      ...formData,
      visitDate: date ? format(date, "PPP") : "",
    })
    setIsSubmitted(true)

    // Reset form after submission
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        visitDate: "",
      })
      setDate(undefined)
      setIsSubmitted(false)
    }, 3000)
  }

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen flex flex-col items-center">
        {/* Login Form */}
        <div className="container mx-auto px-4 py-12 flex-1 flex flex-col items-center">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 border-t-4 border-primary card animate-fade-in">
            <div className="flex justify-center mb-6 animate-slide-down">
              <div className="bg-primary/10 p-3 rounded-full">
                <Lock className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-black text-center mb-6 animate-slide-up">Admin Login</h1>

            <form onSubmit={handleLogin} className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-black/60" />
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Enter your username"
                    className="pl-10 form-input"
                    value={loginData.username}
                    onChange={handleLoginChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-black/60" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10 form-input"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>

            <div
              className="mt-4 text-center text-sm text-neutral-light animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <p>For demo purposes, use:</p>
              <p>Username: admin</p>
              <p>Password: password</p>
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

  return (
    <main className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-black mb-6 animate-slide-down">Review Request System</h1>

          <div
            className="bg-white rounded-lg shadow-lg p-6 mb-8 border-t-4 border-primary card animate-fade-in"
            style={{ maxHeight: "600px", overflowY: "auto" }}
          >
            <LeadConnectorForm />
          </div>

          <div
            className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-primary card animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-xl font-bold text-black mb-4">How the Review Request System Works</h2>

            <div className="mb-6 animate-slide-up" style={{ animationDelay: "0.25s" }}>
              <p className="text-neutral-dark mb-4">
                After adding a patient, our system automatically sends a series of personalized messages requesting a
                review. The sequence includes both text messages and emails spaced out over time to gently remind
                patients without being intrusive.
              </p>

              <ol className="list-decimal list-inside space-y-2 text-neutral-light mb-4">
                <li>Patient information is added to the system</li>
                <li>First text message and email are sent 24 hours after their visit</li>
                <li>If no review is left, a second message is sent 3 days later</li>
                <li>A final reminder is sent 7 days after the initial request</li>
              </ol>
            </div>

            <Tabs defaultValue="text" className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <TabsList className="mb-4">
                <TabsTrigger value="text">Text Messages</TabsTrigger>
                <TabsTrigger value="email">Emails</TabsTrigger>
              </TabsList>

              <TabsContent value="text" className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200 transition-all hover:shadow-md">
                  <h3 className="font-bold text-black mb-2">Text Message #1 (Warm Leadership Voice)</h3>
                  <p className="text-neutral-light">
                    Hi [First Name], Dr. Johnson here from PURE Health. Thanks for trusting our team today. Would you
                    mind sharing your experience with a quick Google review? It helps us continue to serve our patients
                    the right way.
                    <br />👉 [Review Link]
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-md border border-gray-200 transition-all hover:shadow-md">
                  <h3 className="font-bold text-black mb-2">Text Message #2 (Appreciative & Authentic)</h3>
                  <p className="text-neutral-light">
                    Hey [First Name], Dr. Johnson here — just wanted to say thank you for choosing our clinic. If you
                    have a minute, would you leave a quick review about your visit? It makes a huge difference for our
                    team!
                    <br />
                    Leave your feedback here: [Review Link]
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-md border border-gray-200 transition-all hover:shadow-md">
                  <h3 className="font-bold text-black mb-2">Text Message #3 (Community-Driven Language)</h3>
                  <p className="text-neutral-light">
                    [First Name], this is Dr. Johnson — grateful you trusted our team today. If you could leave a short
                    review, it helps more Lubbock community members find healthcare services they can count on.
                    <br />
                    Here's the link: [Review Link]
                    <br />
                    Thank you for being part of our PURE Health family!
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-md border border-gray-200 transition-all hover:shadow-md">
                  <h3 className="font-bold text-black mb-2">Text Message #4 (The Final Ask – Polite Pressure)</h3>
                  <p className="text-neutral-light">
                    Hey [First Name], my final ask — I know you're busy. But if your experience at PURE Health was a
                    good one, would you leave us a quick review? It really helps us grow and serve more people well.
                    <br />
                    Here's the link one last time: [Review Link]
                    <br />
                    Grateful either way,
                    <br />– Dr. Johnson
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="email" className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200 transition-all hover:shadow-md">
                  <h3 className="font-bold text-black mb-2">Email #1 (Professional and Personal)</h3>
                  <p className="font-medium text-black">Subject: Thank you for trusting our team today</p>
                  <div className="text-neutral-light mt-2">
                    <p>Hi [First Name],</p>
                    <br />
                    <p>This is Dr. Matt Johnson from PURE Health.</p>
                    <p>
                      I just wanted to personally thank you for visiting our clinic today. Whether you met with me or
                      another team member, we're honored to be part of your health journey.
                    </p>
                    <br />
                    <p>If you have a moment, would you mind leaving a Google review?</p>
                    <p>
                      Your feedback not only helps our practice grow — it helps others in the Lubbock community find the
                      healthcare services they deserve.
                    </p>
                    <br />
                    <p>You can leave a review here: [Review Link]</p>
                    <br />
                    <p>Thank you again for allowing us to serve you.</p>
                    <br />
                    <p>— Dr. Matt Johnson</p>
                    <p>PURE Health</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-md border border-gray-200 transition-all hover:shadow-md">
                  <h3 className="font-bold text-black mb-2">Email #2 (Friendly and Purposeful)</h3>
                  <p className="font-medium text-black">Subject: Quick thank you + a small request</p>
                  <div className="text-neutral-light mt-2">
                    <p>Hi [First Name],</p>
                    <br />
                    <p>This is Dr. Matt Johnson from PURE Health.</p>
                    <p>
                      Thank you for choosing us for your health needs today. It means a lot to me and our team that you
                      placed your trust in us.
                    </p>
                    <br />
                    <p>If you wouldn't mind, could you leave a short review about your visit?</p>
                    <p>
                      Hearing your experience helps us keep improving — and helps others know they're in good hands too.
                    </p>
                    <br />
                    <p>You can share your feedback here: [Review Link]</p>
                    <br />
                    <p>Thanks again for letting us be part of your health journey!</p>
                    <br />
                    <p>— Dr. Johnson</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-md border border-gray-200 transition-all hover:shadow-md">
                  <h3 className="font-bold text-black mb-2">Email #3 (Impactful and Community-Focused)</h3>
                  <p className="font-medium text-black">
                    Subject: Your feedback helps others find better healthcare services
                  </p>
                  <div className="text-neutral-light mt-2">
                    <p>Hi [First Name],</p>
                    <br />
                    <p>I'm Dr. Matt Johnson from PURE Health.</p>
                    <p>
                      Whether you were seen by me or a member of our incredible team, thank you for trusting us with
                      your health needs today.
                    </p>
                    <br />
                    <p>
                      We believe every patient deserves attentive, personalized care — and your feedback helps us spread
                      that mission even further.
                    </p>
                    <p>Would you take a minute to leave a Google review about your visit?</p>
                    <br />
                    <p>You can leave your review here: [Review Link]</p>
                    <br />
                    <p>Thank you for helping us serve the Lubbock community better, one patient at a time.</p>
                    <br />
                    <p>— Dr. Matt Johnson</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
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
