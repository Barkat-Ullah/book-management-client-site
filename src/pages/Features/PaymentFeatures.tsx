import { MdOutlineArrowCircleRight } from "react-icons/md";
import PaymentCarousel from "./CarouselLogo";

const PaymentFeatures = () => {
  return (
    <>
      <div className="max-w-7xl flex flex-col-reverse px-6 py-10 mx-auto gap-4 space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row-reverse lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 lg:text-4xl">
              Secure & Reliable Payment Options
            </h1>
            <p className="mt-4 text-gray-600">
              We provide safe, fast, and globally recognized payment methods to
              ensure a smooth shopping experience.
            </p>
            <div className="grid gap-6 mt-8 sm:grid-cols-2">
              {[
                "Multiple payment options",
                "End-to-end encryption ",
                "Instant payment confirmation",
                "Flexible installment plans",
                "100% money-back guarantee",
                "No hidden transaction fees",
              ].map((text, index) => (
                <div key={index} className="flex items-center text-gray-800">
                  <MdOutlineArrowCircleRight className="w-6 h-6 mx-3 text-blue-500" />
                  <span className="mx-3">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src="https://i.ibb.co.com/cXwHw4cp/Reasonsto-Counton-Us-1.png"
            alt="payment security"
          />
        </div>
      </div>
      <PaymentCarousel />
    </>
  );
};

export default PaymentFeatures;
