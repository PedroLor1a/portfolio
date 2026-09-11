"use client";
import { useState } from "react";
import { projects } from "../data";
import { ProjectVisual } from "../components/ProjectCard";
export default function ProjectsPage() {
  const [filter, setFilter] = useState("Todos");
  const visible = projects.filter(
    (p) => filter === "Todos" || p.type === filter,
  );
  return (
    <div className="page-wrap">
      <section className="page-intro">
        <span className="eyebrow">01 / PROYECTOS</span>
        <h1>
          Ideas en acción<span className="accent-text">.</span>
        </h1>
        <p>
          Sistemas de gestión y productos financieros. Una
          selección de lo que construyo con código.
        </p>
      </section>
      <div className="filter-bar">
        <div role="group" aria-label="Filtrar proyectos">
          {["Todos", ...new Set(projects.map((project) => project.type))].map((f) => (
            <button
              key={f}
              className={filter === f ? "filter active-filter" : "filter"}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
            >
              {f}{" "}
              <span>
                {f === "Todos"
                  ? projects.length
                  : projects.filter((p) => p.type === f).length}
              </span>
            </button>
          ))}
        </div>
        <span className="mono" role="status">
          {visible.length} PROYECTOS
        </span>
      </div>
      <div className="project-list">
        {visible.map((project) => (
          <article className="project-detail" id={project.id} key={project.id}>
            <ProjectVisual project={project} />
            <div className="project-description">
              <span className="eyebrow">
                {project.number} / {project.category}
              </span>
              <h2>{project.title}</h2>
              <span className="repo-label">{project.id}</span>
              <p>{project.description}</p>
              <ul>
                {project.features.map((f) => (
                  <li key={f}>
                    <span>↗</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="chips">
                {project.stack.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

