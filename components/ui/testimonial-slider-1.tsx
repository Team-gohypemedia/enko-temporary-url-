"use client";

import * as React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Review = {
  id: string | number;
  name: string;
  affiliation: string;
  quote: string;
  imageSrc: string;
  thumbnailSrc: string;
  specs?: {
    category: string;
    items: { label: string; value: string }[];
  }[];
  features?: {
    icon: any;
    title: string;
    subtitle: string;
  }[];
};

interface TestimonialSliderProps {
  reviews: Review[];
  className?: string;
}

export function TestimonialSlider({ reviews, className }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const activeReview = reviews[currentIndex];

  const handleNext = useCallback(() => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleThumbnailClick = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  // Auto-advance every 4 seconds, pause on hover
  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, handleNext]);

  const thumbnailReviews = reviews;

  const imageVariants = {
    enter: (slideDirection: "left" | "right") => ({
      y: slideDirection === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (slideDirection: "left" | "right") => ({
      y: slideDirection === "right" ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const textVariants = {
    enter: (slideDirection: "left" | "right") => ({
      x: slideDirection === "right" ? 50 : -50,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (slideDirection: "left" | "right") => ({
      x: slideDirection === "right" ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <div
      className={cn(
        "relative w-full min-h-full bg-transparent text-warm p-5 sm:p-8 lg:px-12 lg:py-8",
        className
      )}
    >
      <div className="grid min-h-full grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="order-2 flex flex-col lg:flex-row lg:justify-start lg:gap-6 lg:order-1 lg:col-span-2 lg:pt-4">
          {/* Left: Vertical text title on desktop */}
          <div className="hidden lg:flex lg:flex-col lg:justify-start lg:items-center lg:shrink-0 lg:pt-0">
            <h3 className="text-xs font-black uppercase tracking-[0.28em] text-charge [writing-mode:vertical-rl] lg:rotate-180">
              Product Range
            </h3>
          </div>

          {/* Right: Pagination index on top, thumbnails below */}
          <div className="flex flex-col gap-3 flex-grow">
            <div className="flex items-center gap-3 lg:justify-start">
              <span className="font-mono text-[10px] font-bold text-warm/45 whitespace-nowrap">
                {String(currentIndex + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}
              </span>
              <h3 className="lg:hidden text-[9px] font-black uppercase tracking-[0.22em] text-charge whitespace-nowrap">
                Product Range
              </h3>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:flex-nowrap lg:gap-2">
              {thumbnailReviews.map((review) => {
                const originalIndex = reviews.findIndex((item) => item.id === review.id);
                const isActive = originalIndex === currentIndex;

                return (
                  <button
                    key={review.id}
                    type="button"
                    onClick={() => handleThumbnailClick(originalIndex)}
                    className={`relative h-20 w-16 flex-shrink-0 overflow-hidden border bg-steel/60 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-charge lg:h-24 lg:w-20
                      ${isActive
                        ? 'border-charge opacity-100 shadow-md shadow-charge/10 bg-forge'
                        : 'border-warm/10 opacity-50 hover:border-charge/50 hover:opacity-85'
                      }
                    `}
                    aria-label={`View ${review.name}`}
                  >
                    <img
                      src={review.thumbnailSrc}
                      alt={review.name}
                      className="h-full w-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative order-1 min-h-[320px] overflow-hidden lg:order-2 lg:col-span-5 lg:min-h-[500px] lg:pt-4">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex}
              src={activeReview.imageSrc}
              alt={activeReview.name}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 w-full h-full object-contain p-0 drop-shadow-[0_0_36px_rgba(232,160,32,0.18)]"
            />
          </AnimatePresence>

          {/* Mobile-only: arrows overlaid on left/right edges of image */}
          <div className="lg:hidden">
            <button
              onClick={handlePrev}
              aria-label="Previous product"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-forge/80 border border-warm/20 flex items-center justify-center hover:border-charge/50 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 text-warm" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next product"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-charge flex items-center justify-center hover:bg-charge/80 transition-colors"
            >
              <ArrowRight className="h-4 w-4 text-forge" />
            </button>
          </div>
        </div>

        <div className="order-3 flex flex-col justify-start lg:col-span-5 lg:pl-4 xl:pl-8">
          <div className="relative min-h-[240px] overflow-hidden pt-2 lg:pt-4">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="pr-2"
              >
                <h3 className="mt-3 text-3xl font-black uppercase leading-tight text-warm sm:text-4xl">
                  {activeReview.name}
                </h3>
                <blockquote className="mt-7 border-l-2 border-charge pl-5 text-base leading-7 text-warm/75 sm:text-lg">
                  {activeReview.quote}
                </blockquote>
                
                {activeReview.specs && activeReview.specs.length > 0 && (
                  <div className="mt-8">
                    <div className="space-y-6">
                      {activeReview.specs.map((specGroup, idx) => (
                        <div key={idx}>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-charge mb-3">
                            {specGroup.category}
                          </h4>
                          <ul className="space-y-2">
                            {specGroup.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex text-sm">
                                <span className="w-1/2 text-warm/60 font-medium pr-4">{item.label}</span>
                                <span className="w-1/2 text-warm/90">{item.value}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeReview.features && activeReview.features.length > 0 && (
                  <div className="mt-6 flex flex-wrap sm:flex-nowrap items-center gap-4 xl:gap-6 border-t border-warm/10 pt-6 w-full">
                    {activeReview.features.map((feature, idx) => (
                      <React.Fragment key={idx}>
                        <div className="flex items-center gap-3">
                          <div className="text-warm/80">
                            {feature.icon}
                          </div>
                          <div>
                            <div className="text-sm font-black uppercase text-charge leading-none">{feature.title}</div>
                            <div className="text-xs font-medium uppercase text-warm/70 mt-1 leading-none">{feature.subtitle}</div>
                          </div>
                        </div>
                        {idx < activeReview.features!.length - 1 && (
                          <div className="hidden sm:block h-8 w-px bg-warm/10 flex-shrink-0"></div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 hidden lg:flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={handlePrev}
              aria-label="Previous product"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              className="rounded-full"
              onClick={handleNext}
              aria-label="Next product"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
