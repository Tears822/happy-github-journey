import Image from "next/image"

export default function ReviewGallery() {
  const reviews = [
    {
      id: 1,
      src: "/images/reviews/review1.png",
      alt: "5-star review about excellent IV therapy service",
    },
    {
      id: 2,
      src: "/images/reviews/review2.png",
      alt: "5-star review praising Dr. Johnson's consultation",
    },
    {
      id: 3,
      src: "/images/reviews/review3.png",
      alt: "5-star review about wellness program results",
    },
    {
      id: 4,
      src: "/images/reviews/review4.png",
      alt: "5-star review about friendly staff and clean facility",
    },
    {
      id: 5,
      src: "/images/reviews/review5.png",
      alt: "5-star review recommending PURE Health services",
    },
  ]

  return (
    <div className="w-full mt-12">
      <h2 className="text-2xl font-bold text-black mb-6 animate-fade-in">What Our Patients Say</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 review-gallery-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Image
              src={review.src || "/placeholder.svg"}
              alt={review.alt}
              width={600}
              height={300}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
