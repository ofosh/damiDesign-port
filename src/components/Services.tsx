import React from 'react';
import { Palette, Code, Smartphone, Search, BarChart3, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette size={32} />,
      title: 'Brand Design',
      description: 'Complete brand identity creation including logos, color schemes, typography, and brand guidelines.',
      features: ['Logo Design', 'Brand Guidelines', 'Color Palette', 'Typography'],
    },
    {
      icon: <Code size={32} />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.',
      features: ['Responsive Design', 'CMS Integration', 'E-commerce', 'Performance Optimization'],
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Design',
      description: 'User-centered mobile app interfaces that provide exceptional user experiences.',
      features: ['iOS/Android Apps', 'Prototyping', 'User Testing', 'Design Systems'],
    },
    {
      icon: <Search size={32} />,
      title: 'SEO Optimization',
      description: 'Strategic SEO implementation to improve search rankings and organic visibility.',
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Analytics Setup'],
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Analytics & Insights',
      description: 'Data-driven insights to optimize performance and user engagement.',
      features: ['User Analytics', 'Conversion Tracking', 'A/B Testing', 'Performance Reports'],
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance Optimization',
      description: 'Speed optimization and technical enhancements for better user experience.',
      features: ['Speed Optimization', 'Core Web Vitals', 'Caching', 'CDN Integration'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I offer comprehensive design and development services to help businesses 
            create compelling digital experiences that drive growth and engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/80 transition-all duration-500 hover:scale-105 group"
            >
              <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-slate-400">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;