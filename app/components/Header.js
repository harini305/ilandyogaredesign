"use client";

import { useEffect, useRef, useState } from "react";
import { nav, whatsapp } from "../content";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    menuRef.current?.querySelector("a")?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => window.innerWidth > 960 && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#top" className={styles.wordmark}>
          Island Yoga <span>&amp;</span> Sound Lembongan
        </a>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.toggleBars} aria-hidden="true" />
          <span className={styles.toggleLabel}>{open ? "Close" : "Menu"}</span>
        </button>

        <nav
          id="site-menu"
          ref={menuRef}
          aria-label="Main"
          className={`${styles.nav} ${open ? styles.open : ""}`}
        >
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className={`button ${styles.cta}`}
            href={whatsapp("Hi Island Yoga & Sound, I have a question.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Message us on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
