import { Link } from "react-router";

const products = [
  {
    id: 1,
    name: "Introduction to C programming",
    href: "#",
    price: "Tk 500",
    imageSrc: "https://i.ibb.co.com/t4BZv1C/Rectangle-2-2.png",
    imageAlt: "A book titled 'Introduction to Algorithms' with a plain cover.",
  },
  {
    id: 2,
    name: "Introduction to Algorithms",
    href: "#",
    price: "Tk 550",
    imageSrc: "https://i.ibb.co.com/7nyz47y/Rectangle-2-3.png",
    imageAlt: "A book titled 'Clean Code' with a blue cover sitting on a desk.",
  },
  {
    id: 3,
    name: "The C++ for DSA",
    href: "#",
    price: "Tk 55",
    imageSrc: "https://i.ibb.co.com/NmDyGJB/Rectangle-2-4.png",
    imageAlt: "A book titled 'The Pragmatic Programmer' placed on a table.",
  },
  {
    id: 4,
    name: "Basic Data Structure",
    href: "#",
    price: "Tk 455",
    imageSrc: "https://i.ibb.co.com/XsXnsHX/Rectangle-3.png",
    imageAlt:
      "A JavaScript book with a white and yellow cover on a wooden table.",
  },
  {
    id: 5,
    name: "Introduction to OOP Python",
    href: "#",
    price: "Tk 555",
    imageSrc: "https://i.ibb.co.com/0fPtSGR/Rectangle-2.png",
    imageAlt: "A book titled 'Design Patterns' with a classic red cover.",
  },
  {
    id: 6,
    name: "Software Engineering",
    href: "#",
    price: "Tk 559",
    imageSrc: "https://i.ibb.co.com/vDs3qW9/Rectangle-2-5.png",
    imageAlt: "A book titled 'Refactoring' with a colorful cover.",
  },
  {
    id: 7,
    name: "Aws Basic ",
    href: "#",
    price: "Tk 585",
    imageSrc: "https://i.ibb.co.com/xCySGL4/Rectangle-3-1.png",
    imageAlt: "A book titled 'Design Patterns' with a classic red cover.",
  },
  {
    id: 8,
    name: "Database Postgresql",
    href: "#",
    price: "Tk 550",
    imageSrc: "https://i.ibb.co.com/M2PYC8x/Rectangle-2-1.png",
    imageAlt: "A book titled 'Refactoring' with a colorful cover.",
  },
];

export default function ViewBooks() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4 sm:px-6 sm:py-24 lg:px-8 ">
        <h1 className="text-2xl font-semibold py-4 text-black capitalize lg:text-3xl">
          Explore our <br /> awesome{" "}
          <span className="underline decoration-blue-500">
            Books collection
          </span>
        </h1>

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {products.map((product) => (
            <div className="border-2 border-blue-100 p-4 rounded-sm">
              <a key={product.id} href={product.href} className="group">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-[280px] h-[144px] max-w-[250px] mx-auto rounded-lg bg-gray-200 object-cover group-hover:opacity-75 "
                />
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link to="/products">
            <button className="px-6 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500">
              View All Books
            </button>
          </Link>
        </div>
        <h1 className="text-2xl font-semibold py-4 mt-6 text-black capitalize lg:text-3xl">
          Explore what <br /> people{" "}
          <span className="underline decoration-blue-500">
            says about of Book
          </span>
        </h1>
      </div>
    </div>
  );
}
