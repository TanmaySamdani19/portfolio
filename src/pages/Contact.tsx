import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Download,
  MapPin,
  Send,
  User,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import Navigation from "@/components/Navigation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success message
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-fresh-blue-600" size={24} />,
      label: "Email",
      value: "tanmaysamdani12345@gmail.com",
      href: "mailto:tanmaysamdani12345@gmail.com",
    },
    {
      icon: <Phone className="text-fresh-violet-600" size={24} />,
      label: "Phone",
      value: "+353-871326213",
      href: "tel:+353871326213",
    },
    {
      icon: <MapPin className="text-fresh-emerald-600" size={24} />,
      label: "Location",
      value: "Dublin, Ireland",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="text-fresh-blue-600" size={24} />,
      label: "LinkedIn",
      description: "Professional Network",
      href: "https://www.linkedin.com/in/tanmay-samdani-96606b205/",
    },
    {
      icon: <Github className="text-gray-700" size={24} />,
      label: "GitHub",
      description: "Code Repository",
      href: "https://github.com/TanmaySamdani19",
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
              Let's <span className="text-gradient-fresh">Connect</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-fresh-blue-500 to-fresh-violet-500 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to collaborate on your next project? I'd love to hear from
              you and discuss how we can create something amazing together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.section variants={itemVariants}>
              <div className="card-fresh p-8">
                <h2 className="text-premium-heading text-gray-800 mb-8">
                  Send a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle
                      className="text-fresh-emerald-600 mx-auto mb-4"
                      size={48}
                    />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-gray-700 font-medium flex items-center space-x-2">
                          <User size={16} />
                          <span>Name</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:border-fresh-blue-500 focus:outline-none focus:ring-2 focus:ring-fresh-blue-500/20 transition-all duration-300"
                          placeholder="Your full name"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-gray-700 font-medium flex items-center space-x-2">
                          <Mail size={16} />
                          <span>Email</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:border-fresh-blue-500 focus:outline-none focus:ring-2 focus:ring-fresh-blue-500/20 transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium flex items-center space-x-2">
                        <MessageSquare size={16} />
                        <span>Subject</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:border-fresh-blue-500 focus:outline-none focus:ring-2 focus:ring-fresh-blue-500/20 transition-all duration-300"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-gray-700 font-medium">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:border-fresh-blue-500 focus:outline-none focus:ring-2 focus:ring-fresh-blue-500/20 transition-all duration-300 resize-none"
                        placeholder="Tell me about your project or just say hello..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-fresh flex items-center justify-center space-x-2 py-4"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.section>

            {/* Contact Information */}
            <motion.section variants={itemVariants} className="space-y-8">
              {/* Contact Details */}
              <div className="card-fresh p-8">
                <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-8">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4 p-4 glass-fresh rounded-xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex-shrink-0">{contact.icon}</div>
                      <div className="flex-grow">
                        <div className="font-medium text-gray-800 mb-1">
                          {contact.label}
                        </div>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            className="text-gray-600 hover:text-fresh-blue-600 transition-colors duration-300"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <div className="text-gray-600">{contact.value}</div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Resume Download */}
                <motion.button
                  className="w-full mt-8 btn-fresh-secondary flex items-center justify-center space-x-2 py-4"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </motion.button>
              </div>

              {/* Social Links */}
              <div className="card-fresh p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Connect Online
                </h3>

                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 glass-fresh rounded-xl hover:bg-gray-50 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex-shrink-0">{social.icon}</div>
                      <div className="flex-grow">
                        <div className="font-medium text-gray-800 mb-1">
                          {social.label}
                        </div>
                        <div className="text-gray-500 text-sm">
                          {social.description}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="card-fresh p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-fresh-emerald-500 rounded-full animate-pulse"></div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Available for Work
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Currently seeking opportunities as a Software Developer,
                  Graduate, Machine Learning Engineer, or Software Test
                  Engineer. Open to both full-time positions and exciting
                  project collaborations.
                </p>
              </div>
            </motion.section>
          </div>

          {/* Call to Action */}
          <motion.section variants={itemVariants} className="text-center">
            <div className="card-fresh p-12">
              <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-6">
                Ready to Start Something Great?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Whether you have a project in mind, want to discuss
                opportunities, or just want to say hello, I'm here and ready to
                chat.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="mailto:tanmaysamdani12345@gmail.com"
                  className="btn-fresh flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={18} />
                  <span>Send Email</span>
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

export default Contact;
