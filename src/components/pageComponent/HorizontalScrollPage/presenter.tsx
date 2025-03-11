import { useEffect, useRef } from "react";
import styles from "./index.module.scss";

export const Presenter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (containerRef.current === null) return;
      // x軸のスクロールの方が大きい場合はスクロールしない
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      e.preventDefault();
      containerRef.current.scrollBy({
        left: e.deltaY,
        behavior: "auto",
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className={styles.transVerticalScroll}>
      <h1 className={styles.title}>縦スクロールを横スクロールに変換</h1>
      <div ref={containerRef} className={styles.scroll}>
        {/* 要素を文言を変えて20個配置 */}
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className={styles.somethingContent}>
            要素{i}
          </div>
        ))}
      </div>
    </div>
  );
};
