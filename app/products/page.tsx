export default function ProductsPage() {
  // List of 12 sample shawls
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Shawl ${i + 1}`,
    desc: "Handwoven Kashmiri shawl with exquisite craftsmanship.",
    image: `/shawl-placeholder.jpg`, // Replace later with actual images
  }));

  return (
    <main className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Our Shawl Collection
        </h1>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="h-64 w-full bg-gray-200 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="p-4 text-left">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-600 mt-2">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
