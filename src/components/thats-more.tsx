import {
  BarChart3,
  FileText,
  Smartphone,
  Clock,
  GaugeCircle,
} from 'lucide-react';

export default function ThatMore() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto pt-20 pb-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#2B4B8C] mb-16">
            There&apos;s more!
          </h1>
        </div>

        {/* Features Grid */}
        <div
          className="relative rounded"
          style={{
            backgroundImage: `url('https://www.idbookhotels.com/corporate/features/business-person-hologram.svg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Features Content */}
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Image */}
            <div className="hidden lg:block"></div>

            {/* Right side - Features List */}
            <div className="bg-[#2B4B8C] p-8">
              <div className="space-y-6">
                <FeatureItem
                  icon={<BarChart3 className="w-6 h-6" />}
                  title="Hassle-Free GST"
                />
                <FeatureItem
                  icon={<FileText className="w-6 h-6" />}
                  title="Automatic and easy invoices"
                />
                <FeatureItem
                  icon={<GaugeCircle className="w-6 h-6" />}
                  title="Dedicated dashboard to track payments"
                />
                <FeatureItem
                  icon={<Smartphone className="w-6 h-6" />}
                  title="Mobile app with built-in approval flow and custom budget limits"
                />
                <FeatureItem
                  icon={<Clock className="w-6 h-6" />}
                  title="Round-the-clock support of Idbook Team"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureItem({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center space-x-4 text-white">
      <div className="flex-shrink-0 bg-white/10 p-3 rounded-lg">{icon}</div>
      <p className="text-lg font-light">{title}</p>
    </div>
  );
}
