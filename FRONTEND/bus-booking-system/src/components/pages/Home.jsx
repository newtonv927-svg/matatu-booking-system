import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/90 to-slate-950"></div>

      <div className="relative inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/90 to-slate-950"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-xl shadow-cyan-500/20">
                <span>New</span>
                <span className="rounded-full bg-white px-2 py-0.5 text-xs font-bold">Fast Booking</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                  Book your next journey with confidence.
                </h1>
                <p className="max-w-2xl text-lg text-slate-300 leading-relaxed">
                  SwiftBus connects you to the best routes across Kenya with luxury coaches,
                  secure MPESA payment, and instant digital ticketing.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/buses"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
                >
                  Explore Routes
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/80 px-8 py-4 text-base font-semibold text-white transition hover:border-slate-400 hover:bg-slate-900"
                >
                  Create Account
                </Link>
              </div>
            </div>

            <div className="rounded-[40px] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
              <div className="flex flex-col gap-6">
                <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Travel with ease</p>
                  <h2 className="mt-3 text-2xl font-semibold">Premium travel experience</h2>
                  <p className="mt-3 text-slate-400">Flexible seats, quick checkout, and 24/7 support for every passenger.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
                    <p className="text-sm text-slate-400">Fast booking</p>
                    <p className="mt-3 text-xl font-semibold text-white">Under 2 minutes</p>
                  </div>
                  <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
                    <p className="text-sm text-slate-400">M-Pesa support</p>
                    <p className="mt-3 text-xl font-semibold text-white">Secure payments</p>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Enjoy</p>
                  <p className="mt-3 text-lg font-semibold text-white">Comfortable coaches with premium route coverage.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}