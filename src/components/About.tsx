import { Award, Users, Coffee, Lightbulb } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Award size={32} />, number: "50+", label: "Projects Completed" },
    { icon: <Users size={32} />, number: "30+", label: "Happy Clients" },
    { icon: <Coffee size={32} />, number: "500+", label: "Cups of Coffee" },
    {
      icon: <Lightbulb size={32} />,
      number: "100+",
      label: "Creative Solutions",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Designer at work"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-96 bg-orange-500/10 rounded-3xl -z-10"></div>
          </div>

          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              About <span className="text-orange-500">Me</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              I'm a passionate designer with over 5 years of experience creating
              digital experiences that not only look amazing but also drive
              results. My approach combines creative vision with strategic
              thinking to deliver solutions that exceed expectations.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              From concept to completion, I work closely with clients to
              understand their unique needs and translate them into compelling
              visual stories. Every project is an opportunity to push boundaries
              and create something extraordinary.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-orange-500 mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
