"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

function Component1() {
  const [w, setW] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setW(window.innerWidth);

      const handleResize = () => setW(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="flex items-center justify-center px-5 py-5 md:px-15 bg-primary md:py-18">
      <Link href={"/Component1Form"}>
        <img
          className="rounded-3xl m-auto"
          src={w > 1000 ? "/assets/pic1.webp" : "/assets/pic1Mob.webp"}
          alt="Hero"
        />
      </Link>
    </div>
  );
}

export default Component1;
