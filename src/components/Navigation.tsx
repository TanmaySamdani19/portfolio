import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Menu, X, Download, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/work", label: "Experience" },
    { path: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "nav-fresh transition-all duration-500",
        isScrolled && "scrolled",
      )}
    >
      <div className="max-w-8xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Premium Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <Link
              to="/"
              className="group flex items-center space-x-3 focus-fresh"
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fresh-blue-500 to-fresh-violet-500 flex items-center justify-center shadow-glow-blue">
                  <span className="text-white font-bold text-lg">TS</span>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-fresh-blue-400 to-fresh-violet-400 opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-lg"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-gray-800 font-heading text-xl font-semibold tracking-tight">
                  Tanmay Samdani
                </div>
                <div className="text-fresh-blue-600 text-premium-caption">
                  Full-Stack Developer
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={cn(
                    "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                    "hover:bg-fresh-blue-50 focus-fresh",
                    isActive(item.path)
                      ? "text-fresh-blue-600 bg-fresh-blue-50 shadow-glow-blue"
                      : "text-gray-600 hover:text-gray-900",
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-fresh-blue-100 rounded-lg"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Social Links & CTA - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="https://github.com/TanmaySamdani19"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-fresh-blue-600 transition-all duration-300 rounded-lg hover:bg-fresh-blue-50 focus-fresh"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/tanmay-samdani-96606b205/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-500 hover:text-fresh-blue-600 transition-all duration-300 rounded-lg hover:bg-fresh-blue-50 focus-fresh"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href="mailto:tanmaysamdani12345@gmail.com"
              className="btn-fresh-secondary flex items-center space-x-2 text-sm focus-fresh"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={16} />
              <span>Get in touch</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-fresh-blue-600 transition-colors duration-300 rounded-lg hover:bg-fresh-blue-50 focus-fresh"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-gray-200"
            >
              <div className="py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300",
                        "hover:bg-fresh-blue-50 focus-fresh",
                        isActive(item.path)
                          ? "text-fresh-blue-600 bg-fresh-blue-50"
                          : "text-gray-600 hover:text-gray-900",
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="pt-4 mt-4 border-t border-gray-200"
                >
                  <div className="flex items-center justify-center space-x-6">
                    <a
                      href="https://github.com/TanmaySamdani19"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-gray-500 hover:text-fresh-blue-600 transition-all duration-300 rounded-lg hover:bg-fresh-blue-50"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tanmay-samdani-96606b205/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-gray-500 hover:text-fresh-blue-600 transition-all duration-300 rounded-lg hover:bg-fresh-blue-50"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="mailto:tanmaysamdani12345@gmail.com"
                      className="flex items-center space-x-2 px-4 py-2 bg-fresh-blue-100 text-fresh-blue-600 rounded-lg hover:bg-fresh-blue-200 transition-all duration-300"
                    >
                      <Mail size={16} />
                      <span className="text-sm">Contact</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
