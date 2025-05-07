"use client"

import { useState } from "react"

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
    { value: 2, label: "SUBPAR" },
    { value: 3, label: "OK" },
    { value: 4, label: "GOOD" },
    { value: 5, label: "GREAT" },
  ]

  return (
    <div className="flex justify-center items-center w-full overflow-x-auto py-4">
      <div className="flex flex-nowrap space-x-2 md:space-x-4 min-w-min">
        {ratings.map((rating, index) => (
          <div
            key={rating.value}
            className={`flex flex-col items-center flex-shrink-0 transition-all duration-300 ${
              hoveredRating !== null && rating.value <= hoveredRating ? "scale-110" : ""
            } ${selectedRating !== null && rating.value <= selectedRating ? "scale-110" : ""}`}
            style={{ animationDelay: `${index * 0.1}s` }}
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
              className="cursor-pointer transition-transform duration-300"
              onMouseOver={() => handleMouseOver(rating.value)}
              onMouseOut={handleMouseOut}
              onClick={() => handleRatingClick(rating.value)}
            >
              <svg
                className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-all duration-300 ${
                  hoveredRating !== null && rating.value <= hoveredRating ? "fill-[#4a90a7]" : "fill-transparent"
                } ${
                  selectedRating !== null && rating.value <= selectedRating ? "fill-[#4a90a7]" : ""
                } stroke-[#4a90a7] stroke-[1.5]`}
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </label>
            <div className="text-xs sm:text-sm font-semibold mt-1 text-center">{rating.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
