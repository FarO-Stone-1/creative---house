"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

type Order = {
  id: string;
  reference: string;
  customer_name: string;
  customer_phone: string;
  customer_email: string | null;
  items: any;
  total: number;
  status: string;
  created_at: string;
};

type Quote = {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  service: string;
  quantity: number | null;
  details: string;
  created_at: string;
};

export default function AdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [tab, setTab] = useState<"orders" | "quotes">("orders");

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.replace("/admin/login");
        return;
      }

      setUser(session.user);
      await loadData();
      setLoading(false);
    };

    checkAuth();
  }, [router]);

  const loadData = async () => {
    const { data, error } = await supabase
      .from("quotes")
      .select("*")
      .order("created_at", { ascending: false });

    const { data: ordersData } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    setQuotes(data || []);
    setOrders(ordersData || []);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  };

  if (loading) {
    return (
      <Section>
        <div className="text-center py-16 text-ch-grey">Loading…</div>
      </Section>
    );
  }

  return (
    <>
      <section className="gradient-brand text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Admin Dashboard</h1>
          <p className="text-white/90 mt-2">
            Signed in as {user?.email}
          </p>
          <button
            onClick={handleLogout}
            className="mt-4 text-sm bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition"
          >
            Log out
          </button>
        </div>
      </section>

      <Section>
        <div className="flex gap-3 mb-8 justify-center">
          <button
            onClick={() => setTab("orders")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              tab === "orders"
                ? "bg-ch-pink text-white"
                : "bg-white text-ch-grey border border-gray-200 hover:border-ch-pink"
            }`}
          >
            Orders ({orders.length})
          </button>
          <button
            onClick={() => setTab("quotes")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              tab === "quotes"
                ? "bg-ch-pink text-white"
                : "bg-white text-ch-grey border border-gray-200 hover:border-ch-pink"
            }`}
          >
            Quotes ({quotes.length})
          </button>
        </div>

        {tab === "orders" && (
          <div className="space-y-4">
            {orders.length === 0 && (
              <p className="text-center text-ch-grey py-12">
                No paid orders yet.
              </p>
            )}
            {orders.map((o) => (
              <div
                key={o.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="text-xs font-mono text-ch-grey">
                    {o.reference}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-green-50 text-green-700 font-medium">
                    {o.status}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-ch-grey">Customer</p>
                    <p className="font-medium text-ch-dark">{o.customer_name}</p>
                    <p className="text-ch-grey">{o.customer_phone}</p>
                    {o.customer_email && (
                      <p className="text-ch-grey text-xs">{o.customer_email}</p>
                    )}
                  </div>
                  <div>
                    <p className="text-ch-grey">Total</p>
                    <p className="font-bold text-ch-dark text-lg">
                      GHS {o.total}
                    </p>
                    <p className="text-ch-grey text-xs mt-2">
                      {new Date(o.created_at).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "quotes" && (
          <div className="space-y-4">
            {quotes.length === 0 && (
              <p className="text-center text-ch-grey py-12">
                No quote requests yet.
              </p>
            )}
            {quotes.map((q) => (
              <div
                key={q.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <span className="text-xs font-medium text-ch-pink">
                    {q.service}
                  </span>
                  <span className="text-xs text-ch-grey">
                    {new Date(q.created_at).toLocaleString()}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-ch-grey">From</p>
                    <p className="font-medium text-ch-dark">{q.name}</p>
                    <p className="text-ch-grey">{q.phone}</p>
                    {q.email && (
                      <p className="text-ch-grey text-xs">{q.email}</p>
                    )}
                  </div>
                  <div>
                    {q.quantity && (
                      <>
                        <p className="text-ch-grey">Quantity</p>
                        <p className="font-medium text-ch-dark">{q.quantity}</p>
                      </>
                    )}
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-ch-grey text-xs mb-1">Details</p>
                  <p className="text-ch-dark text-sm whitespace-pre-wrap">
                    {q.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}