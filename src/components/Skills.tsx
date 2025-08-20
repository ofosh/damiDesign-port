import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Design Tools',
      skills: [
        { name: 'Adobe Creative Suite', level: 95 },
        { name: 'Figma', level: 90 },
        { name: 'Sketch', level: 85 },
        { name: 'InVision', level: 80 },
      ],
    },
    {
      title: 'Development',
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 75 },
      ],
    },
    {
      title: 'Specialties',
      skills: [
        { name: 'UI/UX Design', level: 95 },
        { name: 'Brand Identity', level: 90 },
        { name: 'Web Design', level: 95 },
        { name: 'Mobile Design', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            My <span className="text-orange-500">Skills</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set built through years of experience and continuous learning, 
            spanning design, development, and strategic thinking.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
              <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-orange-500 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-orange-500 to-orange-600 h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-orange-500 mb-2">5+</div>
            <div className="text-slate-600">Years Experience</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
            <div className="text-slate-600">Projects Completed</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl font-bold text-orange-500 mb-2">30+</div>
            <div className="text-slate-600">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;