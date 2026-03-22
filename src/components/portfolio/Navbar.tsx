import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "# About", href: "#about" },
  { label: "class Skills:", href: "#skills" },
  { label: "def Experience():", href: "#experience" },
  { label: "for project in Projects:", href: "#projects" },
  { label: "# Education", href: "#education" },
  { label: "return Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Animated Face / Avatar */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/40 shadow-[0_0_10px_hsl(160_84%_39%/0.2)] bg-card"
          >
            <img src={`${import.meta.env.BASE_URL}avatar.png`} alt="Avatar" className="w-full h-full object-cover" />
          </motion.div>
          <a href="#" className="font-mono text-primary font-bold text-sm hidden sm:block">
            {"madhan_thangavel()"}
          </a>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs xl:text-sm text-foreground hover:text-primary transition-colors font-mono font-medium whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border px-6 py-4"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
