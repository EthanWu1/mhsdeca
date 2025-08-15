import React, { useEffect, useRef } from "react";

export default function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = (show) => {
      if (show) {
        el.style.transitionDelay = `${delay}ms`;
        el.classList.add("reveal-in");
        el.classList.remove("reveal-out");
      } else {
        el.classList.remove("reveal-in");
        el.classList.add("reveal-out");
      }
    };

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => reveal(e.isIntersecting)),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return <div ref={ref} className="reveal-base">{children}</div>;
}
