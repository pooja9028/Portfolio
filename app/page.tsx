"use client";

import { motion } from "framer-motion";
import {
  Download,
  Mail,
  ArrowDown,
  Code2,
  Server,
  Database,
  Globe,
  Zap,
  Search,
  Settings,
  CreditCard,
  GraduationCap,
  Briefcase,
  ExternalLink,
} from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Home() {

  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const navItems = [
    "Home",
    "About",
    "Skills",
    "Education",
    "Experience",
    "Services",
    "Projects",
    "Contact",
  ];

  const skills = [
    {
      icon: Code2,
      title: "Programming",
      items: ["PHP", "JavaScript", "jQuery", "HTML", "CSS", "React", "Ext JS"],
    },
    {
      icon: Globe,
      title: "Frameworks & CMS",
      items: ["CodeIgniter", "WordPress"],
    },
    {
      icon: Database,
      title: "Databases",
      items: ["MySQL", "Microsoft SQL Server"],
    },
    {
      icon: Server,
      title: "Tools & Platforms",
      items: ["VS Code", "Visual Studio", "GitHub", "Linux", "Windows"],
    },
  ];

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Designing and developing responsive, scalable and user-friendly websites and web applications.",
    },
    {
      icon: Zap,
      title: "Website Optimization",
      description:
        "Improving website performance, loading speed and overall user experience.",
    },
    {
      icon: Server,
      title: "Server Management",
      description:
        "Managing Linux and Windows servers and resolving server-related technical issues.",
    },
    {
      icon: Search,
      title: "Technical SEO",
      description:
        "Implementing technical SEO improvements and resolving website-related SEO issues.",
    },
    {
      icon: Settings,
      title: "API Development",
      description:
        "Developing and integrating REST APIs for web applications and external services.",
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description:
        "Integrating payment gateways and developing custom payment-related functionality.",
    },
  ];

  const experiences = [
    {
      company: "Syspree Digital Pvt. Ltd.",
      role: "Sr. Web Developer",
      duration: "March 2022 – Present",
      points: [
        "Writing well-designed, testable, and efficient code using best practices.",
        "Managing Linux servers and resolving server-related issues.",
        "Handling both technical and graphical aspects of websites.",
        "Optimizing website performance and speed.",
        "Implementing SEO-related technical fixes.",
        "Maintaining websites and resolving bugs.",
        "Working with REST API development and integration.",
      ],
    },
    {
      company: "Anonimous Tech Pvt. Ltd., Sion",
      role: "PHP Developer",
      duration: "August 2021 – March 2022",
      points: [
        "Developing high-quality web applications with a focus on functionality and usability.",
        "Maintaining and updating existing websites.",
        "Ensuring website responsiveness and speed optimization.",
        "Implementing REST APIs.",
        "Conducting SEO-related technical fixes.",
      ],
    },
    {
      company: "Infiniti Management Solutions Pvt. Ltd., Thane",
      role: "Web Developer",
      duration: "March 2020 – March 2021",
      points: [
        "Developing and maintaining websites with a focus on performance and user experience.",
        "Optimizing websites for faster loading speeds.",
        "Implementing technical SEO improvements.",
      ],
    },
    {
      company: "Green Code Technologies Pvt. Ltd.",
      role: "Web Developer",
      duration: "October 2018 – February 2020",
      points: [
        "Integrating themes and customizing plugins for WordPress websites.",
        "Coordinating with clients to enhance website performance and features.",
        "Conducting SEO audits and applying technical fixes.",
      ],
    },
    {
      company: "eLuminous Technologies Pvt. Ltd., Nashik",
      role: "Software Engineer",
      duration: "May 2016 – February 2017",
      points: [
        "Designing and developing websites using Core PHP, WordPress, and Shopify.",
        "Implementing SEO-friendly practices for website development.",
      ],
    },
  ];

  const education = [
    {
      degree: "MCA (Engineering)",
      university: "Savitribai Phule Pune University",
      year: "2016",
      percentage: "",
    },
    {
      degree: "BSc (Computer Science)",
      university: "Savitribai Phule Pune University",
      year: "2013",
      percentage: "",
    },
    {
      degree: "HSC (12th)",
      university: "Savitribai Phule Pune University",
      year: "2010",
      percentage: "",
    },
    {
      degree: "SSC (10th)",
      university: "Savitribai Phule Pune University",
      year: "2008",
      percentage: "",
    },
  ];

  const projects = [
    {
      title: "Syspree",
      description:
        "Designed and developed the entire website with approximately 100–150 pages.",
      technologies: ["WordPress", "PHP", "SEO", "Performance"],
    },
    {
      title: "SuseeBiz",
      description:
        "Digital solutions website developed with a focus on usability and performance.",
      technologies: ["Web Development", "SEO"],
      link: "https://suseebiz.com/",
    },
    {
      title: "Neevo Consulting",
      description:
        "Static business website developed with a clean and professional interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://neevoconsulting.com/",
    },
    {
      title: "AVN Quality",
      description:
        "Business website development and technical implementation.",
      technologies: ["WordPress", "PHP"],
      link: "https://avnquality.com/",
    },
    {
      title: "Gulf Bitumen",
      description:
        "Website development with API integration and custom plugin development.",
      technologies: ["WordPress", "API", "PHP"],
      link: "https://gulfbitumen.com/",
    },
    {
      title: "CEDP Education",
      description:
        "WordPress website with PayPal integration and website optimization.",
      technologies: ["WordPress", "PayPal", "PHP"],
      link: "https://cedp-edu.com/",
    },
    {
      title: "Watsuniq",
      description:
        "WooCommerce website with custom forms and shipment tracking functionality.",
      technologies: ["WooCommerce", "PHP", "WordPress"],
      link: "https://watsuniq.com/",
    },
    {
      title: "Relation Buildcon",
      description:
        "Optimized HTML5 website developed using Bootstrap 4.",
      technologies: ["HTML5", "Bootstrap", "CSS"],
      link: "https://relationbuildcon.com/",
    },
    {
      title: "The Marketing Nerdz",
      description:
        "Digital marketing courses and user modules developed for the website.",
      technologies: ["WordPress", "PHP", "Courses"],
      link: "https://themarketingnerdz.com/",
    },
    {
      title: "TMN Prime",
      description:
        "Digital marketing course platform and user module development.",
      technologies: ["WordPress", "PHP"],
      link: "https://tmnprime.com/",
    },
    {
      title: "MSATWIK",
      description:
        "WooCommerce website with Razorpay payment gateway integration.",
      technologies: ["WooCommerce", "Razorpay", "PHP"],
      link: "https://msatwik.com/",
    },
  ];

  return (
    <main className="min-h-screen bg-[#121318] text-white">
      {/* ================= NAVBAR ================= */}

      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#121318]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a
            href="#home"
            className="text-xl font-bold text-purple-500"
          >
            Pooja Varade
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-gray-300 transition duration-300 hover:text-purple-500"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium transition hover:bg-purple-700 md:block"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
      >
        {/* Background effects */}

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[130px]" />

        <div className="absolute left-[10%] top-[30%] h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_20px_5px_rgba(147,51,234,0.5)]" />

        <div className="absolute right-[10%] top-[40%] h-7 w-7 rounded-full border border-purple-600/60">
          <div className="absolute inset-2 rounded-full bg-purple-600" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">

          {/* Profile */}

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-8 h-28 w-28 rounded-full border-4 border-purple-600 p-1 shadow-[0_0_35px_rgba(147,51,234,0.8)]"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#202126] text-4xl">
              👩‍💻
            </div>
          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-bold tracking-tight md:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-purple-600">
              Pooja Varade
            </span>
          </motion.h1>

          {/* Title */}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-5 text-2xl text-gray-400 md:text-3xl"
          >
            Web Developer
          </motion.h2>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-400 md:text-lg"
          >
            I create efficient, responsive and scalable websites
            and web applications using modern technologies.
            Passionate about clean code, performance, APIs,
            WordPress and technical SEO.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-9 flex flex-wrap justify-center gap-4"
          >
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-medium shadow-lg shadow-purple-600/20 transition hover:bg-purple-700"
            >
              <Mail size={18} />
              Get In Touch
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-lg border border-gray-700 px-6 py-3 font-medium text-purple-500 transition hover:border-purple-600 hover:bg-purple-600/5"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          {/* Social */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex justify-center gap-7 text-gray-400"
          >
            <a
              href="#"
              aria-label="GitHub"
              className="transition hover:text-purple-500"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="LinkedIn"
              aria-label="LinkedIn"
              className="transition hover:text-purple-500"
            >
              <FaLinkedinIn size={22} />
            </a>

            <a
              href="mailto:poojapadhar1992@gmail.com"
              aria-label="Email"
              className="transition hover:text-purple-500"
            >
              <Mail size={22} />
            </a>
          </motion.div>

          {/* Scroll */}

          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="mt-12 flex justify-center text-gray-400 transition hover:text-purple-500"
          >
            <ArrowDown size={25} />
          </motion.a>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="border-t border-white/5 px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">

          <SectionTitle
            small="ABOUT ME"
            title="A little about"
            highlight="me"
          />

          <div className="mt-12 grid gap-10 md:grid-cols-2">

            <div>
              <h3 className="text-2xl font-semibold">
                Web Developer with a passion for building better websites.
              </h3>

              <p className="mt-6 leading-8 text-gray-400">
                I am a highly skilled and results-driven Web Developer
                with experience in designing, developing and maintaining
                websites and web applications.
              </p>

              <p className="mt-5 leading-8 text-gray-400">
                My experience includes website performance optimization,
                REST API development, server management, WordPress
                development and SEO-related technical fixes.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#18191f] p-8">

              <div className="grid grid-cols-2 gap-6">

                <InfoItem
                  title="Experience"
                  value="7+ Years"
                />

                <InfoItem
                  title="Specialization"
                  value="Web Development"
                />

                <InfoItem
                  title="Location"
                  value="Mumbai, India"
                />

                <InfoItem
                  title="Education"
                  value="MCA"
                />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="bg-[#0f1014] px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">

          <SectionTitle
            small="TECHNICAL SKILLS"
            title="My technical"
            highlight="skills"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.title}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-white/10 bg-[#18191f] p-6 transition hover:border-purple-600/50"
                >
                  <Icon className="text-purple-500" size={30} />

                  <h3 className="mt-5 text-lg font-semibold">
                    {skill.title}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md bg-purple-600/10 px-3 py-1 text-xs text-purple-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= EDUCATION ================= */}

      <section
        id="education"
        className="px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">

          <SectionTitle
            small="EDUCATION"
            title="My educational"
            highlight="background"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {education.map((item) => (
              <div
                key={item.degree}
                className="rounded-2xl border border-white/10 bg-[#18191f] p-6 transition hover:border-purple-600/50"
              >
                <GraduationCap
                  className="text-purple-500"
                  size={30}
                />

                <h3 className="mt-5 text-xl font-semibold">
                  {item.degree}
                </h3>

                <p className="mt-2 text-gray-400">
                  {item.university}
                </p>

                <div className="mt-5 flex gap-6 text-sm">
                  <span className="text-purple-400">
                    {item.year}
                  </span>

                  <span className="text-gray-400">
                    {item.percentage}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}

      <section
        id="experience"
        className="bg-[#0f1014] px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">

          <SectionTitle
            small="WORK EXPERIENCE"
            title="My professional"
            highlight="journey"
          />

          <div className="relative mt-14">

            <div className="absolute bottom-0 left-4 top-0 hidden w-px bg-purple-600/30 md:block" />

            <div className="space-y-10">

              {experiences.map((experience) => (
                <div
                  key={experience.company}
                  className="relative md:pl-12"
                >
                  <div className="absolute left-1 top-2 hidden h-7 w-7 rounded-full border-4 border-[#0f1014] bg-purple-600 md:block" />

                  <div className="rounded-2xl border border-white/10 bg-[#18191f] p-7 transition hover:border-purple-600/50">

                    <div className="flex flex-col justify-between gap-3 md:flex-row">

                      <div>
                        <h3 className="text-xl font-semibold">
                          {experience.role}
                        </h3>

                        <p className="mt-1 text-purple-500">
                          {experience.company}
                        </p>
                      </div>

                      <span className="text-sm text-gray-500">
                        {experience.duration}
                      </span>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {experience.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-6 text-gray-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section
        id="services"
        className="px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">

          <SectionTitle
            small="WHAT I DO"
            title="My"
            highlight="services"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-white/10 bg-[#18191f] p-7 transition hover:border-purple-600/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/10">
                    <Icon
                      size={24}
                      className="text-purple-500"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="bg-[#0f1014] px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">

          <SectionTitle
            small="PORTFOLIO"
            title="Featured"
            highlight="projects"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {projects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#18191f] transition hover:border-purple-600/50"
              >
                {/* Project visual */}

                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-purple-900/30 to-[#18191f]">
                  <Code2
                    size={50}
                    className="text-purple-500 transition duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">

                  <div className="flex items-center justify-between">

                    <h3 className="text-xl font-semibold">
                      {project.title}
                    </h3>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 transition hover:text-purple-500"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}

                  </div>

                  <p className="mt-4 text-sm leading-6 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-purple-600/10 px-2.5 py-1 text-xs text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CERTIFICATES ================= */}

      <section
        id="certificates"
        className="hidden"
      >
        <div className="mx-auto max-w-6xl">

          <SectionTitle
            small="CERTIFICATES"
            title="My"
            highlight="certifications"
          />

          <div className="mt-12 rounded-2xl border border-dashed border-white/10 bg-[#18191f] p-10 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-600/10">
              <GraduationCap
                className="text-purple-500"
                size={30}
              />
            </div>

            <h3 className="mt-5 text-xl font-semibold">
              Certifications
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-gray-400">
              Add your professional certifications here.
              We can update this section when you provide the
              certificate names and details.
            </p>

          </div>
        </div>
      </section>

      {/* ================= COURSES ================= */}

      <section
        id="courses"
        className="hidden"
      >
        <div className="mx-auto max-w-6xl">

          <SectionTitle
            small="COURSES"
            title="Learning &" 
            highlight="courses"
          />

          <div className="mt-12 rounded-2xl border border-dashed border-white/10 bg-[#18191f] p-10 text-center">

            <h3 className="text-xl font-semibold">
              Courses & Training
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-gray-400">
              Your course and training details can be added here.
            </p>

          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="px-6 py-28"
      >
        <div className="mx-auto max-w-5xl">

          <SectionTitle
            small="GET IN TOUCH"
            title="Let's work"
            highlight="together"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            <div>

              <h3 className="text-2xl font-semibold">
                Have a project in mind?
              </h3>

              <p className="mt-5 leading-7 text-gray-400">
                I&apos;m always interested in discussing new web
                development projects, technical challenges and
                opportunities.
              </p>

              <div className="mt-8 space-y-5">

                <a
                  href="mailto:poojapadhar1992@gmail.com"
                  className="flex items-center gap-4 text-gray-300 transition hover:text-purple-500"
                >
                  <Mail className="text-purple-500" />
                  poojapadhar1992@gmail.com
                </a>

                <a
                  href="tel:9028714657"
                  className="flex items-center gap-4 text-gray-300 transition hover:text-purple-500"
                >
                  <span className="text-xl text-purple-500">
                    ☎
                  </span>
                  9028714657
                </a>

              </div>

              <div className="mt-8 flex gap-5">

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-purple-500 hover:text-purple-500"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-purple-500 hover:text-purple-500"
                >
                  <FaLinkedinIn size={20} />
                </a>

              </div>
            </div>

          <form
  onSubmit={async (e) => {
    e.preventDefault();

    setFormStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/poojapadhar1992@gmail.com",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  }}
  className="space-y-5"
>
  <input
    type="hidden"
    name="_subject"
    value="New Portfolio Contact Message"
  />

  <input
    type="hidden"
    name="_template"
    value="table"
  />

  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="w-full rounded-xl border border-white/10 bg-[#121318] px-5 py-4 text-white outline-none transition focus:border-purple-500"
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="w-full rounded-xl border border-white/10 bg-[#121318] px-5 py-4 text-white outline-none transition focus:border-purple-500"
  />

  <input
    type="text"
    name="phone"
    placeholder="Your Phone"
    className="w-full rounded-xl border border-white/10 bg-[#121318] px-5 py-4 text-white outline-none transition focus:border-purple-500"
  />

  <textarea
    name="message"
    placeholder="Your Message"
    rows={6}
    required
    className="w-full resize-none rounded-xl border border-white/10 bg-[#121318] px-5 py-4 text-white outline-none transition focus:border-purple-500"
  />

  <button
    type="submit"
    disabled={formStatus === "sending"}
    className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-4 text-lg font-medium text-white transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-60"
  >
    <Mail size={20} />

    {formStatus === "sending"
      ? "Sending..."
      : "Send Message"}
  </button>

  {formStatus === "success" && (
    <div className="rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3 text-center text-green-400">
      ✓ Message sent successfully! I’ll get back to you soon.
    </div>
  )}

  {formStatus === "error" && (
    <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-center text-red-400">
      ✕ Something went wrong. Please try again.
    </div>
  )}
</form>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-white/5 bg-[#0f1014] px-6 py-8">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Pooja Varade. All rights reserved.
          </p>

          <a
            href="#home"
            className="text-purple-500 transition hover:text-purple-400"
          >
            Back to top ↑
          </a>

        </div>

      </footer>
    </main>
  );
}


/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function SectionTitle({
  small,
  title,
  highlight,
}: {
  small: string;
  title: string;
  highlight: string;
}) {
  return (
    <div>
      <p className="text-sm font-semibold tracking-[0.25em] text-purple-500">
        {small}
      </p>

      <h2 className="mt-3 text-4xl font-bold md:text-5xl">
        {title}{" "}
        <span className="text-purple-600">
          {highlight}
        </span>
      </h2>

      <div className="mt-5 h-1 w-16 rounded-full bg-purple-600" />
    </div>
  );
}


function InfoItem({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <p className="mt-1 font-semibold text-gray-200">
        {value}
      </p>
    </div>
  );
}