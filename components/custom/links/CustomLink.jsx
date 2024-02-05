// import clsx from "clsx";
import UnstyledLink from "./UnstyledLink";
import Styles from "@/styles/Components.module.css";

export default function CustomLink({ children, className, href, ...rest }) {
  return (
    <UnstyledLink {...rest} href={href} className={Styles.link}>
      <span className={className}>{children}</span>
    </UnstyledLink>
  );
}
