
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface QuickAccessIconProps {
  icon: LucideIcon;
  label: string;
  color: string;
  to: string;
}

const QuickAccessIcon = ({ icon: Icon, label, color, to }: QuickAccessIconProps) => {
  return (
    <Link to={to} className="flex flex-col items-center gap-2">
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color} shadow-lg transform transition-transform hover:scale-105`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <span className="text-sm text-white/80">{label}</span>
    </Link>
  );
};

export default QuickAccessIcon;
