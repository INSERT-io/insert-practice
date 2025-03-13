import { useEffect, useRef, useState } from "react";
import { Presenter } from "./presenter";

export const HorizontalScrollPage: React.FC = () => {
  const [allowVerticalScroll, setAllowVerticalScroll] =
    useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!allowVerticalScroll) return;
      if (containerRef.current === null) return;
      // x軸のスクロールの方が大きい場合はスクロールしない
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      e.preventDefault();
      containerRef.current.scrollBy({
        left: e.deltaY,
        behavior: "instant",
      });
      containerRef2.current?.scrollBy({
        left: e.deltaY,
        behavior: "instant",
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [allowVerticalScroll]);

  const handleReturnHome = (isSmooth: boolean) => {
    if (isSmooth) {
      containerRef.current?.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    containerRef.current?.scrollTo({ left: 0, behavior: "instant" });
  };

  const handleReturnHome2 = (isSmooth: boolean) => {
    if (isSmooth) {
      containerRef2.current?.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    containerRef2.current?.scrollTo({ left: 0, behavior: "instant" });
  };

  return (
    <Presenter
      containerRef={containerRef}
      containerRef2={containerRef2}
      handleReturnHome={handleReturnHome}
      handleReturnHome2={handleReturnHome2}
      setAllowVerticalScroll={setAllowVerticalScroll}
    />
  );
};
