"use client";

import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { FaShoppingBag, FaUser } from "react-icons/fa";

const NavbarComponent: React.FC = () => {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between align-center p-6 lg:px-8 poppins-semibold text-white">
      <div>
        <Link href="/">
          <img src="/logo.png" alt="" style={{ height: "55px" }} />
        </Link>
      </div>
      <div>
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <Link href="/home">
            <li className={styles.navbarLi}>HOME</li>
          </Link>
          <Link href="/store">
            <li className={styles.navbarLi}>STORE</li>
          </Link>
          <Link href="/about">
            <li className={styles.navbarLi}>ABOUT</li>
          </Link>
          <Link href="/contact">
            <li className={styles.navbarLi}>CONTACT</li>
          </Link>
        </ul>
      </div>
      <div className="flex gap-4">
        <Link href="/login">
          <button className={styles.navbarLi}>
            <FaUser size={20} />
          </button>
        </Link>
        <Link href="/cart">
          <button className={styles.navbarLi}>
            <FaShoppingBag size={20} />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarComponent;
