import { useState, useEffect } from "react";
import { Menu, X, User, Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/idb.jsx";
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
    <nav className="w-full bg-[#F4F8FF] dark:bg-[#0B1120] px-6 py-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Main Pill */}
        <div className="flex items-center bg-[#E8F1FF] dark:bg-[#1E293B] rounded-full p-1.5 shadow-sm border border-white/40 dark:border-gray-700/50">

          {/* Logo */}
          <div
            className="flex items-center gap-2 pl-2 pr-8 cursor-pointer"
            onClick={() => navigate("/")}
          >
            {/* <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#2AA7FF] to-[#1B3C74] flex items-center justify-center text-white shadow-lg overflow-hidden transition-transform hover:rotate-12">
              <div className="relative w-5 h-5 flex items-center justify-center">
                <div className="absolute w-2 h-5 bg-white rounded-full"></div>
                <div className="absolute w-5 h-2 bg-white rounded-full"></div>
                <div className="absolute w-1 h-1 bg-[#2AA7FF] rounded-full z-10"></div>
              </div>
            </div> */}
            {/* <span className="text-lg font-extrabold text-[#102851] tracking-tight">
              Medify
            </span> */}
            <img src={logo} alt="logo" className="w-30" />
          </div>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-8 px-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => navigate(link.path)}
                className="text-[14px] font-bold text-[#102851] dark:text-gray-300 hover:text-[#2AA7FF] transition-colors cursor-pointer relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2AA7FF] transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Desktop Menu Button */}
          <div className="hidden lg:flex w-10 h-10 rounded-full bg-gradient-to-tr from-[#2AA7FF] to-[#1B3C74] items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform">
            <Menu size={20} strokeWidth={2.5} />
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-[#102851] dark:text-gray-300"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
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
      {isMenuOpen && (
        <div className="lg:hidden mt-3 bg-white dark:bg-[#1E293B] rounded-xl shadow-xl border border-[#E8F1FF] dark:border-gray-700/50 p-3 animate-in fade-in slide-in-from-top-4 duration-300 overflow-hidden text-center">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  navigate(link.path);
                  setIsMenuOpen(false);
                }}
                className="w-full text-center px-4 py-2.5 rounded-lg text-sm font-semibold text-[#102851] dark:text-gray-300 hover:bg-[#E8F1FF] dark:hover:bg-[#2AA7FF]/20 transition-colors"
              >
                {link.name}
              </button>
            ))}

            <hr className="my-2 border-[#E8F1FF] dark:border-gray-700/50" />

            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={() => {
                  navigate("/appointment");
                  setIsMenuOpen(false);
                }}
                className="w-full py-2.5 text-center font-bold text-[#102851] dark:text-gray-300 border border-[#102851]/10 dark:border-gray-700/50 rounded-lg"
              >
                Book Appointment
              </button>

              <button
                onClick={() => {
                  window.location.href = "tel:+918124498803";
                  setIsMenuOpen(false);
                }}
                className="w-full py-2.5 text-center font-bold bg-gradient-to-tr from-[#2AA7FF] to-[#1B3C74] text-white rounded-lg shadow-lg shadow-[#2AA7FF]/30"
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}