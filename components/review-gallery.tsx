
import Image from "next/image"

export default function ReviewGallery() {
  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      text: "Dr. Williams completely transformed my health. After struggling with chronic back pain for years, I'm finally pain-free!",
      src: "/images/reviews/review1.png",
    },
    {
      id: 2,
      name: "Michael T.",
      rating: 5,
      text: "The team at ChiroPro Wellness is highly professional and caring. My posture has improved dramatically.",
      src: "/images/reviews/review2.png",
    },
    {
      id: 3,
      name: "Jennifer K.",
      rating: 5,
      text: "Best chiropractic care in San Diego! The holistic approach they take has helped with issues I didn't even know were related.",
      src: "/images/reviews/review3.png",
    },
    {
      id: 4,
      name: "Robert P.",
      rating: 5,
      text: "Gorgeous facility, amazing staff, and truly life-changing treatments. I recommend ChiroPro to everyone I know.",
      src: "/images/reviews/review4.png",
    },
    {
      id: 5,
      name: "Amanda L.",
      rating: 5,
      text: "As someone with a demanding job, the flexible scheduling and personalized care plan has been a lifesaver!",
      src: "/images/reviews/review5.png",
    },
  ]

  return (
    <div className="w-full mt-16">
      <h2 className="text-3xl font-serif font-bold text-black mb-4 animate-fade-in">What Our Clients Are Saying</h2>
      <p className="text-neutral mb-10 max-w-2xl mx-auto">Trusted by over 500 satisfied clients who have experienced the difference with our personalized chiropractic care approach.</p>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className="bg-white rounded-xl overflow-hidden glass review-gallery-item p-6 flex flex-col"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center text-primary font-bold text-xl">
                {review.name[0]}
              </div>
              <div className="ml-3">
                <h3 className="font-medium text-black">{review.name}</h3>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-gold" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            
            <p className="text-neutral-dark text-sm leading-relaxed flex-1 mb-4">"{review.text}"</p>
            
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/20 to-transparent my-4"></div>
            
            <Image
              src={review.src || "/placeholder.svg"}
              alt="Google Review"
              width={100}
              height={30}
              className="h-6 w-auto self-end opacity-70"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
