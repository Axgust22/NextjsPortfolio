import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { BorderBeam } from "../magicui/border-beam";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    icon: React.ReactNode;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-2  md:grid-cols-4 lg:grid-cols-6 gap-6 py-10 px-5 justify-center items-center",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex justify-center items-center h-full">
              <CardIcon className="text-4xl md:text-5xl">{item.icon}</CardIcon>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl aspect-square w-full max-w-[150px] md:max-w-[200px] flex justify-center items-center p-2 overflow-hidden",
        "bg-white dark:bg-black",
        "border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 z-20",
        className
      )}
    >
      {/* BorderBeam Effect */}
      <BorderBeam
        duration={4}
        size={150} // Adjusted size to match the smaller card
        reverse
        className="absolute inset-0 rounded-2xl from-transparent via-blue-500 to-transparent pointer-events-none"
      />
      <div className="relative z-50">{children}</div>
    </div>
  );
};

export const CardIcon = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("dark:text-white text-black", className)}>
      {children}
    </div>
  );
};
