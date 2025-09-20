import Link from "next/link";

export default function Catalogue() {
  const shawls = [
    {
      id: 1,
      name: "Pashmina Shawl",
      image: "/shawll1.jpg",
      desc: "Handwoven luxury from Kashmir",
    },
    {
      id: 2,
      name: "Woolen Shawl",
      image: "/shawl2.jpg",
      desc: "Soft warmth for every season",
    },
    {
      id: 3,
      name: "Embroidered Shawl",
      image: "/shawl3.jpg",
      desc: "Artistry in every stitch",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Our Shawl Collection
        </h2>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {shawls.map((shawl) => (
            <div
              key={shawl.id}
              className="rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition"
            >
              <img
                src={shawl.image}
                alt={shawl.name}
                className="h-64 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {shawl.name}
                </h3>
                <p className="text-gray-600 mt-2">{shawl.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-10">
          <Link
            href="/products"
            className="inline-block px-6 py-3 rounded-full bg-gray-800 text-white font-medium hover:bg-gray-900 transition"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
}
