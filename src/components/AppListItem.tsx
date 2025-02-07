
import { Lock } from "lucide-react";

interface AppListItemProps {
  icon: string;
  name: string;
  description: string;
  isLocked: boolean;
}

const AppListItem = ({ icon, name, description, isLocked }: AppListItemProps) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-surface/50 backdrop-blur-md animate-slide-up hover:bg-surface/80 transition-colors">
      <img src={icon} alt={name} className="w-12 h-12 rounded-xl" />
      <div className="flex-1">
        <h3 className="text-white font-medium">{name}</h3>
        <p className="text-sm text-white/60">{description}</p>
      </div>
      <Lock
        className={`w-6 h-6 ${
          isLocked ? "text-accent-turquoise" : "text-white/40"
        }`}
      />
    </div>
  );
};

export default AppListItem;
