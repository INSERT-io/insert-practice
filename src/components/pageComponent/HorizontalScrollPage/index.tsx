import { useEffect, useRef } from "react";
import { Presenter } from "./presenter";

export const HorizontalScrollPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (containerRef.current === null) return;
      // x軸のスクロールの方が大きい場合はスクロールしない
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      e.preventDefault();
      containerRef.current.scrollBy({
        left: e.deltaY,
        behavior: "instant",
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const handleReturnHome = (isSmooth: boolean) => {
    if (isSmooth) {
      containerRef.current?.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    containerRef.current?.scrollTo({ left: 0, behavior: "instant" });
  };
  return (
    <Presenter
      containerRef={containerRef}
      handleReturnHome={handleReturnHome}
    />
  );
};
