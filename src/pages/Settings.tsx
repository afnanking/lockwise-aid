
import { Settings2 } from "lucide-react";
import Footer from "@/components/Footer";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background text-white p-6 pb-24">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <Settings2 className="w-8 h-8 text-white" />
          <h1 className="text-2xl font-bold">Settings</h1>
        </div>
      </header>

      <div className="space-y-6">
        <div className="p-6 rounded-xl bg-surface/50 backdrop-blur-md">
          <h2 className="text-lg font-semibold mb-4">Security Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Biometric Lock</p>
                <p className="text-sm text-white/60">
                  Use fingerprint or face ID
                </p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Auto-Lock</p>
                <p className="text-sm text-white/60">
                  Lock apps when device is locked
                </p>
              </div>
              <Switch />
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-surface/50 backdrop-blur-md">
          <h2 className="text-lg font-semibold mb-4">App Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Dark Mode</p>
                <p className="text-sm text-white/60">
                  Enable dark theme
                </p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Notifications</p>
                <p className="text-sm text-white/60">
                  Enable push notifications
                </p>
              </div>
              <Switch />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Settings;
