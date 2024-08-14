"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export interface NavLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    LinkProps {
  className?: string;
}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, href, ...props }, ref) => {
    const currentRoute = usePathname();

    const isSelected =
      (href && href === "/" && currentRoute === "/") ||
      (href && href !== "/" && currentRoute.startsWith(href as string));

    return (
      <Link
        href={href}
        ref={ref}
        className={cn(
          "hover:underline underline-offset-2 transition-all ease-linear duration-200 text-gray-600",
          isSelected && "text-gray-950",
          className,
        )}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
