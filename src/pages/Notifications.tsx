
import { Bell } from "lucide-react";
import Footer from "@/components/Footer";
import { Switch } from "@/components/ui/switch";

const Notifications = () => {
  return (
    <div className="min-h-screen bg-background text-white p-6 pb-24">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <Bell className="w-8 h-8 text-green-500" />
          <h1 className="text-2xl font-bold">Notifications</h1>
        </div>
      </header>

      <div className="space-y-6">
        <div className="p-6 rounded-xl bg-surface/50 backdrop-blur-md">
          <h2 className="text-lg font-semibold mb-4">Notification Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">App Lock Alerts</p>
                <p className="text-sm text-white/60">
                  Get notified when apps are locked or unlocked
                </p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Security Alerts</p>
                <p className="text-sm text-white/60">
                  Receive alerts about security events
                </p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Updates</p>
                <p className="text-sm text-white/60">
                  Get notified about app updates
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

export default Notifications;
