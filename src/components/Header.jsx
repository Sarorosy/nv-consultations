import { useState, useEffect } from "react";
import { Menu, X, User, Moon, Sun, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/idb.jsx";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/navinlogo.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="w-full bg-[#F4F8FF] dark:bg-[#0B1120] px-6 py-4 transition-colors duration-300 relative z-[50]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Main Navigation Pill */}
          <div className="flex items-center bg-[#E8F1FF] dark:bg-[#1E293B] rounded-full p-1.5 shadow-sm border border-white/40 dark:border-gray-700/50">

            {/* Logo & Brand */}
            <div
              className="flex items-center gap-3 pl-3 pr-6 cursor-pointer group"
              onClick={() => navigate("/")}
            >
              {/* Logo */}
              <img src={logo} alt="logo" className="w-[100px] sm:w-[120px]" />
              
              {/* Brand Name */}
              <div className="hidden sm:flex flex-col justify-center border-l-2 border-[#102851]/10 dark:border-white/10 pl-3">
                <span className="text-[13px] font-black text-[#102851] dark:text-white leading-tight tracking-wide group-hover:text-[#2AA7FF] transition-colors">NV</span>
                <span className="text-[9px] font-bold text-[#2AA7FF] leading-tight uppercase tracking-[0.25em]">Consultations</span>
              </div>
            </div>

            {/* Nav Links */}
            <div className="hidden lg:flex items-center gap-8 px-6 py-1 border-l border-[#102851]/10 dark:border-white/10">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => navigate(link.path)}
                  className="text-[14px] font-bold text-[#102851] dark:text-gray-300 hover:text-[#2AA7FF] transition-colors cursor-pointer relative group nav-btn"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2AA7FF] transition-all group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Menu Buttons Block */}
            <div className="flex items-center ml-2 lg:ml-0">
              {/* Desktop Menu Button */}
              <div className="hidden lg:flex w-10 h-10 rounded-full bg-gradient-to-tr from-[#2AA7FF] to-[#1B3C74] items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
                <Menu size={20} strokeWidth={2.5} />
              </div>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden w-10 h-10 flex items-center justify-center text-[#102851] dark:text-gray-300"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-4">

            {/* Dark Mode Toggle */}
            <div
              onClick={toggleTheme}
              className="flex items-center bg-[#E8F1FF] dark:bg-[#1E293B] rounded-full p-1 w-[80px] border border-white/40 dark:border-gray-700/50 shadow-inner cursor-pointer transition-all duration-300 relative overflow-hidden"
            >
              <div
                className={`flex items-center justify-center w-[36px] h-8 bg-white dark:bg-[#2AA7FF] rounded-full text-[#102851] dark:text-white shadow-md transition-all duration-300 transform ${theme === 'dark' ? 'translate-x-[36px]' : 'translate-x-0'}`}
              >
                {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
              </div>
            </div>

            {/* Auth */}
            <div className="flex items-center gap-3">
              {user ? (
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center gap-2 px-4 py-1.5 bg-white border border-[#2AA7FF]/20 rounded-full cursor-pointer hover:bg-white/80 transition-all"
                    onClick={() => navigate("/dashboard")}
                  >
                    <User size={16} className="text-[#2AA7FF]" />
                    <span className="text-sm font-bold text-[#102851]">
                      {user.username}
                    </span>
                  </div>

                  <button
                    onClick={logout}
                    className="px-4 py-1.5 bg-gradient-to-tr from-[#2AA7FF] to-[#1B3C74] text-white rounded-full text-sm font-bold shadow-lg shadow-[#2AA7FF]/30 hover:scale-105 transition-all"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => navigate("/appointment")}
                    className="px-5 py-1.5 rounded-full border border-[#102851]/10 dark:border-gray-700/50 text-sm font-bold text-[#102851] dark:text-gray-300 hover:border-[#102851]/30 transition-all"
                  >
                    Book Appointment
                  </button>

                  <button
                    onClick={() => window.location.href = "tel:+918124498803"}
                    className="px-6 py-1.5 rounded-full bg-gradient-to-tr from-[#2AA7FF] to-[#1B3C74] text-white text-sm font-bold shadow-lg"
                  >
                    Call Now
                  </button>
                </>
              )}
            </div>
          </div>
        </div>


        {/* Mobile Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-[100] bg-black text-white flex flex-col p-8 lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between mb-12">
                <img src={logo} alt="logo" className="w-24 brightness-0 invert" />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    key={link.name}
                    onClick={() => {
                      navigate(link.path);
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center justify-between w-full text-left text-3xl font-bold tracking-tight group"
                  >
                    <span className="group-hover:text-[#2AA7FF] transition-colors">{link.name}</span>
                    <ArrowRight className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all text-[#2AA7FF]" size={28} />
                  </motion.button>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-8">
                {/* Theme Toggle */}
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-400 font-medium">Appearance</span>
                    <span className="text-lg font-bold">{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</span>
                  </div>
                  <div
                    onClick={toggleTheme}
                    className="flex items-center bg-[#2AA7FF]/20 rounded-full p-1.5 w-[70px] border border-white/10 cursor-pointer transition-all relative"
                  >
                    <motion.div
                      animate={{ x: theme === 'dark' ? 32 : 0 }}
                      transition={{ type: "spring", damping: 20, stiffness: 300 }}
                      className="flex items-center justify-center w-8 h-8 bg-[#2AA7FF] rounded-full text-white shadow-lg"
                    >
                      {theme === "light" ? <Sun size={18} /> : <Moon size={18} />}
                    </motion.div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => {
                      navigate("/appointment");
                      setIsMenuOpen(false);
                    }}
                    className="w-full py-5 text-center text-lg font-bold border border-white/20 rounded-2xl hover:bg-white/5 transition-colors"
                  >
                    Book Appointment
                  </button>

                  <button
                    onClick={() => {
                      window.location.href = "tel:+918124498803";
                      setIsMenuOpen(false);
                    }}
                    className="w-full py-5 text-center text-lg font-bold bg-gradient-to-tr from-[#2AA7FF] to-[#1B3C74] text-white rounded-2xl shadow-2xl shadow-[#2AA7FF]/20"
                  >
                    Call Now
                  </button>
                </div>

                {/* Footer Info */}
                <div className="flex justify-between items-center text-gray-500 text-sm pt-4 border-t border-white/5">
                  <span>© 2026 Navin Hospital</span>
                  <div className="flex gap-4">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span>We are open</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

    </>
  );
}
