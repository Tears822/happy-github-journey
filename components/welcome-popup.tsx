
"use client"

import { useState, useEffect } from "react"
import { Button } from "../components/ui/button"
import Image from "next/image"

export default function WelcomePopup() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenWelcomePopup")
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true)
      }, 2000)
      
      return () => clearTimeout(timer)
    }
  }, [])
  
  const handleClose = () => {
    localStorage.setItem("hasSeenWelcomePopup", "true")
    setShowPopup(false)
  }
  
  if (!showPopup) return null
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="relative max-w-md w-full mx-4 bg-white rounded-2xl shadow-xl p-8 animate-scale">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          <span className="sr-only">Close</span>
        </button>
        
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center">
            <Image 
              src="/images/chiropro-logo.png" 
              alt="ChiroPro Wellness Logo" 
              width={60} 
              height={60}
              className="object-contain"
            />
          </div>
        </div>
        
        <h2 className="text-2xl font-serif font-bold text-center mb-2 text-black">Welcome to ChiroPro Wellness</h2>
        <p className="text-neutral-dark text-center mb-6">
          Experience elite chiropractic care designed for your total well-being. We're thrilled to have you here.
        </p>
        
        <div className="flex flex-col space-y-3">
          <Button onClick={handleClose} className="w-full">
            Explore Our Services
          </Button>
          <Button variant="outline" onClick={handleClose} className="w-full">
            Maybe Later
          </Button>
        </div>
      </div>
    </div>
  )
}
