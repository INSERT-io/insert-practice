import style from "./index.module.scss";

export const Presenter: React.FC = () => {
  return (
    <div className={style.linkTypePage}>
      <div className={style.content}>
        <h3>aタグ</h3>
        <a
          href={"https://developer.mozilla.org/ja/docs/Web/HTML/Element/a"}
          className={style.link}
        >
          hrefだけ指定したごく普通のリンク、同じタブで開く
        </a>
        <a
          href={"https://developer.mozilla.org/ja/docs/Web/HTML/Element/a"}
          className={style.link}
          target="_self"
        >
          {`target="_self"を指定したリンク、同じタブで開く`}
        </a>
        <a
          href={"https://developer.mozilla.org/ja/docs/Web/HTML/Element/a"}
          className={style.link}
          target="_blank"
        >
          {`target="_blank"を指定したリンク、新しいタブで開く`}
        </a>
        <a
          href={"https://developer.mozilla.org/ja/docs/Web/HTML/Element/a"}
          className={style.link}
          target="hoge"
        >
          {`target="hoge"を指定したリンク、開いてない場合は新しいタブで開く`}
        </a>
        <a
          href={"https://developer.mozilla.org/ja/docs/Web/HTML/Element/a"}
          className={style.link}
          target="huga"
        >
          {`target="huga"を指定したリンク、開いてない場合は新しいタブで開く`}
        </a>
      </div>
    </div>
  );
};
