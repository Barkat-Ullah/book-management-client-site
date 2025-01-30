import { FaArrowCircleRight } from 'react-icons/fa';
import { LuCar } from 'react-icons/lu';
import { MdOutlineSecurity } from 'react-icons/md';
import { BiSolidOffer, BiSupport } from 'react-icons/bi';
const Features1 = () => {
  return (
    <section className="bg-white my-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-black capitalize lg:text-3xl">
          Explore our <br /> awesome{" "}
          <span className="underline decoration-blue-500">Support</span>
        </h1>

        {/* Grid container updated */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 xl:mt-12 xl:gap-12 justify-center">
          {/* Card 1 */}
          <div className="p-8 space-y-3 border-gray-50 rounded-xl text-center">
            <span className="inline-block text-blue-500">
              <LuCar className="w-16 h-16" />
            </span>

            <h1 className="text-xl font-semibold text-black capitalize">
              Return & refund
            </h1>

            <p className="text-black">Money back guarantee</p>

            <a
              href="#"
              className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full hover:underline hover:text-blue-600"
            >
              <FaArrowCircleRight className="w-6 h-6" />
            </a>
          </div>

          {/* Card 2 */}
          <div className="p-8 space-y-3 border-gray-50 rounded-xl text-center">
            <span className="inline-block text-blue-500">
              <MdOutlineSecurity className="w-16 h-16" />
            </span>
            <h1 className="text-xl font-semibold text-black capitalize">
              Secure Payment
            </h1>
            <p className="text-black">30% off by subscribing</p>
            <a
              href="#"
              className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full hover:underline hover:text-blue-600"
            >
              <FaArrowCircleRight className="w-6 h-6" />
            </a>
          </div>

          {/* Card 3 */}
          <div className="p-8 space-y-3 border-gray-50 rounded-xl text-center">
            <span className="inline-block text-blue-500">
              <BiSupport className="w-16 h-16" />
            </span>

            <h1 className="text-xl font-semibold text-black capitalize">
              Quality Support
            </h1>

            <p className="text-black">Always online 24/7</p>

            <a
              href="#"
              className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full hover:underline hover:text-blue-600"
            >
              <FaArrowCircleRight className="w-6 h-6" />
            </a>
          </div>

          {/* Card 4 */}
          <div className="p-8 space-y-3 border-gray-50 rounded-xl text-center">
            <span className="inline-block text-blue-500">
              <BiSolidOffer className="w-16 h-16" />
            </span>

            <h1 className="text-xl font-semibold text-black capitalize">
              Daily Offers
            </h1>

            <p className="text-black">20% off by subscribing</p>

            <a
              href="#"
              className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full hover:underline hover:text-blue-600"
            >
              <FaArrowCircleRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features1;
