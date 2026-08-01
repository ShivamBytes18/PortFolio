import Reveal from "./Reveal";
import { skillGroups } from "../data/portfolio";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">GET /skills</span>
          <h2 className="section-title">What I work with</h2>
        </Reveal>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06} className="skill-group">
              <h3 className="skill-group__title">{group.title}</h3>
              <div className="skill-group__tags">
                {group.items.map((item) => (
                  <span key={item} className="skill-tag">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
