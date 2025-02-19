import styles from "./index.module.scss";
import React from "react";

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      {/* <div className={styles.tabs}>
        <div className={styles.tab}>
          <Button type="link" href="/main/hoge">
            ほげ
          </Button>
        </div>
        <div className={styles.tab}>
          <Button type="link" href="/main/fuga">
            ふが
          </Button>
        </div>
      </div> */}
    </div>
  );
};
