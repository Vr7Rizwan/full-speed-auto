"use client";
import { useState, useEffect, useRef } from "react";

export default function TriggerOnScroll() {
  const [triggered, setTriggered] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], observerInstance) => {
        if (entry.isIntersecting) {
          setTriggered(true); // trigger action
          observerInstance.unobserve(entry.target); // optional: trigger only once
        }
      },
      {
        root: null, // viewport
        threshold: 0.1, // section visible by 10%
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div>
      <div style={{ height: "150vh" }}>Scroll down to trigger</div>

      <section
        ref={sectionRef}
        style={{ height: "300px", backgroundColor: "lightgreen" }}
      >
        {triggered ? "🎉 Action triggered!" : "Keep scrolling..."}
      </section>

      <div style={{ height: "150vh" }}>More content below...</div>
    </div>
  );
}
