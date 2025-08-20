import { ArrowDown, Download } from "lucide-react";
import CV from "../assets/cv.pdf";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Creative
              <span className="text-orange-500 block">Designer</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-lg">
              Transforming ideas into visually stunning experiences.
              Specializing in web design, branding, and digital solutions that
              captivate and convert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                View My Work
              </button>
              <a href={CV} download="Dami's Resume">
                <button className="border border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-start justify-start gap-2 backdrop-blur-sm cursor-pointer">
                  Download CV
                  <Download size={20} />
                </button>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Creative workspace"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-orange-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={32} className="text-white/50" />
      </div>
    </section>
  );
};

export default Hero;
