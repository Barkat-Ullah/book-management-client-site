import { useEffect } from "react";
import Glide from "@glidejs/glide";

// Simple Star Icon Component
const StarIcon = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    className="h-6 w-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
    />
  </svg>
);

// Simple Quote Icon Component
const QuoteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="absolute left-6 top-6 z-0 h-16 w-16 text-sky-200"
  >
    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
  </svg>
);

// Reusable Testimonial Card Component
const TestimonialCard = ({ testimonial, rating, author, role, image }) => (
  <li>
    <div className="h-full w-full">
      <div className="h-full overflow-hidden rounded bg-white text-slate-500 shadow-2xl shadow-slate-200">
        <div className="relative p-6">
          <figure className="relative z-10">
            <blockquote className="p-6 text-lg leading-relaxed">
              <p>"{testimonial}"</p>
            </blockquote>
            <figcaption className="flex flex-col items-start gap-2 p-6 pt-0 text-sm text-emerald-500">
              <span
                className="flex gap-1 text-amber-400"
                role="img"
                aria-label={`Rating: ${rating} out of 5 stars`}
              >
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={i < rating} />
                ))}
              </span>
              <div className="flex items-center gap-4 pt-4 text-sm text-blue-500">
                <img
                  src={image}
                  alt={author}
                  className="h-10 w-10 shrink-0 rounded-full"
                />
                <div className="flex flex-col gap-1">
                  <span className="font-bold uppercase">{author}</span>
                  <cite className="not-italic">{role}</cite>
                </div>
              </div>
            </figcaption>
          </figure>
          <QuoteIcon />
        </div>
      </div>
    </div>
  </li>
);

export default function CarouselTestimonial() {
  useEffect(() => {
    const slider = new Glide(".glide-08", {
      type: "carousel",
      focusAt: 1,
      animationDuration: 2000,
      autoplay: 2000,
      rewind: true,
      perView: 2,
      gap: 48,
      classes: {
        nav: {
          active: "[&>*]:bg-slate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  const testimonials = [
    {
      testimonial:
        "The Library's collection is extraordinary. The rare book section transported me through centuries of literary history. The staff's expertise and dedication to preservation is remarkable.",
      rating: 5,
      author: "Sarah Johnson",
      role: "Literary Historian",
      image: "https://i.ibb.co/N30gbs2/placeholder.jpg",
    },
    {
      testimonial:
        "The digital catalog system is intuitive and comprehensive. Finding specific editions or exploring new additions to the collection has never been easier.",
      rating: 5,
      author: "David Chen",
      role: "Digital Archivist",
      image: "https://i.ibb.co/N30gbs2/placeholder.jpg",
    },
    {
      testimonial:
        "The reading room atmosphere is perfect for deep study and research. The restoration work being done on ancient texts is fascinating to observe.",
      rating: 5,
      author: "Emily Martinez",
      role: "Book Conservator",
      image: "https://i.ibb.co/N30gbs2/placeholder.jpg",
    },
  ];

  return (
    <div className="glide-08 relative max-w-7xl mx-auto">
      <h1 className="text-xl font-semibold ml-2 py-4 text-black capitalize lg:text-3xl">
        What clients <br /> says{" "}
        <span className="underline decoration-blue-500">Our Book Websites</span>
      </h1>
      <div data-glide-el="track">
        <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 pb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial.testimonial}
              rating={testimonial.rating}
              author={testimonial.author}
              role={testimonial.role}
              image={testimonial.image}
            />
          ))}
        </ul>
      </div>

      <div
        className="-mt-6 flex w-full items-center justify-center gap-2"
        data-glide-el="controls[nav]"
      >
        {[...Array(testimonials.length)].map((_, index) => (
          <button
            key={index}
            className="group p-4"
            data-glide-dir={`=${index}`}
            aria-label={`goto slide ${index + 1}`}
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 opacity-70 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
        ))}
      </div>
    </div>
  );
}
