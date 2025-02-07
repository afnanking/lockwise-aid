
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { Lock, Key, User, Shield } from "lucide-react";

const registrationSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  pin: z.string().length(4, "PIN must be exactly 4 digits").regex(/^\d+$/, "PIN must contain only numbers"),
  securityQuestion1: z.string().min(1, "Security question is required"),
  securityAnswer1: z.string().min(1, "Security answer is required"),
  securityQuestion2: z.string().min(1, "Security question is required"),
  securityAnswer2: z.string().min(1, "Security answer is required"),
  securityQuestion3: z.string().min(1, "Security question is required"),
  securityAnswer3: z.string().min(1, "Security answer is required"),
});

const Account = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: "",
      password: "",
      pin: "",
      securityQuestion1: "What was your first pet's name?",
      securityAnswer1: "",
      securityQuestion2: "What city were you born in?",
      securityAnswer2: "",
      securityQuestion3: "What is your mother's maiden name?",
      securityAnswer3: "",
    },
  });

  useEffect(() => {
    const accountData = localStorage.getItem("accountData");
    if (accountData) {
      setIsRegistered(true);
    }
  }, []);

  const onSubmit = (values: z.infer<typeof registrationSchema>) => {
    try {
      // In a real app, we would encrypt this data before storing
      localStorage.setItem("accountData", JSON.stringify(values));
      setIsRegistered(true);
      toast({
        title: "Account created successfully",
        description: "Your account has been set up and your PIN will be used for app security.",
      });
    } catch (error) {
      toast({
        title: "Error creating account",
        description: "There was a problem creating your account. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-white p-6 pb-24">
      <header className="flex items-center gap-2 mb-8">
        <User className="w-8 h-8 text-accent-orange" />
        <h1 className="text-2xl font-bold">Account</h1>
      </header>

      {isRegistered ? (
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-surface/50 backdrop-blur-md">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Account Status
            </h2>
            <p className="text-white/80 mb-2">Your account is active and secure</p>
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Key className="w-4 h-4" />
              PIN protection enabled
            </div>
          </div>

          <div className="p-6 rounded-xl bg-surface/50 backdrop-blur-md">
            <h2 className="text-lg font-semibold mb-4">Security Settings</h2>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => {
                localStorage.removeItem("accountData");
                setIsRegistered(false);
                toast({
                  title: "Account reset",
                  description: "Your account has been reset. Please register again.",
                });
              }}
            >
              Reset Account
            </Button>
          </div>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="p-6 rounded-xl bg-surface/50 backdrop-blur-md space-y-4">
              <h2 className="text-lg font-semibold mb-4">Account Registration</h2>
              
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>4-Digit PIN</FormLabel>
                    <FormControl>
                      <Input 
                        type="password" 
                        placeholder="Enter 4-digit PIN" 
                        maxLength={4}
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="p-6 rounded-xl bg-surface/50 backdrop-blur-md space-y-4">
              <h2 className="text-lg font-semibold mb-4">Security Questions</h2>
              
              {[1, 2, 3].map((num) => (
                <div key={num} className="space-y-4">
                  <FormField
                    control={form.control}
                    name={`securityQuestion${num}` as any}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Security Question {num}</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`securityAnswer${num}` as any}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Answer {num}</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your answer" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
            </div>

            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </form>
        </Form>
      )}

      <Footer />
    </div>
  );
};

export default Account;
