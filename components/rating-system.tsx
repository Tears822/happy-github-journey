
"use client"

import { useState } from "react"
import { Button } from "./ui/button"

export default function RatingSystem() {
  const [hoveredRating, setHoveredRating] = useState<number | null>(null)
  const [selectedRating, setSelectedRating] = useState<number | null>(null)

  const handleMouseOver = (rating: number) => {
    setHoveredRating(rating)
  }

  const handleMouseOut = () => {
    setHoveredRating(null)
  }

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating)

    // Redirect based on rating
    setTimeout(() => {
      if (rating >= 4) {
        window.location.href = "https://maps.app.goo.gl/dUiLpjvjwj7B9XGs9"
      } else {
        window.location.href = "/review-form"
      }
    }, 300) // Short delay for animation
  }

  const ratings = [
    { value: 1, label: "POOR" },
    { value: 2, label: "FAIR" },
    { value: 3, label: "GOOD" },
    { value: 4, label: "GREAT" },
    { value: 5, label: "EXCELLENT" },
  ]

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-center items-center w-full overflow-x-auto py-6">
        <div className="flex flex-nowrap space-x-3 md:space-x-6 min-w-min">
          {ratings.map((rating, index) => (
            <div
              key={rating.value}
              className={`flex flex-col items-center flex-shrink-0 transition-all duration-500 ${
                hoveredRating !== null && rating.value <= hoveredRating ? "scale-110" : ""
              } ${selectedRating !== null && rating.value <= selectedRating ? "scale-110" : ""}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <input
                type="radio"
                id={`star${rating.value}`}
                name="rating"
                value={rating.value}
                className="hidden"
                checked={selectedRating === rating.value}
                onChange={() => handleRatingClick(rating.value)}
              />
              <label
                htmlFor={`star${rating.value}`}
                className="cursor-pointer transition-all duration-500"
                onMouseOver={() => handleMouseOver(rating.value)}
                onMouseOut={handleMouseOut}
                onClick={() => handleRatingClick(rating.value)}
              >
                <svg
                  className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 transition-all duration-500 ${
                    hoveredRating !== null && rating.value <= hoveredRating ? "fill-gold" : "fill-transparent"
                  } ${
                    selectedRating !== null && rating.value <= selectedRating ? "fill-gold" : ""
                  } stroke-gold stroke-[1.5]`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </label>
              <div className="text-xs sm:text-sm font-medium mt-2 text-center serif-font text-neutral-dark">{rating.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      <Button 
        className="mt-8 bg-gold hover:bg-gold-dark text-white font-medium px-8 py-3 rounded-full shadow-lg animate-pulse"
        onClick={() => window.location.href = "https://maps.app.goo.gl/dUiLpjvjwj7B9XGs9"}
      >
        Leave Us a Review on Google
      </Button>
    </div>
  )
}
