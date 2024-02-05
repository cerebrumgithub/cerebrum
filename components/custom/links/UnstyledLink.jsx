import React from "react";
import Link from "next/link";

const UnstyledLink = React.forwardRef(
  ({ href, openNewTab, styling, children, ...rest }, ref) => {
    const isNewTab =
      openNewTab !== undefined
        ? openNewTab
        : href && !href.startsWith("/") && !href.startsWith("#");

    if (!isNewTab) {
      return (
        <>
          <Link href={href} legacyBehavior>
          <a ref={ref} {...rest} className={styling}>
            {children}
          </a>
        </Link>
        </>
      );
    }
    return (
      <>
        <a
          ref={ref}
          target="_blank"
          rel="noopener noreferrer"
          href={href}
          {...rest}
          className={styling}
        >
          {children}
        </a>
      </>
    );
  }
);

UnstyledLink.displayName = "UnstyledLink";
export default UnstyledLink;
