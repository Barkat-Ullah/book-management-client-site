import { Link } from "react-router";

export default function Banner() {
  return (
    <div className="relative min-h-[680px]  lg:mt-8 w-full overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Background Patterns */}
      <div className="absolute left-0 top-0 h-full w-full">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full border-2 border-blue-200 opacity-30" />
        <div className="absolute right-20 top-20 h-20 w-20 rounded-full border-2 border-blue-200 opacity-30" />
        <div className="absolute bottom-20 left-1/2 h-32 w-32 rounded-full border-2 border-blue-200 opacity-30" />
      </div>

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[600px] flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between">
          {/* Text Content */}
          <div className="max-w-2xl text-center lg:text-left">
            <div className="mb-8 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-sky-600">
              Special Offer - Limited Time
            </div>
            <h1 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
              Discover Your Next
              <span className="block text-blue-800">Favorite Book Today</span>
            </h1>
            <p className="mb-8 text-base text-gray-600 sm:text-lg">
              Explore our vast collection of books with exclusive discounts up
              to 40% off. Find everything from bestsellers to hidden gems.
            </p>
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link to="/products">
                <button className="cursor-pointer rounded-lg bg-black px-6 py-3 text-white transition-all hover:bg-gray-800 hover:shadow-lg sm:px-8">
                  Browse Collection
                </button>
              </Link>
              <button className="cursor-pointer rounded-lg border-2 border-black px-6 py-3 text-black transition-all hover:bg-gray-100 sm:px-8">
                Learn More
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full max-w-sm lg:max-w-none">
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-48 w-48 rounded-full bg-blue-800/10 sm:h-72 sm:w-72" />
              <div className="absolute -bottom-4 -left-4 h-48 w-48 rounded-full bg-orange-100/50 sm:h-72 sm:w-72" />
              <img
                src="https://merakiui.com/images/components/Catalogue-pana.svg"
                alt="Books Collection"
                className="relative z-10 mx-auto h-[300px] w-auto rounded-lg object-cover sm:h-[400px] lg:h-[500px]"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -left-4 top-1/3 z-20 rounded-lg bg-white p-3 shadow-lg sm:-left-8 sm:p-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-8 w-8 rounded-full bg-blue-100 sm:h-12 sm:w-12">
                  <svg
                    className="h-8 w-8 p-2 text-blue-800 sm:h-12 sm:w-12 sm:p-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 sm:text-base">
                    New Arrivals
                  </p>
                  <p className="text-xs text-gray-500 sm:text-sm">
                    Fresh titles every week
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-1/4 z-20 rounded-lg bg-white p-3 shadow-lg sm:-right-8 sm:p-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-8 w-8 rounded-full bg-orange-100 sm:h-12 sm:w-12">
                  <svg
                    className="h-8 w-8 p-2 text-orange-600 sm:h-12 sm:w-12 sm:p-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 sm:text-base">
                    Best Sellers
                  </p>
                  <p className="text-xs text-gray-500 sm:text-sm">
                    Top rated books
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
