import { useEffect } from "react";
import styles from "./index.module.scss";
import { Presenter } from "./presenter";

export const HybridScrollPage: React.FC = () => {
  useEffect(() => {
    const transform = (section: Element) => {
      // scroll要素のtopの座標を取得
      const offsetTop = section.parentElement?.offsetTop;

      const scrollSection = section.querySelector(
        `.${styles.horizontalScroll}`
      ) as HTMLElement | null;

      if (scrollSection === null || offsetTop === undefined) return;
      console.log(offsetTop);

      let percentage =
        ((window.scrollY - offsetTop) / window.innerHeight) * 100;

      // 0 ~ 300vwの間でスクロールを制限
      percentage = percentage < 0 ? 0 : percentage > 300 ? 300 : percentage;

      // 縦にスクロールした分だけ要素を横に移動させる
      scrollSection.style.transform = `translateX(${-percentage}vw)`;
    };

    // 全てのstickyWrapperを取得
    const stickySections = [
      ...document.querySelectorAll(`.${styles.stickyWrapper}`),
    ];

    window.addEventListener("scroll", () => {
      stickySections.forEach((stickySection) => {
        transform(stickySection);
      });
    });
  }, []);

  return <Presenter />;
};
