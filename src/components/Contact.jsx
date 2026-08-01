import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import Reveal from "./Reveal";
import { profile } from "../data/portfolio";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal className="contact__card">
          <span className="eyebrow">POST /contact</span>
          <h2 className="contact__heading">Get in touch</h2>
          <p className="contact__sub">
            I'm open to full-stack, SaaS and AI-integration roles and internships. Feel free to reach out directly.
          </p>

          <div className="contact__row">
            <a href={`mailto:${profile.email}`} className="btn btn--primary">
              <FiMail /> {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="btn btn--ghost">
              {profile.phone}
            </a>
          </div>

          <div className="contact__socials">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <FiGithub /> GitHub <FiArrowUpRight className="contact__arrow" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <FiLinkedin /> LinkedIn <FiArrowUpRight className="contact__arrow" />
            </a>
            <a href={profile.leetcode} target="_blank" rel="noreferrer">
              <SiLeetcode /> LeetCode <FiArrowUpRight className="contact__arrow" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
