
import { Palette } from "lucide-react";
import Footer from "@/components/Footer";

const Theme = () => {
  const themes = [
    { name: "Dark", color: "bg-[#121212]" },
    { name: "Light", color: "bg-white" },
    { name: "Blue", color: "bg-blue-500" },
    { name: "Purple", color: "bg-purple-500" },
    { name: "Orange", color: "bg-accent-orange" },
  ];

  return (
    <div className="min-h-screen bg-background text-white p-6 pb-24">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <Palette className="w-8 h-8 text-purple-500" />
          <h1 className="text-2xl font-bold">Theme</h1>
        </div>
      </header>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          {themes.map((theme) => (
            <button
              key={theme.name}
              className="p-6 rounded-xl bg-surface/50 backdrop-blur-md hover:bg-surface/80 transition-colors"
            >
              <div
                className={`w-full h-20 rounded-lg ${theme.color} mb-4 shadow-lg`}
              />
              <p className="font-medium">{theme.name}</p>
            </button>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Theme;
