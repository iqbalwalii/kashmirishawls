export default function AboutKashmir() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:gap-12">
        {/* Image */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="/kashmiri-loom.jpg"
            alt="Kashmir Shawl Heritage"
            className="rounded-2xl object-cover w-full shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            The Story of Kashmir Shawls
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Kashmir shawls are more than just garments — they are a tradition woven with love, skill, and centuries of culture.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Each piece is handwoven by master artisans using techniques passed down through generations. Our shawls reflect the rich heritage of the valley, blending elegance, warmth, and artistry.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            When you wear a Kashmir shawl, you carry a story of craftsmanship, authenticity, and timeless beauty.
          </p>
          <a
            href="/about"
            className="inline-block px-6 py-3 rounded-full bg-gray-800 text-white font-medium hover:bg-gray-900 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
