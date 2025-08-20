import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechFlow Solutions",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300",
      content:
        "Working with DamiDesign transformed our brand completely. The attention to detail and creative vision exceeded all our expectations. Our conversion rates increased by 40% after the redesign.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Marketing Director",
      company: "InnovateX",
      image:
        "https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&cs=tinysrgb&w=300",
      content:
        "The mobile app design delivered by DamiDesign was exceptional. User engagement increased by 60% and the feedback has been overwhelmingly positive. Highly professional service.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder",
      company: "Creative Studio",
      image:
        "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=300",
      content:
        "Dami understood our vision perfectly and brought it to life with stunning design work. The brand identity package was comprehensive and beautifully executed. Outstanding results.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Client <span className="text-orange-500">Testimonials</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take my word for it. Here's what clients say about
            working with DamiDesign and the results we've achieved together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-800/80 transition-all duration-500 hover:scale-105 group"
            >
              <div className="flex items-center mb-6">
                <Quote size={40} className="text-orange-500 opacity-50" />
              </div>

              <p className="text-slate-300 mb-8 leading-relaxed text-lg italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-orange-500 fill-current"
                  />
                ))}
              </div>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-orange-500/30"
                />
                <div>
                  <h4 className="text-white font-bold text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-slate-400">{testimonial.position}</p>
                  <p className="text-orange-500 font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">
              98%
            </div>
            <div className="text-slate-400">Client Satisfaction</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">
              24h
            </div>
            <div className="text-slate-400">Average Response</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">
              100%
            </div>
            <div className="text-slate-400">On-Time Delivery</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">
              5★
            </div>
            <div className="text-slate-400">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
