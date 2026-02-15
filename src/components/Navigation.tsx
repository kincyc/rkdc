import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Garments", href: "#garments" },
  { label: "Fashion Shows", href: "#fashion-shows" },
  { label: "Workshops", href: "#workshops" },
  { label: "About", href: "#about" },
  { label: "Book Rachel", href: "#contact" },
  { label: "Blog", href: "#blog" },
];

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleClick = () => setMobileOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a
          href="#"
          className="font-heading text-xl font-bold tracking-tight text-foreground"
          onClick={handleClick}
        >
          RDKC
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b">
          <ul className="flex flex-col px-4 pb-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 px-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={handleClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
