"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/admin");
  };

  return (
    <>
      <section className="gradient-brand text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Admin Login</h1>
          <p className="text-white/90 mt-2">Sign in to manage orders and quotes.</p>
        </div>
      </section>

      <Section>
        <form
          onSubmit={handleLogin}
          className="max-w-md mx-auto bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-ch-dark mb-2">
              Email
            </label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ch-pink focus:outline-none focus:ring-2 focus:ring-ch-pink/20"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-ch-dark mb-2">
              Password
            </label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-ch-pink focus:outline-none focus:ring-2 focus:ring-ch-pink/20"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm bg-red-50 rounded-xl p-3">
              {error}
            </p>
          )}

          <Button className="w-full !py-3">
            {loading ? "Signing in..." : "Sign In"}
          </Button>

          <p className="text-xs text-ch-grey text-center">
            Lost your password? Contact the site owner to reset it.
          </p>
        </form>
      </Section>
    </>
  );
}