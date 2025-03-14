import { useEffect } from "react";
import styles from "./index.module.scss";
import { Presenter } from "./presenter";

export const HybridScrollPage: React.FC = () => {
  useEffect(() => {
    const transform = (section: Element) => {
      const offsetTop = section.parentElement?.offsetTop;

      const scrollSection = section.querySelector(
        `.${styles.horizontalScroll}`
      ) as HTMLElement | null;

      if (scrollSection === null || offsetTop === undefined) return;

      let percentage =
        ((window.scrollY - offsetTop) / window.innerHeight) * 100;

      percentage = percentage < 0 ? 0 : percentage > 300 ? 300 : percentage;

      scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
    };

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
