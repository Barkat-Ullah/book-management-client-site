import { Divider } from "antd";
import { Link } from "react-router";


const FEATURED_BOOKS = [
  {
    id: 1,
    title: "Classic Library Collection",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800",
    alt: "Vintage library with rows of classic books",
  },
  {
    id: 2,
    title: "Reading Nook",
    image: "https://images.unsplash.com/photo-1598618443855-232ee0f819f6?w=800",
    alt: "Cozy reading corner with books and coffee",
  },
  {
    id: 3,
    title: "Bestsellers Collection",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800",
    alt: "Stack of contemporary bestselling books",
  },
];

export default function PromoSectionWithData() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-[500px] p-8 lg:p-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Winter Reading.
                <br />
                Up to 50% off.
              </h1>
              <p className="text-gray-800 text-lg md:text-xl max-w-md">
                Discover your next favorite book from our curated collection of
                bestsellers, classics, and new releases.
              </p>
              <Link
                to="/products"
                className="inline-flex items-center space-x-2 text-black hover:text-gray-700 transition-colors text-lg"
              >
                <span>Browse the collection</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative group">
                <img
                  src={FEATURED_BOOKS[0].image || "/placeholder.svg"}
                  alt={FEATURED_BOOKS[0].alt}
                  className="w-full rounded-2xl object-cover aspect-[4/3] transition-transform group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                  <p className="text-white font-medium">
                    {FEATURED_BOOKS[0].title}
                  </p>
                </div>
              </div>
              <div className="relative group">
                <img
                  src={FEATURED_BOOKS[1].image || "/placeholder.svg"}
                  alt={FEATURED_BOOKS[1].alt}
                  width={300}
                  height={300}
                  className="w-full rounded-2xl object-cover aspect-square transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                  <p className="text-white font-medium">
                    {FEATURED_BOOKS[1].title}
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <div className="relative group">
                <img
                  src={FEATURED_BOOKS[2].image || "/placeholder.svg"}
                  alt={FEATURED_BOOKS[2].alt}
                  width={200}
                  height={200}
                  className="w-full rounded-2xl object-cover aspect-[3/4] transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                  <p className="text-white font-medium">
                    {FEATURED_BOOKS[2].title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Divider />
    </>
  );
}
