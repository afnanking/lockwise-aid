
import { Lock } from "lucide-react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Vault = () => {
  return (
    <div className="min-h-screen bg-background text-white p-6 pb-24">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <Lock className="w-8 h-8 text-accent-orange" />
          <h1 className="text-2xl font-bold">Vault</h1>
        </div>
      </header>

      <div className="space-y-6">
        <div className="p-6 rounded-xl bg-surface/50 backdrop-blur-md">
          <h2 className="text-lg font-semibold mb-4">Secure Storage</h2>
          <p className="text-white/60 mb-4">
            Store your private files, photos, and documents securely in the vault.
          </p>
          <Button variant="outline" className="w-full">
            Add Files
          </Button>
        </div>

        <div className="p-6 rounded-xl bg-surface/50 backdrop-blur-md">
          <h2 className="text-lg font-semibold mb-4">Vault Items</h2>
          <p className="text-white/60">No items in vault yet</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Vault;
