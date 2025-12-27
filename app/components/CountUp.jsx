"use client";

import { useEffect, useRef, useState } from "react";

const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

const toPersianNumber = (num) => {
  return num.toString().replace(/\d/g, (digit) => persianDigits[digit]);
};

export default function CountUp({
  end,
  duration = 2000,
  suffix = "",
  className = "",
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuad = progress * (2 - progress);
      const currentCount = easeOutQuad * end;

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  const formatNumber = (num) => {
    if (typeof num !== "number" || isNaN(num)) return "۰";

    let formatted;
    if (num % 1 !== 0) {
      formatted = num.toFixed(1);
    } else {
      formatted = Math.floor(num).toString();
    }

    return toPersianNumber(formatted);
  };

  return (
    <span ref={ref} className={className}>
      {formatNumber(count)}
      {suffix}
    </span>
  );
}
