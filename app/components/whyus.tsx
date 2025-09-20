export default function WhyChooseUs() {
  const points = [
    {
      title: "100% Authentic Pashmina",
      desc: "Each shawl is handwoven by skilled artisans, preserving generations of Kashmiri craftsmanship.",
    },
    {
      title: "Ethically Sourced",
      desc: "We ensure fair wages and ethical practices, supporting local communities and preserving heritage.",
    },
    {
      title: "Direct from Kashmir",
      desc: "Our shawls come straight from the valleys of Kashmir, ensuring authenticity and premium quality.",
    },
    {
      title: "Worldwide Shipping",
      desc: "No matter where you are, we deliver our luxurious shawls to your doorstep with care.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Why Choose Us
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-left">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-3xl font-bold text-gray-800 mb-4">{point.title}</div>
              <p className="text-gray-600">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
