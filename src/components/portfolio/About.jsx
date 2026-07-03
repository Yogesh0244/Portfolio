import { Briefcase, GraduationCap, Languages, CircleCheck } from "lucide-react";
import { useReveal } from "./useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="reveal text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">About <span className="text-gradient">Me</span></h2>
          <p className="text-muted-foreground mt-3">A glimpse into who I am and what I do</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="reveal glass rounded-2xl p-6 md:p-8 card-hover">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary/15 text-primary grid place-items-center">★</span>
              My Journey
            </h3>
            <p className="text-muted-foreground leading-relaxed">
             Hi, I'm Yogesh M T — A Java Backend Developer and MCA graduate passionate about building scalable, real-world web applications. I specialize in Java, Spring Boot, REST APIs, and database-driven systems, with hands-on experience across the full development lifecycle from backend logic to frontend integration. During my internship at Aiva Solution Integrations, I worked on real-time web applications using Java, JDBC, and Oracle SQL, sharpening my skills in debugging and performance optimization. I've also built projects like Smart Shield, an ML-powered phishing detection system, and a full-stack Banquet Hall Booking platform — reflecting my drive to solve practical problems with clean, efficient code. I'm now looking to bring this energy into an entry-level Java Developer role where I can keep learning and contribute to high-quality software.</p>
          </article>
          <article className="reveal glass rounded-2xl p-6 md:p-8 card-hover">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary/15 text-primary grid place-items-center">⚡</span>
              Current Status
            </h3>
            <ul className="space-y-4">
              {[
                { Icon: Briefcase, label: "Role", value: "Java Backend Developer - Open to Opportunities" },
                { Icon: GraduationCap, label: "Education", value: "MCA - ATME College of Engineering, Mysuru" },
                { Icon: Languages, label: "Languages", value: "English (Proficient), Kannada (Native)" },
              ].map(({ Icon, label, value }) => (
                <li key={label} className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg glass grid place-items-center text-primary shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
                    <div className="text-sm">{value}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-2 rounded-full dark:bg-emerald-500/10 dark:border dark:border-emerald-500/30 dark:text-emerald-400 light:bg-emerald-500/15 light:border light:border-emerald-600/30 light:text-emerald-600 text-sm">
              <CircleCheck size={16} /> Open to Full-Time Roles 🟢
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}