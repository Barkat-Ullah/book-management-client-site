import { cn } from "../../shared/lib/utils";
import { CardStack } from "./CardStack";

export function CardStackDemo() {
  return (
    <div className="flex items-center justify-center w-full pt-8 pb-12">
      {" "}
      {/* Added pt-8 and pb-12 */}
      <CardStack items={CARDS} />
    </div>
  );
}

const Highlight: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    author: "George R.R. Martin",
    book: "A Dance with Dragons",
    content: (
      <p>
        A reader lives a <Highlight>thousand lives</Highlight> before he dies.
        The man who never reads lives only one.
      </p>
    ),
  },
  {
    id: 1,
    author: "J.K. Rowling",
    book: "Harry Potter and the Sorcerer's Stone",
    content: (
      <p>
        It does not do to dwell on dreams and{" "}
        <Highlight>forget to live</Highlight>.
      </p>
    ),
  },
  {
    id: 2,
    author: "Mark Twain",
    book: "The Adventures of Huckleberry Finn",
    content: (
      <p>
        The man who does not read has <Highlight>no advantage</Highlight> over
        the man who cannot read.
      </p>
    ),
  },
  {
    id: 3,
    author: "Oscar Wilde",
    book: "The Picture of Dorian Gray",
    content: (
      <p>
        It is what you <Highlight>read when you don't have to</Highlight> that
        determines what you will be when you can't help it.
      </p>
    ),
  },
];
