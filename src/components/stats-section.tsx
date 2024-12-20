import { Globe, Building2, MapPin, Plane } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      number: '50',
      label: 'Countries',
      icon: Globe,
    },
    {
      number: '500+',
      label: 'Cities and',
      icon: Building2,
    },
    {
      number: '1500+',
      label: 'Hotels',
      icon: MapPin,
    },
    {
      number: '50,000+',
      label: 'Holiday Package',
      icon: Plane,
    },
  ];

  return (
    <div>
      <h1 className="text-center text-3xl md:text-4xl font-bold text-black">
        Idbook Hotel is offering special innovating Hospitality solutions to
        ease their business travel
      </h1>
      <div className="w-full py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`relative rounded-lg p-6 ${
                  index === 1 ? 'bg-[#3B4FB7]' : 'bg-[#F8FAFC]'
                }`}
              >
                <div className="absolute -top-5 left-32">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
                    <Icon
                      className={`h-6 w-6 ${
                        index === 1 ? 'text-[#3B4FB7]' : 'text-gray-600'
                      }`}
                    />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3
                    className={`text-4xl font-bold ${
                      index === 1 ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {stat.number}
                  </h3>
                  <p
                    className={`mt-2 text-lg ${
                      index === 1 ? 'text-gray-200' : 'text-gray-600'
                    }`}
                  >
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
