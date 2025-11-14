
import Carousel from "@/components/carousel";
import Header from "@/components/header";
import Services from "@/components/services";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";
import WhyChoose from "@/components/why-choose";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import InscriptionModal from "@/components/inscription-modal";
import ChatBox from "@/components/chatbox";

export default function Home() {
  return (
    <div>
      <Header/>
      <Carousel/>
      <Services/>
      <HowItWorks/>
      <Testimonials/>
      <WhyChoose/>
      <Footer/>
      <ChatBox/>
    </div>
  );
}
