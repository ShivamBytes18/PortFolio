import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiHome, FiUser, FiBriefcase, FiCode, FiMail, FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

const LINKS = [
  { href: "#top", label: "Home", icon: FiHome },
  { href: "#about", label: "About", icon: FiUser },
  { href: "#projects", label: "Work", icon: FiBriefcase },
  { href: "#skills", label: "Skills", icon: FiCode },
  { href: "#contact", label: "Contact", icon: FiMail },
];

const SPY_TARGETS = ["#top", "#about", "#experience", "#projects", "#skills", "#education", "#contact"];

function useLiveClock(timeZone) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [timeZone]);

  return time;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");
  const time = useLiveClock("Asia/Kolkata");

  useEffect(() => {
    const sections = SPY_TARGETS.map((id) => document.querySelector(id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-42% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const isLinkActive = (href) => {
    if (href === "#top") return active === "#top";
    if (href === "#projects") return active === "#projects";
    if (href === "#about") return active === "#about" || active === "#experience";
    if (href === "#contact") return active === "#contact" || active === "#education";
    return active === href;
  };

  return (
    <div className="topbar">
      <div className="topbar__side topbar__location">
        <span className="topbar__dot" />
        Asia/Kolkata
      </div>

      <nav className="topbar__pill">
        {LINKS.map((link) => {
          const Icon = link.icon;
          const isActive = isLinkActive(link.href);
          return (
            <a
              key={link.href}
              href={link.href}
              className={`topbar__link ${isActive ? "is-active" : ""}`}
            >
              <Icon className="topbar__icon" />
              <span className="topbar__label">{link.label}</span>
            </a>
          );
        })}
      </nav>

      <div className="topbar__side topbar__clock">{time}</div>

      <button
        className="topbar__burger"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <FiX /> : <FiMenu />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="topbar__mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`topbar__mobile-link ${isLinkActive(link.href) ? "is-active" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  <Icon /> {link.label}
                </a>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
