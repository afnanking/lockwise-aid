
import { LucideIcon } from "lucide-react";

interface QuickAccessIconProps {
  icon: LucideIcon;
  label: string;
  color: string;
}

const QuickAccessIcon = ({ icon: Icon, label, color }: QuickAccessIconProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color} shadow-lg transform transition-transform hover:scale-105`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <span className="text-sm text-white/80">{label}</span>
    </div>
  );
};

export default QuickAccessIcon;
