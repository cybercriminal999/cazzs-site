import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// SVG Icons as React components
const CryptoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" className="stroke-amber-400"/>
    <path d="M9.5 8.5h3c1.5 0 2.5 1 2.5 2.25s-1 2.25-2.5 2.25H9.5V8.5z" className="stroke-amber-400"/>
    <path d="M9.5 13h3.5c1.5 0 2.5 1 2.5 2.25S14.5 17.5 13 17.5H9.5V13z" className="stroke-amber-400"/>
    <path d="M12 6v2.5M12 17.5V20M8 8.5h1.5M8 17.5h1.5" className="stroke-amber-400"/>
  </svg>
);

const RevolutIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <circle cx="12" cy="12" r="10" className="fill-[#0075EB]/20 stroke-[#0075EB]" strokeWidth="1"/>
    <path d="M8 8h4c2 0 3 1.5 3 3s-1 3-3 3h-4V8z" className="fill-[#0075EB]"/>
    <path d="M8 14h1.5l3.5 4h2.5l-4-4.5" className="fill-[#0075EB]"/>
  </svg>
);

const PayPalIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.771.771 0 0 1 .76-.654h6.32c2.966 0 5.045 1.932 4.573 4.997-.498 3.234-3.065 5.303-6.347 5.303H7.925l-1.183 7.683a.39.39 0 0 1-.386.288h-.28Z" className="fill-[#003087]"/>
    <path d="M19.954 8.063c-.498 3.234-3.065 5.303-6.347 5.303h-2.325l-1.183 7.683a.39.39 0 0 1-.386.288h-2.68a.255.255 0 0 1-.252-.296l.342-2.223 2.727-.003 1.096-6.951h2.66c3.97 0 7.08-2.7 7.69-6.438a5.14 5.14 0 0 0 .068-.86c-.385.75-.89 1.425-1.484 1.997l.074 1.5Z" className="fill-[#0070E0]"/>
  </svg>
);

const BankIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" className="stroke-emerald-400"/>
  </svg>
);

const CreditCardIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="5" width="20" height="14" rx="2" className="stroke-violet-400"/>
    <path d="M2 10h20M6 15h4" className="stroke-violet-400"/>
  </svg>
);

const StripeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z" className="fill-[#635BFF]"/>
  </svg>
);

const exchangeServices = [
  {
    from: "Crypto",
    to: "Crypto",
    fee: "1%",
    FromIcon: CryptoIcon,
    ToIcon: CryptoIcon,
  },
  {
    from: "Revolut",
    to: "Crypto",
    fee: "2%",
    FromIcon: RevolutIcon,
    ToIcon: CryptoIcon,
  },
  {
    from: "Crypto",
    to: "Revolut",
    fee: "2%",
    FromIcon: CryptoIcon,
    ToIcon: RevolutIcon,
  },
  {
    from: "PayPal",
    to: "Crypto",
    fee: "4%",
    note: "F&F PP Balance only",
    FromIcon: PayPalIcon,
    ToIcon: CryptoIcon,
  },
  {
    from: "Crypto",
    to: "PayPal",
    fee: "4%",
    note: "F&F PP Balance only",
    FromIcon: CryptoIcon,
    ToIcon: PayPalIcon,
  },
  {
    from: "Bank Transfer",
    to: "Crypto",
    fee: "2%",
    FromIcon: BankIcon,
    ToIcon: CryptoIcon,
  },
  {
    from: "Crypto",
    to: "Bank Transfer",
    fee: "4%",
    FromIcon: CryptoIcon,
    ToIcon: BankIcon,
  },
  {
    from: "Credit Card",
    to: "Crypto",
    fee: "10%",
    note: "via Stripe - Min. $10",
    FromIcon: CreditCardIcon,
    ToIcon: CryptoIcon,
    stripeEnabled: true,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="pt-16 pb-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-2xl font-bold pulse-glow">
                C
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-glow bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent">
                Cazz's Exchanging
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fast, secure, and reliable currency exchange services.
              Trade crypto, fiat, and more with competitive rates.
            </p>
            <div className="mt-6 flex items-center justify-center">
              <Badge variant="secondary" className="px-5 py-2.5 text-sm bg-blue-500/20 text-blue-300 border border-blue-500/30">
                HALAL & TELEGRAM MMS ONLY
              </Badge>
            </div>
          </div>
        </header>

        {/* Exchange Services */}
        <section className="px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center text-blue-100">
              Exchange Rates
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {exchangeServices.map((service, index) => (
                <Card
                  key={index}
                  className="card-hover gradient-border border-0 overflow-hidden"
                >
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-lg bg-white/10 p-2 flex items-center justify-center">
                            <service.FromIcon />
                          </div>
                          <span className="font-medium text-sm text-blue-100">{service.from}</span>
                        </div>
                        <svg
                          className="w-5 h-5 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-lg bg-white/10 p-2 flex items-center justify-center">
                            <service.ToIcon />
                          </div>
                          <span className="font-medium text-sm text-blue-100">{service.to}</span>
                        </div>
                      </div>
                      <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/40 hover:bg-blue-500/30 text-lg font-bold px-3 py-1">
                        {service.fee}
                      </Badge>
                    </div>
                    {service.note && (
                      <p className="mt-3 text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-blue-400" />
                        {service.note}
                      </p>
                    )}
                    {service.stripeEnabled && (
                      <div className="mt-3 flex items-center gap-2">
                        <StripeIcon />
                        <span className="text-xs text-muted-foreground">Powered by Stripe</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Separator className="max-w-4xl mx-auto bg-blue-500/20" />

        {/* Contact Section */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8 text-center text-blue-100">
              Get In Touch
            </h2>
            <div className="grid gap-4 md:grid-cols-2 max-w-2xl mx-auto">
              {/* Discord */}
              <a
                href="https://discord.com/users/1408956216612356117"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="card-hover gradient-border border-0 overflow-hidden cursor-pointer group">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#5865F2]/20 flex items-center justify-center group-hover:bg-[#5865F2]/30 transition-colors">
                      <svg className="w-8 h-8 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-100 group-hover:text-blue-300 transition-colors">Discord</p>
                      <p className="text-sm text-muted-foreground">larpingcryptos</p>
                    </div>
                  </CardContent>
                </Card>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/larpingcryptos"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="card-hover gradient-border border-0 overflow-hidden cursor-pointer group">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#0088cc]/20 flex items-center justify-center group-hover:bg-[#0088cc]/30 transition-colors">
                      <svg className="w-8 h-8 text-[#0088cc]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-100 group-hover:text-blue-300 transition-colors">Telegram</p>
                      <p className="text-sm text-muted-foreground">@larpingcryptos</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 py-8 border-t border-blue-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Cazz's Exchanging. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-2">
              Fast & Secure Exchange Services
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
