import Image from "next/image";
import Hero from "./components/hero";
import Catalogue from "./components/catalouge";
import Testimonials from "./components/testimononials";
import WhyChooseUs from "./components/whyus";
import AboutKashmir from "./components/about";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
    <Hero/>
    <Catalogue/>
    <Testimonials/>
    <WhyChooseUs/>
    <AboutKashmir/>
    <Footer/>
    </div>
  );
}
