"use client";
import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";
const NavLink = ({ title, path }: { title: string; path: string }) => {
  const pathName = usePathname();
  return (
    <Link
      href={path}
      key={title}
      className={`${styles.container} ${pathName === path && styles.active}`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
