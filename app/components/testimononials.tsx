export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Aisha Bhat",
      text: "The Pashmina shawl I ordered was even more beautiful in person. The craftsmanship reflects true Kashmiri heritage.",
      rating: 5,
    },
    {
      id: 2,
      name: "Rahul Sharma",
      text: "I gifted a Kashmiri embroidered shawl to my mother. She absolutely loved it. Elegant, timeless, and worth every rupee.",
      rating: 4,
    },
    {
      id: 3,
      name: "Fatima Khan",
      text: "Wearing these shawls feels like wrapping yourself in art. Each piece carries history and culture beautifully.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          What Our Customers Say
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-xl bg-white p-8 shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="flex justify-center mb-4 text-yellow-400">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                “{review.text}”
              </p>
              <h3 className="mt-6 text-lg font-semibold text-gray-800">
                — {review.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
