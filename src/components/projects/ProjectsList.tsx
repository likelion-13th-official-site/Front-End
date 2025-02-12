import { projectsData } from './projectsData';

export default function ProjectsList() {
  return (
    <section className="text-text-primary">
      {projectsData.map((proj, idx) => (
        <div id="proj-box" key={idx}>
          <div id="proj-left">
            <div id="title-year">
              <h1>{proj.title}</h1>
              <p>{proj.year}</p>
            </div>
            <h3>{proj.desc}</h3>
          </div>
          <div id="proj-right">
            <h4>{proj.event}</h4>
            <img src={proj.img} alt={proj.title} />
          </div>
        </div>
      ))}
    </section>
  );
}
