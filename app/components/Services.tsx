import Link from "next/link";

type Service = {
  icon: string;
  title: string;
  description: string;
  href?: string;
  features?: string[];
};

type ServicesProps = {
  services: Service[];
  sectionTitle: string;
  sectionDescription: string;
};

export default function Services({ services, sectionTitle, sectionDescription }: ServicesProps) {
  return (
    <section
      id="services"
      className="services py-24 bg-gradient-to-br from-gray-50 to-gray-200"
    >
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="section-title text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            {sectionTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            {sectionDescription}
          </p>
        </div>
        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href || "#"}
              className="block text-inherit no-underline"
            >
              <div className="service-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden animate-on-scroll hover:-translate-y-2 hover:scale-105 flex flex-col justify-between min-h-72">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-300 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
                <div className="service-icon w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-300 rounded-xl flex items-center justify-center mb-6 text-2xl text-white">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                {service.features && (
                  <ul className="service-features list-none p-0 m-0">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-gray-600 mb-1 pl-5 relative before:absolute before:left-0 before:text-blue-500 before:font-bold before:content-['✓']"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
