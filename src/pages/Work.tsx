import { motion } from "framer-motion";
import {
  Building2,
  Calendar,
  MapPin,
  TrendingUp,
  Code,
  Database,
  BarChart3,
  Users,
  ExternalLink,
} from "lucide-react";
import Navigation from "@/components/Navigation";

const Work = () => {
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

  const achievements = [
    {
      icon: <TrendingUp className="text-fresh-blue-600" size={24} />,
      title: "Revenue Growth",
      value: "25%",
      description: "Boosted revenue through KPI analysis dashboard",
    },
    {
      icon: <Code className="text-fresh-violet-600" size={24} />,
      title: "Time Saved",
      value: "20hrs/week",
      description: "Automated pricing workflows with Python/Django",
    },
    {
      icon: <Database className="text-fresh-emerald-600" size={24} />,
      title: "Error Reduction",
      value: "30%",
      description: "Reduced manual errors with Django REST Framework",
    },
    {
      icon: <BarChart3 className="text-fresh-orange-600" size={24} />,
      title: "Accuracy Improvement",
      value: "15%",
      description: "Enhanced inventory tracking with Python scraping",
    },
  ];

  const responsibilities = [
    {
      title: "Django Automation System",
      description:
        "Built a comprehensive Python script with Django to automate pricing workflows, integrating third-party APIs and saving 20 hours per week of manual work.",
      tech: ["Python", "Django", "Third-party APIs"],
      impact: "20 hours/week saved",
      color: "fresh-blue",
    },
    {
      title: "REST API Pricing Tool",
      description:
        "Developed a robust pricing tool using Django REST Framework, significantly reducing manual errors by 30% and accelerating inventory bookings.",
      tech: ["Django REST Framework", "Python", "API Development"],
      impact: "30% error reduction",
      color: "fresh-violet",
    },
    {
      title: "Data Scraping & Analytics",
      description:
        "Created a Python-based scraping script for inventory tracking, automating data extraction and improving accuracy by 15%.",
      tech: ["Python", "Web Scraping", "Data Processing"],
      impact: "15% accuracy improvement",
      color: "fresh-emerald",
    },
    {
      title: "Full-Stack Dashboard",
      description:
        "Designed and implemented a ReactJS dashboard with NodeJS backend to analyze KPIs (e.g., ROI), boosting revenue by 25% through strategic inventory planning.",
      tech: ["ReactJS", "Node.js", "Data Visualization"],
      impact: "25% revenue growth",
      color: "fresh-orange",
    },
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
              Professional{" "}
              <span className="text-gradient-fresh">Experience</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-fresh-blue-500 to-fresh-violet-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Building scalable solutions and driving measurable business impact
              through innovative technology.
            </p>
          </motion.div>

          {/* Main Experience - Avinya Technology */}
          <motion.section variants={itemVariants}>
            <div className="card-fresh p-8 lg:p-12">
              {/* Company Header */}
              <div className="grid lg:grid-cols-3 gap-8 items-start mb-12">
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-fresh-blue-100 flex items-center justify-center">
                      <Building2 className="text-fresh-blue-600" size={32} />
                    </div>
                    <div>
                      <h2 className="text-premium-heading text-gray-800">
                        Software Developer
                      </h2>
                      <p className="text-fresh-blue-600 font-medium text-lg">
                        Avinya Technology
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-gray-500 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>Dec 2023 – Aug 2024</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>Pune, India</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users size={16} />
                      <span>Full-time</span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    Led the development of critical automation systems and
                    analytics dashboards, working closely with cross-functional
                    teams to deliver high-impact solutions that significantly
                    improved operational efficiency and business outcomes.
                  </p>
                </div>

                {/* Duration */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Duration
                  </h3>
                  <div className="glass-fresh rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-fresh-blue-600 mb-1">
                      9
                    </div>
                    <div className="text-gray-500 text-xs">Months</div>
                  </div>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="space-y-6">
                <h3 className="text-premium-heading text-gray-800 text-center mb-8">
                  Key Achievements
                </h3>

                <div className="glass-fresh rounded-xl p-8">
                  <ul className="space-y-6">
                    <motion.li
                      className="text-premium-body text-gray-700 leading-relaxed flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="inline-block w-2 h-2 bg-fresh-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      Built a comprehensive Python script with Django to
                      automate pricing workflows, integrating third-party APIs
                      and saving 20 hours per week of manual work.
                    </motion.li>

                    <motion.li
                      className="text-premium-body text-gray-700 leading-relaxed flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <span className="inline-block w-2 h-2 bg-fresh-violet-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      Developed a robust pricing tool using Django REST
                      Framework, significantly reducing manual errors by 30% and
                      accelerating inventory bookings.
                    </motion.li>

                    <motion.li
                      className="text-premium-body text-gray-700 leading-relaxed flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <span className="inline-block w-2 h-2 bg-fresh-emerald-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      Created a Python-based scraping script for inventory
                      tracking, automating data extraction and improving
                      accuracy by 15%.
                    </motion.li>

                    <motion.li
                      className="text-premium-body text-gray-700 leading-relaxed flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <span className="inline-block w-2 h-2 bg-fresh-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                      Designed and implemented a ReactJS dashboard with NodeJS
                      backend to analyze KPIs (e.g., ROI), boosting revenue by
                      25% through strategic inventory planning.
                    </motion.li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Additional Experience */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-serif font-semibold text-gray-800 text-center mb-8">
              Other Experience
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Freelance Work */}
              <div className="card-fresh p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-fresh-blue-100 flex items-center justify-center">
                    <Code className="text-fresh-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Freelance Developer
                    </h3>
                    <p className="text-fresh-blue-600 font-medium">REUNIOS</p>
                  </div>
                </div>
                <div className="text-gray-500 text-sm mb-4">
                  Jan 2025 - Jun 2025 • Remote
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Currently working on innovative web solutions, contributing to
                  cutting-edge projects while pursuing Master's studies.
                </p>
              </div>

              {/* Internship */}
              <div className="card-fresh p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-fresh-violet-100 flex items-center justify-center">
                    <Users className="text-fresh-violet-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Software Developer Intern
                    </h3>
                    <p className="text-fresh-violet-600 font-medium">
                      LetsGrowMore
                    </p>
                  </div>
                </div>
                <div className="text-gray-500 text-sm mb-4">
                  Mar 2022 - Apr 2022 • Remote
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Contributed to web-based projects including custom calculator,
                  student ERP system, and MERN stack applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["ReactJS", "CSS", "MongoDB", "Express.js"].map(
                    (tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
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
            <div className="card-fresh p-12">
              <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-6">
                Ready to Make an Impact
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Looking for opportunities to contribute to innovative projects
                and drive meaningful results through technology.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="/contact"
                  className="btn-fresh flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Let's Work Together</span>
                  <ExternalLink size={18} />
                </motion.a>
                <motion.a
                  href="/about"
                  className="btn-fresh-secondary flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View My Skills</span>
                </motion.a>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
