
import { useState, useEffect } from "react";
import {
  Lock,
  Settings,
  Vault,
  Trash2,
  Palette,
  Bell,
  Search,
  KeyRound,
  ShieldQuestion
} from "lucide-react";
import QuickAccessIcon from "@/components/QuickAccessIcon";
import AppListItem from "@/components/AppListItem";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const apps = [
  {
    icon: "/lovable-uploads/478ee311-c44d-47e5-9cba-5e39a50e1550.png",
    name: "Play Store",
    description: "Avoid unintentional installs/uninstalls",
    isLocked: true,
  },
  {
    icon: "/lovable-uploads/48e3e5ee-78fb-4d45-be71-2b74b278499e.png",
    name: "Settings",
    description: "Avoid App Lock being forced to stop or uninstall",
    isLocked: true,
  },
  {
    icon: "/whatsapp-icon.png",
    name: "WhatsApp",
    description: "Secure your messages",
    isLocked: true,
  },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("unlock");
  const [showPinOverlay, setShowPinOverlay] = useState(false);
  const [pin, setPin] = useState("");
  const [showRecovery, setShowRecovery] = useState(false);
  const [securityAnswer, setSecurityAnswer] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const accountData = localStorage.getItem("accountData");
    if (accountData) {
      setShowPinOverlay(true);
    }
  }, []);

  const handlePinSubmit = () => {
    const accountData = JSON.parse(localStorage.getItem("accountData") || "{}");
    if (accountData.pin === pin) {
      setShowPinOverlay(false);
      toast({
        title: "Welcome back!",
        description: "You've successfully logged in.",
      });
    } else {
      toast({
        title: "Incorrect PIN",
        description: "Please try again or use security questions to recover access.",
        variant: "destructive",
      });
    }
    setPin("");
  };

  const handleRecovery = () => {
    const accountData = JSON.parse(localStorage.getItem("accountData") || "{}");
    if (accountData.securityAnswer1.toLowerCase() === securityAnswer.toLowerCase()) {
      setShowPinOverlay(false);
      setShowRecovery(false);
      toast({
        title: "Access granted",
        description: "Please update your PIN in Account settings.",
      });
    } else {
      toast({
        title: "Incorrect answer",
        description: "Please try again.",
        variant: "destructive",
      });
    }
    setSecurityAnswer("");
  };

  if (showPinOverlay) {
    return (
      <div className="fixed inset-0 bg-background/95 backdrop-blur-sm flex items-center justify-center p-6 z-50">
        <div className="w-full max-w-md p-6 rounded-xl bg-surface/50 backdrop-blur-md space-y-6">
          {!showRecovery ? (
            <>
              <div className="flex items-center gap-2 mb-6">
                <KeyRound className="w-8 h-8 text-accent-orange" />
                <h1 className="text-2xl font-bold text-white">Enter PIN</h1>
              </div>
              <Input
                type="password"
                placeholder="Enter your 4-digit PIN"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                maxLength={4}
                className="text-center text-2xl tracking-wider"
              />
              <Button 
                className="w-full" 
                onClick={handlePinSubmit}
                disabled={pin.length !== 4}
              >
                Unlock
              </Button>
              <Button 
                variant="ghost" 
                className="w-full"
                onClick={() => setShowRecovery(true)}
              >
                Forgot PIN?
              </Button>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2 mb-6">
                <ShieldQuestion className="w-8 h-8 text-accent-orange" />
                <h1 className="text-2xl font-bold text-white">Security Question</h1>
              </div>
              <p className="text-white/80 mb-4">What was your first pet's name?</p>
              <Input
                type="text"
                placeholder="Enter your answer"
                value={securityAnswer}
                onChange={(e) => setSecurityAnswer(e.target.value)}
              />
              <Button 
                className="w-full" 
                onClick={handleRecovery}
                disabled={!securityAnswer}
              >
                Verify
              </Button>
              <Button 
                variant="ghost" 
                className="w-full"
                onClick={() => setShowRecovery(false)}
              >
                Back to PIN
              </Button>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white p-6 pb-24">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <Lock className="w-8 h-8 text-accent-orange" />
          <h1 className="text-2xl font-bold">App Lock</h1>
        </div>
        <Link to="/settings">
          <Settings className="w-6 h-6 text-white/80" />
        </Link>
      </header>

      {/* Quick Access */}
      <div className="flex justify-between mb-8 animate-fade-in">
        <QuickAccessIcon
          icon={Vault}
          label="Vault"
          color="bg-accent-orange"
          to="/vault"
        />
        <QuickAccessIcon
          icon={Trash2}
          label="Remove junk"
          color="bg-blue-500"
          to="/remove-junk"
        />
        <QuickAccessIcon
          icon={Palette}
          label="Theme"
          color="bg-purple-500"
          to="/theme"
        />
        <QuickAccessIcon
          icon={Bell}
          label="Notifications"
          color="bg-green-500"
          to="/notifications"
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b border-white/10">
        <button
          className={`pb-2 px-1 ${
            activeTab === "unlock"
              ? "text-accent-orange border-b-2 border-accent-orange"
              : "text-white/60"
          }`}
          onClick={() => setActiveTab("unlock")}
        >
          Unlock
        </button>
        <button
          className={`pb-2 px-1 ${
            activeTab === "locked"
              ? "text-accent-orange border-b-2 border-accent-orange"
              : "text-white/60"
          }`}
          onClick={() => setActiveTab("locked")}
        >
          Locked
        </button>
        <div className="flex-1 flex justify-end">
          <Search className="w-6 h-6 text-white/60" />
        </div>
      </div>

      {/* Security Status */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-white/60">Advanced</span>
        <div className="px-3 py-1 rounded-full bg-accent-purple/20 text-accent-purple text-sm">
          95%
        </div>
      </div>

      {/* App List */}
      <div className="space-y-4">
        {apps.map((app) => (
          <AppListItem key={app.name} {...app} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Index;
