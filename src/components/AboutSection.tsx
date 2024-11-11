import React from 'react';
import { Code, Shield, Brain, Cpu, Globe, Coffee } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    { name: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
    { name: 'Backend', items: ['Node.js', 'Express', 'Flask', 'Django'] },
    { name: 'Security', items: ['Penetration Testing', 'Network Security', 'Cryptography', 'Malware Analysis'] },
    { name: 'DevOps', items: ['Docker', 'Kubernetes', 'CI/CD', 'GCP'] },
  ];

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4 cyber-border bg-black/50 p-6 rounded-lg hover-glow">
          <h3 className="text-2xl font-bold text-green-500 flex items-center gap-2 glitch-text">
            <Brain className="w-6 h-6" /> About Me
          </h3>
          <p className="text-gray-300 leading-relaxed">
          👨‍💻 Computer Science Student with a passion for Cybersecurity, and Artificial Intelligence. I specialize in crafting innovative solutions and optimizing algorithms to tackle real-world challenges. Proficient in writing robust, clean code across modern languages like Python, Java, and C++ with a focus on functional, performance, and system testing to ensure scalability and reliability in distributed systems 🌐.

 </p>
          <p className="text-gray-300 leading-relaxed">
           I’m skilled in problem-solving, algorithmic thinking, and have a solid understanding of how systems work 🧩. I thrive in collaborative, agile teams and excel at adapting to dynamic business needs quickly and effectively. Let’s connect and explore the exciting, ever-evolving world of tech together! 🚀
         
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-green-500 flex items-center gap-2 glitch-text">
            <Coffee className="w-6 h-6" /> What I Do
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Code, title: 'Development', desc: 'Full-stack web development' },
              { icon: Shield, title: 'Security', desc: 'ML & Cybersecurity' },
              { icon: Cpu, title: 'Architecture', desc: 'System design & optimization' },
              { icon: Globe, title: 'DevOps', desc: 'Cloud & infrastructure' }
            ].map((item, index) => (
              <div 
                key={item.title}
                className="p-4 bg-black/50 rounded-lg cyber-border hover-glow transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="w-6 h-6 text-green-500 mb-2" />
                <h4 className="font-bold mb-1">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-green-500 flex items-center gap-2 glitch-text">
          <Code className="w-6 h-6" /> Skills & Technologies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((category, index) => (
            <div 
              key={category.name} 
              className="p-4 bg-black/50 rounded-lg cyber-border skill-card hover-glow"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h4 className="font-bold mb-2 text-green-500">{category.name}</h4>
              <ul className="space-y-1">
                {category.items.map((item) => (
                  <li key={item} className="text-gray-300 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;