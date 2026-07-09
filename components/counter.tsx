"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: string;
  duration?: number;
}

export function Counter({ value, duration = 2500 }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  // Parse target number and suffix (e.g., "100+" -> target: 100, suffix: "+")
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) {
    return <span>{value}</span>;
  }

  const target = parseInt(match[1], 10);
  const suffix = match[2];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            // Ease-out cubic formula for a gentler, smoother deceleration
            const easeOutPercentage = 1 - Math.pow(1 - percentage, 3);
            
            setCount(Math.floor(easeOutPercentage * target));

            if (percentage < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target, duration]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}
