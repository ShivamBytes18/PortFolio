import Reveal from "./Reveal";
import { profile } from "../data/portfolio";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <Reveal className="section-head">
          <span className="eyebrow">GET /about</span>
          <h2 className="section-title">About me</h2>
        </Reveal>

        <Reveal delay={0.1} className="about__body">
          <p>{profile.summary}</p>
          <div className="about__facts">
            <div className="about__fact">
              <span className="about__fact-num">3+</span>
              <span className="about__fact-label">production-ready apps built &amp; deployed</span>
            </div>
            <div className="about__fact">
              <span className="about__fact-num">400+</span>
              <span className="about__fact-label">DSA problems solved on LeetCode , CodeForces & GFG</span>
            </div>
            <div className="about__fact">
              <span className="about__fact-num">8.2</span>
              <span className="about__fact-label">CPI at IIIT Manipur</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
