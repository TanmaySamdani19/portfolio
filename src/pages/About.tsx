import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  GraduationCap,
  Award,
  MapPin,
  Calendar,
  ExternalLink,
  Code2,
  Database,
  Globe,
  Smartphone,
  Cloud,
  Brain,
  Zap,
  Cpu,
} from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Technical Skills with categories and logos
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="text-fresh-blue-600" size={24} />,
      skills: [
        { name: "Python", level: "Advanced", logo: "🐍", color: "bg-blue-100" },
        {
          name: "JavaScript",
          level: "Advanced",
          logo: "🟨",
          color: "bg-yellow-100",
        },
        {
          name: "Java",
          level: "Intermediate",
          logo: "☕",
          color: "bg-orange-100",
        },
        { name: "SQL", level: "Advanced", logo: "🗃️", color: "bg-indigo-100" },
      ],
    },
    {
      title: "Frontend Technologies",
      icon: <Globe className="text-fresh-violet-600" size={24} />,
      skills: [
        {
          name: "ReactJS",
          level: "Intermediate",
          logo: "⚛️",
          color: "bg-cyan-100",
        },
        {
          name: "HTML/CSS",
          level: "Advanced",
          logo: "🎨",
          color: "bg-pink-100",
        },
        {
          name: "React Native",
          level: "Intermediate",
          logo: "📱",
          color: "bg-purple-100",
        },
        {
          name: "TailwindCSS",
          level: "Advanced",
          logo: "🎨",
          color: "bg-teal-100",
        },
      ],
    },
    {
      title: "Backend & APIs",
      icon: <Database className="text-fresh-emerald-600" size={24} />,
      skills: [
        {
          name: "Django",
          level: "Advanced",
          logo: "🎯",
          color: "bg-green-100",
        },
        {
          name: "Node.js",
          level: "Intermediate",
          logo: "🟢",
          color: "bg-green-100",
        },
        {
          name: "Express.js",
          level: "Intermediate",
          logo: "🚀",
          color: "bg-gray-100",
        },
        {
          name: "RESTful APIs",
          level: "Advanced",
          logo: "🔗",
          color: "bg-blue-100",
        },
      ],
    },
    {
      title: "Databases & Storage",
      icon: <Database className="text-fresh-orange-600" size={24} />,
      skills: [
        {
          name: "MongoDB",
          level: "Intermediate",
          logo: "🍃",
          color: "bg-green-100",
        },
        {
          name: "Firebase",
          level: "Intermediate",
          logo: "🔥",
          color: "bg-yellow-100",
        },
        {
          name: "PostgreSQL",
          level: "Intermediate",
          logo: "🐘",
          color: "bg-blue-100",
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="text-fresh-blue-600" size={24} />,
      skills: [
        {
          name: "AWS (EC2, S3)",
          level: "Basic",
          logo: "☁️",
          color: "bg-orange-100",
        },
        { name: "Git", level: "Advanced", logo: "📊", color: "bg-red-100" },
        { name: "Docker", level: "Basic", logo: "🐳", color: "bg-blue-100" },
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="text-fresh-violet-600" size={24} />,
      skills: [
        {
          name: "LangChain",
          level: "Learning",
          logo: "🔗",
          color: "bg-purple-100",
        },
        {
          name: "LLMs & GenAI",
          level: "Learning",
          logo: "🤖",
          color: "bg-indigo-100",
        },
        {
          name: "RAG Systems",
          level: "Learning",
          logo: "🧠",
          color: "bg-blue-100",
        },
        {
          name: "Vector Stores",
          level: "Learning",
          logo: "📊",
          color: "bg-cyan-100",
        },
        {
          name: "OpenAI APIs",
          level: "Learning",
          logo: "⚡",
          color: "bg-green-100",
        },
        {
          name: "Streamlit",
          level: "Learning",
          logo: "🎯",
          color: "bg-red-100",
        },
        {
          name: "TensorFlow",
          level: "Intermediate",
          logo: "🧮",
          color: "bg-orange-100",
        },
        {
          name: "Scikit-learn",
          level: "Intermediate",
          logo: "📈",
          color: "bg-yellow-100",
        },
      ],
    },
  ];

  const architectureSkills = [
    { name: "MVC Pattern", icon: "🏗️" },
    { name: "Event-Driven", icon: "⚡" },
    { name: "Microservices", icon: "🔧" },
    { name: "Agile Methodologies", icon: "🔄" },
  ];

  return (
    <div className="min-h-screen scrollbar-fresh bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      <div className="pt-32 pb-20 px-6 lg:px-8 max-w-8xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-20"
        >
          {/* Hero Section */}
          <motion.div
            variants={itemVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-premium-display text-gray-800 mb-6">
              About <span className="text-gradient-fresh">Tanmay</span>
            </h1>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-fresh-blue-500 to-fresh-violet-500 mx-auto rounded-full mb-8"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <p className="text-premium-subheading text-gray-600">
              A passionate full-stack developer and Master's student, dedicated
              to crafting innovative solutions that bridge technology and
              real-world impact.
            </p>
          </motion.div>

          {/* Professional Summary */}
          <motion.section
            variants={itemVariants}
            className="card-fresh p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-premium-heading text-gray-800">
                  Professional Journey
                </h2>
                <div className="space-y-4 text-premium-body text-gray-600">
                  <p>
                    Currently pursuing a{" "}
                    <span className="text-fresh-blue-600 font-medium">
                      Master's in Computer Science
                    </span>{" "}
                    at Trinity College Dublin, specializing in Future Networked
                    Systems with coursework in Machine Learning, Scalable
                    Computing, and Advanced Software Engineering.
                  </p>
                  <p>
                    With a strong foundation from my Bachelor's degree (CGPA
                    8.5) and hands-on experience at{" "}
                    <span className="text-fresh-violet-600 font-medium">
                      Avinya Technology
                    </span>
                    , I specialize in building scalable web applications using
                    modern technologies and have recently expanded into the
                    exciting field of AI and LLM development.
                  </p>
                  <p>
                    I'm passionate about leveraging technology to solve complex
                    problems and am currently exploring how AI agents and
                    language models can create more intelligent, responsive
                    applications.
                  </p>
                </div>
              </div>

              {/* Professional Image Placeholder */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-fresh-blue-100 to-fresh-violet-100 glass-fresh flex items-center justify-center">
                    <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-fresh-blue-500 to-fresh-violet-500 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">TS</span>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-fresh-blue-500 rounded-full animate-bounce-gentle"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-fresh-violet-500 rounded-full animate-bounce-gentle"></div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Education Timeline */}
          <motion.section variants={itemVariants}>
            <h2 className="text-premium-heading text-gray-800 text-center mb-12">
              Education
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Trinity College Dublin */}
              <motion.div
                className="card-fresh p-8 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-fresh-blue-500 to-fresh-blue-600"></div>
                <div className="ml-8 grid lg:grid-cols-4 gap-6 items-center">
                  <div className="lg:col-span-1">
                    <div className="w-16 h-16 rounded-2xl bg-fresh-blue-100 flex items-center justify-center mb-4">
                      <GraduationCap
                        className="text-fresh-blue-600"
                        size={32}
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-3 space-y-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                        Master of Science in Computer Science
                      </h3>
                      <div className="flex items-center space-x-4 text-fresh-blue-600 font-medium mb-2">
                        <span>Trinity College Dublin</span>
                        <MapPin size={16} />
                        <span>Dublin, Ireland</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Calendar size={16} />
                        <span>Sep 2024 – Sep 2025</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-gray-600">
                        <span className="font-medium">Coursework:</span> Machine
                        Learning, Scalable Computing, Advanced Software
                        Engineering, Data Visualization
                      </p>
                      <div className="flex items-center space-x-2 text-fresh-blue-600">
                        <Award size={16} />
                        <span className="text-sm">
                          Future Networked Systems Specialization
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Pune University */}
              <motion.div
                className="card-fresh p-8 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-fresh-violet-500 to-fresh-violet-600"></div>
                <div className="ml-8 grid lg:grid-cols-4 gap-6 items-center">
                  <div className="lg:col-span-1">
                    <div className="w-16 h-16 rounded-2xl bg-fresh-violet-100 flex items-center justify-center mb-4">
                      <GraduationCap
                        className="text-fresh-violet-600"
                        size={32}
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-3 space-y-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                        Bachelor of Engineering
                      </h3>
                      <div className="flex items-center space-x-4 text-fresh-violet-600 font-medium mb-2">
                        <span>Savitribai Phule Pune University</span>
                        <MapPin size={16} />
                        <span>Pune, India</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Calendar size={16} />
                        <span>Jun 2019 – Jun 2023</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-fresh-violet-600">
                      <Award size={16} />
                      <span className="font-medium">CGPA: 8.5/10</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Compact Technical Skills */}
          <motion.section variants={itemVariants}>
            <motion.h2
              className="text-premium-heading text-gray-800 text-center mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Technical Expertise
            </motion.h2>
            <motion.p
              className="text-premium-subheading text-gray-600 text-center mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Full-stack development, cloud technologies, and cutting-edge AI/ML
              frameworks.
            </motion.p>

            <div className="card-fresh p-8">
              {/* All Skills in One Compact Grid */}
              <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4 mb-8">
                {skillCategories
                  .flatMap((category) => category.skills)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="group relative flex flex-col items-center p-3 rounded-xl hover:bg-gradient-to-br hover:from-fresh-blue-50 hover:to-fresh-violet-50 transition-all duration-300 cursor-pointer magnetic"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.15, y: -8, rotateY: 10 }}
                      title={`${skill.name} (${skill.level})`}
                    >
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        {skill.logo}
                      </div>
                      <span className="text-xs font-medium text-gray-700 text-center leading-tight">
                        {skill.name}
                      </span>
                      <div
                        className={`w-2 h-2 rounded-full mt-1 ${
                          skill.level === "Advanced"
                            ? "bg-fresh-emerald-500"
                            : skill.level === "Intermediate"
                              ? "bg-fresh-blue-500"
                              : skill.level === "Learning"
                                ? "bg-fresh-violet-500"
                                : "bg-gray-400"
                        }`}
                      />
                    </motion.div>
                  ))}
              </div>

              {/* Skill Level Legend */}
              <div className="flex justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-fresh-emerald-500 rounded-full"></div>
                  <span className="text-gray-600">Advanced</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-fresh-blue-500 rounded-full"></div>
                  <span className="text-gray-600">Intermediate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-fresh-violet-500 rounded-full"></div>
                  <span className="text-gray-600">Learning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-600">Basic</span>
                </div>
              </div>

              {/* Special AI/ML Highlight */}
              <div className="mt-8 p-6 bg-gradient-to-r from-fresh-violet-100 to-fresh-blue-100 rounded-2xl">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Brain className="text-fresh-violet-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Currently Learning: AI & LLM Development
                  </h3>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    "LangChain",
                    "OpenAI APIs",
                    "Vector Stores",
                    "RAG Systems",
                    "LangSmith",
                    "Cursor IDE",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/60 text-fresh-violet-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section variants={itemVariants} className="text-center">
            <div className="card-fresh p-12">
              <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-6">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                I'm always excited to collaborate on innovative projects and
                explore new opportunities in full-stack development and AI.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="/contact"
                  className="btn-fresh flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Get In Touch</span>
                  <ExternalLink size={18} />
                </motion.a>
                <motion.a
                  href="/work"
                  className="btn-fresh-secondary flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View My Experience</span>
                </motion.a>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
