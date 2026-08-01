import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowUpRight } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { profile } from "../data/portfolio";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="section hero">
      <div className="hero__aurora" aria-hidden="true" />
      <div className="container hero__inner">
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="status-tag">available for opportunities</span>

          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__role">{profile.tagline}</p>

          <p className="hero__tagline">{profile.intro}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View projects <FiArrowUpRight />
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
            </a>
          </div>

          <div className="hero__facts">
            {profile.quickFacts.map((fact) => (
              <div className="hero__fact" key={fact.label}>
                <span className="hero__fact-value">{fact.value}</span>
                <span className="hero__fact-label">{fact.label}</span>
              </div>
            ))}
          </div>

          <div className="hero__socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode">
              <SiLeetcode />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
