
import { Trash2 } from "lucide-react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const RemoveJunk = () => {
  return (
    <div className="min-h-screen bg-background text-white p-6 pb-24">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <Trash2 className="w-8 h-8 text-blue-500" />
          <h1 className="text-2xl font-bold">Remove Junk</h1>
        </div>
      </header>

      <div className="space-y-6">
        <div className="p-6 rounded-xl bg-surface/50 backdrop-blur-md">
          <h2 className="text-lg font-semibold mb-4">Device Storage</h2>
          <div className="h-2 bg-surface rounded-full mb-4">
            <div className="h-full w-3/4 bg-blue-500 rounded-full"></div>
          </div>
          <p className="text-white/60">75% of storage used</p>
        </div>

        <div className="p-6 rounded-xl bg-surface/50 backdrop-blur-md">
          <h2 className="text-lg font-semibold mb-4">Clean Options</h2>
          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-between">
              Cache Files
              <span className="text-white/60">1.2 GB</span>
            </Button>
            <Button variant="outline" className="w-full justify-between">
              Temporary Files
              <span className="text-white/60">645 MB</span>
            </Button>
            <Button variant="outline" className="w-full justify-between">
              Residual Files
              <span className="text-white/60">234 MB</span>
            </Button>
          </div>
        </div>

        <Button className="w-full bg-blue-500 hover:bg-blue-600">
          Clean Now
        </Button>
      </div>

      <Footer />
    </div>
  );
};

export default RemoveJunk;
