import clsx from "clsx";
import styles from "./index.module.scss";

export const Presenter: React.FC = () => {
  return (
    <div className={styles.transVerticalScroll}>
      <div className={styles.section}>Hybrid Scroll</div>

      <div className={styles.scrollContainer}>
        <div className={styles.stickyWrapper}>
          <div className={styles.horizontalScroll}>
            <div className={styles.scrollContents}>
              縦長のコンテナに横長のコンテンツを配置
            </div>
            <div className={styles.scrollContents}>
              横長のコンテンツにはposition: stickyを指定 <br />
              親要素の中でスクロールが固定される
            </div>
            <div className={styles.scrollContents}>
              JSで横長のコンテンツに対して横スクロールされるように
            </div>
            <div className={styles.scrollContents}>なんかできた</div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        Hybrid Scroll <br />
        コンテナ見やすいバージョン
      </div>
      <div className={clsx(styles.scrollContainer, styles.Container)}>
        <div className={clsx(styles.stickyWrapper, styles.Container)}>
          <div className={clsx(styles.horizontalScroll, styles.Container)}>
            <div className={clsx(styles.scrollContents, styles.Container)}>
              縦長のコンテナに横長のコンテンツを配置
            </div>
            <div className={clsx(styles.scrollContents, styles.Container)}>
              横長のコンテンツにはposition: stickyを指定 <br />
              親要素の中でスクロールが固定される
            </div>
            <div className={clsx(styles.scrollContents, styles.Container)}>
              JSで横長のコンテンツに対して横スクロールされるように
            </div>
            <div className={clsx(styles.scrollContents, styles.Container)}>
              なんかできた
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>おしまい</div>
    </div>
  );
};
