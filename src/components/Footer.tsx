import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  Heart,
} from "lucide-react";

const Footer = () => {
  const today = new Date();
  const socialLinks = [
    {
      icon: <Twitter size={20} />,
      href: "https://x.com/damidesign_?s=21",
      label: "Twitter",
    },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/damidesign__?igsh=MWxxaTMyYTF2bnVjNA%3D%3D&utm_source=qr",
      label: "Instagram",
    },
    { icon: <Github size={20} />, href: "#", label: "Github" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Web Design", href: "#" },
    { name: "Brand Identity", href: "#" },
    { name: "Mobile Apps", href: "#" },
    { name: "SEO Optimization", href: "#" },
  ];

  const contactInfo = [
    {
      icon: <Mail size={16} />,
      text: "hi@damidesign.xyz",
      href: "mailto:hi@damidesign.xyz",
    },
    {
      icon: <Phone size={16} />,
      text: "+234 903 911 5985",
      href: "tel:+15551234567",
    },
    { icon: <MapPin size={16} />, text: "Nigeria", href: "#" },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="text-3xl font-bold mb-6">
                Dami<span className="text-orange-500">Design</span>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Creating exceptional digital experiences that drive results.
                Transforming ideas into visually stunning and functional
                designs.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-slate-800 hover:bg-orange-500 p-3 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-orange-500 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-slate-400 hover:text-orange-500 transition-colors duration-300"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Info</h4>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <li key={index}>
                    <a
                      href={info.href}
                      className="flex items-center text-slate-400 hover:text-orange-500 transition-colors duration-300"
                    >
                      <div className="mr-3">{info.icon}</div>
                      {info.text}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Newsletter Signup */}
              <div className="mt-8">
                <h5 className="font-semibold mb-3">Stay Updated</h5>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-l-lg focus:outline-none focus:border-orange-500 text-white"
                  />
                  <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-lg transition-colors duration-300">
                    <Mail size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-slate-400 mb-4 md:mb-0">
              <span>
                All rights reserved © {today.getFullYear()} DamiDesign.
              </span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-slate-400 hover:text-orange-500 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-orange-500 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-orange-500 transition-colors duration-300"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
