
import Footer from "../components/footer";
import Navbar from "../components/navbar";
export default function ProductsPage() {
  // List of 12 sample shawls
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Shawl ${i + 1}`,
    desc: "Handwoven Kashmiri shawl with exquisite craftsmanship.",
    image: `/shawl-placeholder.jpg`, // Replace later with actual images
  }));

  return (
    <main className="bg-gray-50">
        <Navbar/>
       <section className="relative h-96 bg-gray-200 flex items-center justify-center">
        <img
          src="/shawl-hero.jpg" // Add a hero image in public folder
          alt="Kashmir Shawl Heritage"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 drop-shadow-lg">
            Our Shawl Collection
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            Preserving the timeless beauty of Kashmiri craftsmanship
          </p>
        </div>
      </section>
        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-20 px-10">
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
        <Footer/>
    </main>
  );
}
