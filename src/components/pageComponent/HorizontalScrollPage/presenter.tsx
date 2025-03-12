import clsx from "clsx";
import styles from "./index.module.scss";

type Props = {
  containerRef: React.RefObject<HTMLDivElement | null>;
  handleReturnHome: (isSmooth: boolean) => void;
};

export const Presenter: React.FC<Props> = ({
  containerRef,
  handleReturnHome,
}) => {
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
        <button
          onClick={() => handleReturnHome(true)}
          className={clsx(styles.somethingContent, styles.Button)}
        >
          トップに戻る(smooth)
        </button>
        <button
          onClick={() => handleReturnHome(false)}
          className={clsx(styles.somethingContent, styles.Button)}
        >
          トップに戻る(instant)
        </button>
      </div>
    </div>
  );
};
