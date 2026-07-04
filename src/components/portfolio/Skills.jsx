import { Code2, Library, Layout, Database, Cloud, Wrench } from "lucide-react";
import { useReveal } from "./useReveal";

const skillCards = [
  {
    Icon: Code2,
    title: "Programming Languages",
    items: ["Java", "OOPs Concepts", "Collections Framework", "Exception Handling", "Multithreading", "File Handling", "Memory Management"],
  },
  {
    Icon: Library,
    title: "Backend Technologies",
    items: ["Spring Boot", "Spring MVC", "Spring Data JPA", "JDBC", "Hibernate", "REST APIs", "Microservices Architecture"],
  },
  {
    Icon: Layout,
    title: "Frontend Technologies",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "DOM Manipulation", "Responsive Web Design"],
  },
  {
    Icon: Database,
    title: "Database",
    items: ["MySQL", "Oracle SQL", "SQL Queries", "Subqueries", "Joins", "CRUD Operations"],
  },
  {
    Icon: Cloud,
    title: "DevOps & Cloud",
    items: ["Docker", "Kubernetes", "AWS Cloud Fundamentals", "CI/CD Pipelines", "GitHub Actions"],
  },
  {
    Icon: Wrench,
    title: "Concepts & Tools",
    items: ["Maven", "SDLC", "Agile", "Scrum", "Git", "GitHub", "Postman", "VS Code", "Eclipse", "Software Testing"],
  },
];

const specializations = [
  "Backend Development", "REST API Development", "Database Management",
  "Spring Boot Applications", "Microservices Architecture", "Scalable System Design",
  "Full-Stack Java Development", "Agile & Scrum Practices", "API Integration", "Performance Optimization",
];

export default function Skills() {
  const ref = useReveal();
  return (
    <section id="skills" className="py-20 px-4" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="reveal text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">Skills & <span className="text-gradient">Expertise</span></h2>
          <p className="text-muted-foreground mt-3">A curated toolkit honed across internships and projects.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCards.map(({ Icon, title, items }) => (
            <article key={title} className="reveal glass rounded-2xl p-6 card-hover">
              <div className="w-11 h-11 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground mb-4">
                <Icon size={20} />
              </div>
              <h3 className="font-semibold mb-3">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((it) => (
                  <span key={it} className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">{it}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16">
          <div className="reveal text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold">Core <span className="text-gradient">Specializations</span></h3>
          </div>
          <div className="reveal flex flex-wrap gap-3 justify-center">
            {specializations.map((s) => (
              <span key={s} className="glass px-4 py-2 rounded-full text-sm card-hover dark:border dark:border-primary/10 light:border light:border-primary/5">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}