import { useReveal } from "./useReveal";

const experiences = [
  {
    title: "Java Full Stack Development Intern",
    company: "JSpiders",
    duration: "Jan 2026 – Present",
    current: true,
    points: [
      "Building full-stack applications using Core Java, Spring Boot, Hibernate, and REST APIs across a structured, project-based curriculum",
      "Developing MVC-architected web apps with HTML5, CSS3, and JavaScript, focused on reusable, component-based UI design",
      "Designing normalized MySQL schemas and writing optimized SQL queries to support full CRUD workflows",
      "Integrating Spring Boot backends with React.js frontends, persisting data through Hibernate ORM",
      "Practicing Git-based version control and participating in peer code reviews for collaborative development",
    ],
  },
  {
    title: "Full Stack Web Development Intern",
    company: "Aiva Solution Integrations",
    duration: "Nov 2024 – Jan 2025",
    current: false,
    points: [
      "Developed web applications using Java, HTML, CSS, and JavaScript",
      "Implemented database operations using Oracle SQL and JDBC",
      "Assisted in building backend logic and integrating frontend with backend",
      "Collaborated with team members to debug and optimize application performance",
      "Gained practical experience in real-world web application development lifecycle",
    ],
  },
];

const educations = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "ATME College of Engineering, Mysuru",
    duration: "Feb 2024 – Dec 2025",
    gpa: "8.76 / 10",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Vidyavahini First Grade College, Tumakuru",
    duration: "Oct 2020 – Sep 2023",
    gpa: "7.67 / 10",
  },
];

export default function Experience() {
  const ref = useReveal();
  return (
    <section id="experience" className="py-20 px-4" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="reveal text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">Work <span className="text-gradient">Experience</span></h2>
          <p className="text-muted-foreground mt-3">Building real-world products, one sprint at a time.</p>
        </div>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px dark:bg-gradient-to-b dark:from-primary/40 dark:via-accent/30 dark:to-transparent light:bg-gradient-to-b light:from-primary/20 light:via-accent/15 light:to-transparent" />
          <div className="space-y-8">
            {experiences.map((e, i) => (
              <div key={e.title} className={`reveal relative md:grid md:grid-cols-2 md:gap-8 ${i % 2 ? "md:[&>article]:col-start-2" : ""}`}>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-6 w-3 h-3 rounded-full bg-gradient-primary shadow-glow" />
                <article className="ml-12 md:ml-0 glass rounded-2xl p-6 card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold">{e.title}</h3>
                      <div className="text-primary text-sm">{e.company}</div>
                    </div>
                    {e.current && (
                      <span className="px-2.5 py-1 rounded-full text-xs bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        Currently Working
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{e.duration}</div>
                  <ul className="mt-4 space-y-2">
                    {e.points.map((p) => (
                      <li key={p} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary mt-1">▹</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20">
          <div className="reveal text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold"><span className="text-gradient">Education</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {educations.map((ed) => (
              <article key={ed.degree} className="reveal glass rounded-2xl p-6 card-hover">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold">{ed.degree}</h3>
                </div>
                <div className="text-primary text-sm mt-1">{ed.school}</div>
                <div className="text-xs text-muted-foreground mt-1">{ed.duration}</div>
                <div className="mt-4 inline-flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">GPA:</span>
                  <span className="font-semibold text-gradient">{ed.gpa}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}