import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Auto-redirect after 15 seconds
    const timer = setTimeout(() => {
      window.location.href = 'https://t.me/m/jJZKns3qNzU0';
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gold/20">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-gold">SPEED MARKET PAGE</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 pb-32">
        
        {/* Top Header Card */}
        <section className="mb-8 rounded-3xl bg-gradient-to-br from-slate-900 to-black border border-gold/30 p-6 md:p-8">
          <div className="flex items-center gap-4 mb-6">
            {/* Profile Photo */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center flex-shrink-0 border-2 border-gold">
              <span className="text-2xl">📱</span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-1">SPEED MARKET PAGE</h2>
              <p className="text-gray-300 text-sm md:text-base">Direct Telegram redirect for old Tinder account sellers</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href="https://t.me/SPEED_NOTICE"
              className="py-3 px-4 rounded-xl bg-slate-800 border border-gold/40 text-white font-semibold text-center hover:bg-slate-700 hover:border-gold/60 transition-all duration-300"
            >
              🔔 Join Notice
            </a>
            <a
              href="https://t.me/SPEED_prime"
              className="py-3 px-4 rounded-xl bg-slate-800 border border-gold/40 text-white font-semibold text-center hover:bg-slate-700 hover:border-gold/60 transition-all duration-300"
            >
              📥 Inbox Seller
            </a>
          </div>
        </section>

        {/* Feature Badges */}
        <section className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
          <div className="px-4 py-2 rounded-full bg-gold/20 border border-gold/40 text-gold font-semibold text-sm">
            ⚡ High Price in Market
          </div>
          <div className="px-4 py-2 rounded-full bg-gold/20 border border-gold/40 text-gold font-semibold text-sm">
            🔗 Direct Telegram Contact
          </div>
        </section>

        {/* Hero Text */}
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            SELL <span className="text-gold">OLD TINDER ACCOUNTS</span> FAST & DIRECT
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
            Looking for old Tinder account sellers. Open this page, check needed account years, and message directly on Telegram. Strong premium design, responsive layout, and instant inbox redirect.
          </p>
        </section>

        {/* Feature Cards */}
        <section className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="rounded-2xl bg-slate-900/50 border border-gold/20 p-6 hover:border-gold/50 transition-all duration-300">
            <div className="text-3xl mb-3">📅</div>
            <h3 className="font-bold text-lg mb-2">Old Accounts Needed</h3>
            <p className="text-gray-400 text-sm">From 2010 up to 2025, including split 2025 ranges.</p>
          </div>
          <div className="rounded-2xl bg-slate-900/50 border border-gold/20 p-6 hover:border-gold/50 transition-all duration-300">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="font-bold text-lg mb-2">High Market Demand</h3>
            <p className="text-gray-400 text-sm">Older and well-aged accounts are valuable in the market.</p>
          </div>
          <div className="rounded-2xl bg-slate-900/50 border border-gold/20 p-6 hover:border-gold/50 transition-all duration-300">
            <div className="text-3xl mb-3">✈️</div>
            <h3 className="font-bold text-lg mb-2">Direct Seller Inbox</h3>
            <p className="text-gray-400 text-sm">No extra steps. One tap opens Telegram DM instantly.</p>
          </div>
        </section>

        {/* Primary CTA Button */}
        <section className="mb-8">
          <a
            href="https://t.me/SPEED_prime"
            className="w-full py-4 px-6 rounded-2xl bg-gold text-black font-bold text-lg text-center hover:bg-yellow-400 transition-all duration-300 block"
          >
            💬 DM @SPEED_prime
          </a>
        </section>

        {/* Secondary CTA Button */}
        <section className="mb-8">
          <a
            href="https://t.me/SPEED_NOTICE"
            className="w-full py-4 px-6 rounded-2xl bg-slate-800 border-2 border-gold/50 text-white font-bold text-lg text-center hover:bg-slate-700 hover:border-gold transition-all duration-300 block"
          >
            🔔 Join @SPEED_NOTICE
          </a>
        </section>

        {/* Auto-Redirect Notice */}
        <section className="mb-8 p-4 rounded-xl bg-slate-900/50 border border-gold/30 text-center">
          <p className="text-gold font-semibold">
            🔄 This page auto redirects to Telegram inbox after 15 seconds.
          </p>
        </section>

        {/* Phone Mockup Card */}
        <section className="mb-12 rounded-3xl bg-gradient-to-b from-slate-900 to-black border border-gold/30 p-8 md:p-12">
          <div className="max-w-sm mx-auto">
            {/* Phone Frame */}
            <div className="rounded-3xl bg-black border-8 border-slate-800 p-4 shadow-2xl">
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-black p-6 text-center">
                {/* Badges */}
                <div className="flex gap-2 justify-center mb-4">
                  <span className="px-3 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-semibold">
                    🔥 Seller Market
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs font-semibold">
                    📱 Telegram
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black mb-2">OLD TINDER ACCOUNTS</h3>
                <p className="text-gray-400 text-sm mb-6">Premium buyer page for direct seller contact.</p>

                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold to-yellow-600 mx-auto mb-6 flex items-center justify-center border-2 border-gold">
                  <span className="text-3xl">🔥</span>
                </div>

                {/* Checklist */}
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✅</span>
                    <span className="text-sm">Aged accounts wanted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✅</span>
                    <span className="text-sm">High price in market</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✅</span>
                    <span className="text-sm">Instant Telegram redirect</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✅</span>
                    <span className="text-sm">Responsive landing page</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Needed Account Years Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-black flex items-center gap-2">
              ≡ Needed Account Years
            </h2>
            <span className="px-3 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-bold">
              ACTIVE BUYING
            </span>
          </div>

          <div className="space-y-3">
            {['2010 - 2016', '2017 - 2020', '2020 - 2023', '2024', '2025 / 1 - 5', '2025 / 6 - 12'].map((year) => (
              <div key={year} className="p-4 rounded-xl bg-slate-900/50 border border-gold/20 hover:border-gold/50 transition-all duration-300 flex items-center gap-3">
                <span className="text-green-400 font-bold">✅</span>
                <span className="font-semibold text-lg">{year}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Profile Cards */}
        <section className="grid md:grid-cols-2 gap-4 mb-12">
          {/* Sellers DM Card */}
          <div className="rounded-2xl bg-slate-900/50 border border-gold/20 p-6 hover:border-gold/50 transition-all duration-300 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center flex-shrink-0 border-2 border-gold">
              <span className="text-xl">👤</span>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Sellers DM</p>
              <p className="text-xl font-bold text-gold">@SPEED_prime</p>
            </div>
          </div>

          {/* Join Notice Card */}
          <div className="rounded-2xl bg-slate-900/50 border border-gold/20 p-6 hover:border-gold/50 transition-all duration-300 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 border-2 border-blue-400">
              <span className="text-xl">✈️</span>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Join Notice</p>
              <p className="text-xl font-bold text-blue-300">@SPEED_NOTICE</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="text-center py-8 text-gray-500 text-sm">
          <p>Premium one-page Telegram redirect landing page</p>
        </section>
      </main>

      {/* Sticky Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gold/20 p-4 z-40">
        <a
          href="https://t.me/SPEED_prime"
          className="w-full py-4 px-6 rounded-2xl bg-gold text-black font-bold text-lg text-center hover:bg-yellow-400 transition-all duration-300 block max-w-4xl mx-auto"
        >
          💬 Inbox Me on Telegram
        </a>
      </div>
    </div>
  );
}
