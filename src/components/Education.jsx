import Reveal from "./Reveal";
import { education, achievements } from "../data/portfolio";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container education__grid">
        <Reveal>
          <span className="eyebrow">GET /education</span>
          <h2 className="section-title">{education.degree}</h2>
          <p className="education__school">{education.school}</p>
          <div className="education__meta">
            <span>{education.period}</span>
            <span className="education__cpi">CPI {education.cpi}</span>
          </div>
        </Reveal>

        <div className="achievements">
          {achievements.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className="achievement">
              <h4 className="achievement__title">{item.title}</h4>
              <p className="achievement__detail">{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
