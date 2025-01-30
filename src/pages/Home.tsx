import Banner from "./Banner";
import CarouselTestimonial from "./CarouselWithTestimonials";
import { CardStackDemo } from "./Features/CardStackDemo";
import Features1 from "./Features/Features1";
import PaymentFeatures from "./Features/PaymentFeatures";
import PromoSectionWithData from "./Features/PromoSectionData";
import ViewBooks from "./Features/ViewBooks";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features1 />
      <ViewBooks />
      <CardStackDemo />
      <PaymentFeatures />
      <PromoSectionWithData />
      <CarouselTestimonial />
    </div>
  );
};

export default Home;
