import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Calendar,
  Users,
  MapPin,
  Shield,
  Smartphone,
  BarChart3,
  Code2,
  Database,
  Globe,
} from "lucide-react";
import Navigation from "@/components/Navigation";

const Projects = () => {
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

  const technologies = [
    { name: "Python", color: "#3776AB", icon: <Code2 size={16} /> },
    { name: "Django", color: "#092E20", icon: <Database size={16} /> },
    { name: "Java", color: "#ED8B00", icon: <Code2 size={16} /> },
    { name: "Firebase", color: "#FFCA28", icon: <Database size={16} /> },
    { name: "JavaScript", color: "#F7DF1E", icon: <Code2 size={16} /> },
    { name: "Git", color: "#F05032", icon: <Github size={16} /> },
  ];

  const features = [
    {
      icon: <Shield className="text-emerald-400" size={24} />,
      title: "Real-time Alerts",
      description:
        "Firebase Cloud Messaging integration for instant disaster notifications",
    },
    {
      icon: <BarChart3 className="text-amber-400" size={24} />,
      title: "Performance Optimization",
      description: "Geohashing-based caching reducing API latency by 20%",
    },
    {
      icon: <Globe className="text-emerald-400" size={24} />,
      title: "Smart Navigation",
      description:
        "Google Maps & OpenStreetMap integration for optimal evacuation routes",
    },
    {
      icon: <Smartphone className="text-amber-400" size={24} />,
      title: "Responsive Design",
      description:
        "Mobile-first approach ensuring accessibility across devices",
    },
  ];

  const achievements = [
    { value: "20%", label: "Latency Reduction", color: "emerald" },
    { value: "100%", label: "Real-time Updates", color: "amber" },
    { value: "5+", label: "Team Members", color: "emerald" },
    { value: "6mo", label: "Development", color: "amber" },
  ];

  return (
    <div className="min-h-screen scrollbar-elegant">
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
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-white/80 leading-relaxed">
              Innovative solutions that combine cutting-edge technology with
              real-world impact and user-centered design.
            </p>
          </motion.div>

          {/* Main Project - Disaster Management System */}
          <motion.section variants={itemVariants}>
            <div className="card-premium p-8 lg:p-12">
              {/* Project Header */}
              <div className="grid lg:grid-cols-3 gap-8 items-start mb-12">
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-amber-500/20 flex items-center justify-center">
                      <Shield className="text-emerald-400" size={32} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-serif font-semibold text-white">
                        Disaster Management System
                      </h2>
                      <p className="text-emerald-400 font-medium">
                        Emergency Response Platform
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-white/60 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>Dec 2024 – Apr 2025</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users size={16} />
                      <span>Team Project</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>Trinity College Dublin</span>
                    </div>
                  </div>

                  <p className="text-white/80 leading-relaxed mb-6">
                    A comprehensive web application designed to enhance
                    emergency response coordination during disasters. Built
                    using Agile methodologies, the system integrates real-time
                    communications, intelligent routing, and data analytics to
                    improve evacuation efficiency and save lives.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href="https://github.com/TanmaySamdani19"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-premium flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      <span>View on GitHub</span>
                    </motion.a>
                    <motion.button
                      className="btn-secondary flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </motion.button>
                  </div>
                </div>

                {/* Project Stats */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Project Impact
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="glass-elegant rounded-xl p-4 text-center"
                      >
                        <div
                          className={`text-2xl font-bold mb-1 ${
                            achievement.color === "emerald"
                              ? "text-emerald-400"
                              : "text-amber-400"
                          }`}
                        >
                          {achievement.value}
                        </div>
                        <div className="text-white/60 text-xs">
                          {achievement.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technology Stack */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2 px-4 py-2 glass-elegant rounded-xl"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div style={{ color: tech.color }}>{tech.icon}</div>
                      <span className="text-white/80 font-medium">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-white text-center mb-8">
                  Key Features & Achievements
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="glass-elegant rounded-xl p-6"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">
                            {feature.title}
                          </h4>
                          <p className="text-white/80 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Detailed Description */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white text-center mb-6">
                  Technical Implementation
                </h3>

                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="glass-elegant rounded-xl p-6">
                    <h4 className="font-semibold text-emerald-400 mb-3">
                      Backend Development
                    </h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Developed robust backend infrastructure for public
                      transport APIs with geohashing-based caching, reducing
                      latency by 20% and ensuring reliable data access during
                      emergencies.
                    </p>
                  </div>

                  <div className="glass-elegant rounded-xl p-6">
                    <h4 className="font-semibold text-amber-400 mb-3">
                      Real-time Communications
                    </h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Integrated Firebase Cloud Messaging for instant disaster
                      alerts and real-time coordination between emergency
                      responders and affected populations.
                    </p>
                  </div>

                  <div className="glass-elegant rounded-xl p-6">
                    <h4 className="font-semibold text-emerald-400 mb-3">
                      Smart Navigation
                    </h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Combined Google Maps and OpenStreetMap APIs for optimal
                      safe zone navigation and dynamic rerouting, enhancing
                      evacuation efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Additional Projects Teaser */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-serif font-semibold text-white text-center mb-8">
              More Projects Coming Soon
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Web Applications */}
              <div className="card-premium p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                    <Globe className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Web Applications
                    </h3>
                    <p className="text-emerald-400 font-medium">
                      React & Django Projects
                    </p>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed mb-4">
                  Collection of full-stack web applications showcasing modern
                  development practices, responsive design, and scalable
                  architecture.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["React", "Django", "PostgreSQL", "Docker"].map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Machine Learning */}
              <div className="card-premium p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <BarChart3 className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      ML & Analytics
                    </h3>
                    <p className="text-amber-400 font-medium">
                      Data Science Projects
                    </p>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed mb-4">
                  Machine learning models and data analytics projects leveraging
                  TensorFlow and Scikit-learn for predictive insights and
                  automation.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "TensorFlow", "Scikit-learn", "Pandas"].map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section variants={itemVariants} className="text-center">
            <div className="card-premium p-12">
              <h2 className="text-3xl font-serif font-semibold text-white mb-6">
                Interested in Collaboration?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                I'm always excited to work on innovative projects that make a
                positive impact. Let's build something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="https://github.com/TanmaySamdani19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={18} />
                  <span>View All Projects</span>
                </motion.a>
                <motion.a
                  href="/contact"
                  className="btn-secondary flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Get In Touch</span>
                  <ExternalLink size={18} />
                </motion.a>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
