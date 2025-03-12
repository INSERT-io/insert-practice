import clsx from "clsx";
import styles from "./index.module.scss";

type Props = {
  containerRef: React.RefObject<HTMLDivElement | null>;
  containerRef2: React.RefObject<HTMLDivElement | null>;
  handleReturnHome: (isSmooth: boolean) => void;
  handleReturnHome2: (isSmooth: boolean) => void;
  setAllowVerticalScroll: (value: boolean) => void;
};

export const Presenter: React.FC<Props> = ({
  containerRef,
  containerRef2,
  handleReturnHome,
  handleReturnHome2,
  setAllowVerticalScroll,
}) => {
  return (
    <div className={styles.transVerticalScroll}>
      <div className={styles.header}>
        <h1 className={styles.title}>縦スクロールを横スクロールに変換</h1>
        <input
          type="checkbox"
          onChange={(e) => setAllowVerticalScroll(e.target.checked)}
        />
      </div>
      <div ref={containerRef2} className={styles.scroll}>
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
      <div ref={containerRef} className={styles.scroll}>
        {/* 要素を文言を変えて20個配置 */}
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className={styles.somethingContent}>
            要素{i}
          </div>
        ))}
        <button
          onClick={() => handleReturnHome2(true)}
          className={clsx(styles.somethingContent, styles.Button)}
        >
          トップに戻る(smooth)
        </button>
        <button
          onClick={() => handleReturnHome2(false)}
          className={clsx(styles.somethingContent, styles.Button)}
        >
          トップに戻る(instant)
        </button>
      </div>
    </div>
  );
};
