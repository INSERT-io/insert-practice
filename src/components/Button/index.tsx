import Link from "next/link";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
type BaseButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
};

export type OnClickButtonProps = BaseButtonProps & {
  type: "button" | "submit";
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export type LinkButtonProps = BaseButtonProps & {
  type: "link";
  href: string;
};

const OnClickButton: React.FC<OnClickButtonProps> = ({
  children,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={styles.buttonWrapper}
    >
      {children}
    </button>
  );
};

const LinkButton: React.FC<LinkButtonProps> = ({ href, children }) => {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    console.log(router.pathname);
    if (router.pathname === href) {
      e.preventDefault();
    }
  };
  return (
    <Link href={href} onClick={handleClick}>
      <div className={styles.buttonWrapper}>{children}</div>
    </Link>
  );
};

export const Button: React.FC<OnClickButtonProps | LinkButtonProps> = (
  props
) => {
  if (props.type === "button" || props.type === "submit") {
    return <OnClickButton {...props} />;
  }

  if (props.type === "link") {
    return <LinkButton {...props} />;
  }

  return null;
};
