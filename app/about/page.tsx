import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-200 flex items-center justify-center">
        <img
          src="/shawlgood.jpg" // Add a hero image in public folder
          alt="Kashmir Shawl Heritage"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 drop-shadow-lg">
            About Us
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            Preserving the timeless beauty of Kashmiri craftsmanship
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:gap-12">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="/shawlpicture.jpg" // Add another image of a shawl
            alt="Kashmiri Shawl Closeup"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our journey began with a passion for Kashmiri heritage and the timeless art of handwoven shawls. Each piece tells a story of culture, dedication, and skilled craftsmanship that has been preserved for generations.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            We work closely with local artisans to bring these authentic shawls to the world, ensuring every thread reflects the beauty and tradition of Kashmir.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            To preserve the rich heritage of Kashmiri shawls while making them accessible to the modern world. We aim to support local artisans, promote ethical craftsmanship, and deliver authentic, luxurious shawls that tell a story.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            Our Values
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 text-left">
            {[
              {
                title: "Authenticity",
                desc: "Every shawl is handwoven by skilled artisans preserving traditional techniques.",
              },
              {
                title: "Ethical Sourcing",
                desc: "We support fair trade and ensure artisans are compensated fairly for their craft.",
              },
              {
                title: "Cultural Heritage",
                desc: "Our products celebrate Kashmiri culture and bring its art to the world.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Experience the Beauty of Kashmir
        </h2>
        <Link
          href="/products"
          className="inline-block px-6 py-3 rounded-full bg-white text-gray-900 font-medium hover:bg-gray-100 transition"
        >
          Explore Our Shawls
        </Link>
      </section>
    </main>
  );
}
