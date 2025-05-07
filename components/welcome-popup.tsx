"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative overflow-hidden animate-scale">
        <div className="bg-primary p-4 text-white">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-white hover:text-gray-200 transition-colors"
            aria-label="Close popup"
          >
            <X size={20} />
          </button>
          <h3 className="text-xl font-bold">Welcome!</h3>
        </div>

        <div className="p-6">
          <div className="mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-lg font-medium mb-2">Hey Eric and Tyler,</p>
            <p className="text-neutral-dark">
              Mark & Michael here with The Lab. Click the button below to see the admin page and how our review journey
              will work for PURE Health.
            </p>
          </div>

          <div className="flex justify-center mt-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link href="/admin">
              <Button className="animate-pulse" variant="primary">
                View Admin Dashboard
              </Button>
            </Link>
          </div>
        </div>

        <div className="bg-gray-50 p-4 text-center text-sm text-neutral-light">
          <p>This popup only appears in the demo version</p>
        </div>
      </div>
    </div>
  )
}
