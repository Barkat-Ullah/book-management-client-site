
import type React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Card = {
  id: number;
  author: string;
  book: string;
  content: React.ReactNode;
};

interface CardStackProps {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}

export const CardStack: React.FC<CardStackProps> = ({
  items,
  offset = 10,
  scaleFactor = 0.06,
}) => {
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-64  w-72 sm:h-72 sm:w-80 md:h-80 md:w-96 lg:h-96 lg:w-[40rem] xl:w-[48rem]">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute h-full w-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-6 sm:p-8 shadow-xl border border-neutral-400  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between bg-white "
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            top: index * -offset,
            scale: 1 - index * scaleFactor,
            zIndex: cards.length - index,
          }}
        >
          <div className="font-normal text-neutral-700 text-black text-sm sm:text-base lg:text-2xl">
            {card.content}
          </div>
          <div>
            <p className="text-neutral-500 font-medium text-black text-sm sm:text-base">
              {card.author}
            </p>
            <p className="text-neutral-400 font-normal text-black text-xs sm:text-sm">
              {card.book}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
