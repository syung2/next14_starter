"use client";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
import Image from "next/image";
const Links = () => {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = false;
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink key={link.title} title={link.title} path={link.path} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink title="Admin" path="/admin" />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink title="Login" path="/login" />
        )}
      </div>
      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt="menu"
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink key={link.title} title={link.title} path={link.path} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
