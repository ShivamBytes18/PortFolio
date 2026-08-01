import Reveal from "./Reveal";
import { experience } from "../data/portfolio";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">GET /experience</span>
          <h2 className="section-title">Where I've worked</h2>
        </Reveal>

        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal key={job.org} delay={i * 0.12} className="timeline__row">
              <div className="timeline__marker">
                <span className="timeline__dot" />
                {i < experience.length - 1 && <span className="timeline__line" />}
              </div>

              <div className="timeline__content">
                <div className="timeline__top">
                  <h3 className="timeline__role">{job.role}</h3>
                  <span className="timeline__period">{job.period}</span>
                </div>
                <p className="timeline__org">{job.org}</p>
                <ul className="timeline__points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
