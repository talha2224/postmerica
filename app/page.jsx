import ApiDocs from "@/components/ApiDocs";
import Comparison from "@/components/Comparison";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Partners from "@/components/Partners";
import Problems from "@/components/Problems";
import Rates from "@/components/Rates";
import Solutions from "@/components/Solutions";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="px-[1rem] md:px-[4rem] py-5">
      <Hero/>
      <Partners/>
      <Problems/>
      <Solutions/>
      <Rates/>
      <ApiDocs/>
      <Comparison/>
      <Testimonial/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}
