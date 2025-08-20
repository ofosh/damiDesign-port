import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Calendar } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        project: "",
        budget: "",
        message: "",
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      detail: "hi@damidesign.xyz",
      link: "mailto:hi@damidesign.xyz",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      detail: "+234 903 911 5985",
      link: "tel:+234 903 911 5985",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      detail: "Nigeria",
      link: "#",
    },
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Thank You!
            </h3>
            <p className="text-xl text-slate-600 mb-8">
              Your message has been sent successfully. I'll get back to you
              within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Let's Work <span className="text-orange-500">Together</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? I'd love to hear about your
            project and discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-800 mb-8">
                Get In Touch
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center p-4 rounded-2xl hover:bg-slate-50 transition-all duration-300 group"
                  >
                    <div className="text-orange-500 mr-4 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-slate-500 text-sm">{info.title}</div>
                      <div className="text-slate-800 font-semibold">
                        {info.detail}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-2xl border border-orange-200">
                <div className="flex items-center mb-3">
                  <Calendar size={20} className="text-orange-500 mr-2" />
                  <span className="text-slate-800 font-semibold">
                    Quick Response
                  </span>
                </div>
                <p className="text-slate-600 text-sm">
                  I typically respond to all inquiries within 24 hours. For
                  urgent projects, feel free to call directly.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-800 mb-8">
                Start Your Project
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-slate-700 font-medium mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all duration-300 outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-slate-700 font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all duration-300 outline-none"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-slate-700 font-medium mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all duration-300 outline-none"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="project"
                      className="block text-slate-700 font-medium mb-2"
                    >
                      Project Type
                    </label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all duration-300 outline-none"
                    >
                      <option value="">Select project type</option>
                      <option value="web-design">Web Design</option>
                      <option value="branding">Brand Identity</option>
                      <option value="mobile-app">Mobile App Design</option>
                      <option value="e-commerce">E-commerce</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-slate-700 font-medium mb-2"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all duration-300 outline-none"
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-slate-700 font-medium mb-2"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all duration-300 outline-none resize-none"
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
