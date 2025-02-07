
import { Home, Grid, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const footerItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Grid, label: "Apps", path: "/apps" },
    { icon: User, label: "Account", path: "/account" },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-surface border-t border-white/10 px-6 py-3">
      <nav className="flex justify-between items-center max-w-xl mx-auto">
        {footerItems.map(({ icon: Icon, label, path }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center gap-1 transition-colors ${
              currentPath === path
                ? "text-accent-orange"
                : "text-white/60 hover:text-white/80"
            }`}
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs font-medium">{label}</span>
          </Link>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
