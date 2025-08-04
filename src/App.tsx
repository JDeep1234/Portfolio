import React, { useRef } from 'react';  
import { Shield, Code, Mail, Github, Linkedin } from 'lucide-react';  
import Terminal from './components/Terminal';  
import ProjectCard from './components/ProjectCard';  
import AboutSection from './components/AboutSection';  
import Section from './components/Section';  

function App() {  
  // Create a reference for the contact section  
  const contactSectionRef = useRef(null);  

  const scrollToContact = () => {  
    if (contactSectionRef.current) {  
      contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });  
    }  
  };  

  return (  
    <div className="min-h-screen bg-gray-900 text-white matrix-bg">  
      {/* Hero Section */}  
      <header className="relative overflow-hidden">  
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80')] bg-cover bg-center">  
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>  
        </div>  
        
        <div className="relative container mx-auto px-4 py-24">  
          <nav className="absolute top-0 left-0 right-0 p-6">  
            <div className="flex justify-between items-center">  
              <div className="flex items-center gap-2 text-green-500">  
                <Shield className="w-6 h-6 animate-pulse" />  
                <span className="font-mono font-bold glitch-text">CyberFolio</span>  
              </div>  
              <div className="flex gap-6">  
                {['about', 'projects', 'contact'].map((item) => (  
                  <a   
                    key={item}   
                    href={`#${item}`}   
                    className="hover:text-green-500 transition-colors capitalize hover-glow px-2 py-1"  
                    onClick={item === 'contact' ? scrollToContact : undefined}  
                  >  
                    {item}  
                  </a>  
                ))}  
              </div>  
            </div>  
          </nav>  
          
          <div className="max-w-4xl mx-auto text-center space-y-8">  
            <Terminal />  
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent glitch-text">  
              Driven by a passion for Machine Learning, MERN Development, and Cybersecurity Innovation.  
            </h1>  
            <p className="text-xl text-gray-300">  
              Empowering technology solutions through advanced machine learning, full-stack development, and cybersecurity expertise.  
            </p>  
            <div className="flex justify-center gap-4">  
              <a   
                href="#contact"   
                className="px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-all duration-300 hover:scale-105 hover-glow"  
              >  
                Get in Touch  
              </a>  
              <a   
                href="#projects"   
                className="px-6 py-3 border border-green-500 text-green-500 font-semibold rounded-lg hover:bg-green-500/10 transition-all duration-300 hover:scale-105 hover-glow"  
              >  
                View Projects  
              </a>  
            </div>  
          </div>  
        </div>  
      </header>  

      {/* About Section */}  
      <section id="about" className="py-24">  
        <div className="container mx-auto px-4">  
          <AboutSection />  
        </div>  
      </section>  

      {/* Projects Section */}  
      <section id="projects" className="py-24 bg-black/40">  
        <div className="container mx-auto px-4">  
          <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-2 glitch-text">  
            <Code className="text-green-500" />  
            Featured Projects  
          </h2>  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
            <ProjectCard  
              title="AnomalyX – Real-Time Anomaly Detection Engine"  
              description="Developed anomaly detection framework using TimeGPT and LSTM-based RNNs for streaming network telemetry with RAG-based interpretable alerts for enhanced security monitoring and threat identification."  
              tags={['Python', 'TimeGPT', 'RNN', 'LSTM', 'InfluxDB', 'Elasticsearch', 'LangChain', 'Streamlit']}  
              image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"  
              github="https://github.com/BipinRajC/AnomalyX"  
            />  
            <ProjectCard  
              title="Quantum-Encrypted Military Wearable System"  
              description="Developed a secure, real-time wearable device for soldiers that integrates with data encryption via quantum superdense coding. Created a Quantum algorithm to secure defense communications, solving real-world military security challenges and hackathon winner recognition."  
              tags={['Algorithm', 'Python', 'VSD Squadron mini', 'Folium', 'Streamlit', 'Arduino', 'RISC-V', 'Quantum Cryptography']}  
              image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"  
              github="https://github.com/JDeep1234/Soldiers-Health-Monitoring-and-GPS-Tracking-System"  
            />  
            <ProjectCard  
              title="XOracleBench – Cross-Chain DeFi Protocol Benchmarking"  
              description="Engineered benchmarking platform processing 50K+ TPS with sub-millisecond latency and 90% accuracy improvement for cross-chain DeFi protocols, enabling comprehensive performance analysis and optimization."  
              tags={['TypeScript', 'Express.js', 'Blockchain APIs', 'Smart Contracts', 'System Design']}  
              image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"  
              github="https://github.com/JDeep1234/XOracleBench"  
            />  
          </div>  
        </div>  
      </section>  

      {/* Contact Section */}  
      <section ref={contactSectionRef} id="contact" className="py-10">  
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">  
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 justify-center">  
            <Code className="w-8 h-8 text-neon-green" />  
            <span className="text-gradient-code">Contact.jsx</span>  
          </h2>  
          <div className="terminal-card p-8 rounded-xl max-w-2xl mx-auto">  
            <p className="text-neon-green font-mono mb-8">  
              {">"} Ready to collaborate? Let's build something amazing together!  
            </p>  
            <a  
              href="mailto:jdeepb34@gmail.com"  
              className="inline-flex items-center gap-2 bg-neon-green hover:bg-neon-green/90 text-code-dark px-1 py-3 rounded-xl transition-all duration-300 hover:scale-105 font-mono font-bold glowing-border"  
            >  
              <Mail className="w-10 h-10" />npm run contact  
            </a>  
          </div>  
        </div>  
      </section>  

      {/* Footer */}  
      <footer className="bg-black/90 py-8">  
        <div className="container mx-auto px-4">  
          <div className="flex justify-between items-center">  
            <div className="flex items-center gap-2 text-green-500">  
              <Shield className="w-6 h-6 animate-pulse" />  
              <span className="font-mono font-bold">CyberFolio</span>  
            </div>  
            <p>© {new Date().getFullYear()} JDeep </p>  
            <div className="flex gap-4">  
              <a href="https://github.com/JDeep1234" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-all duration-300 hover:scale-110">  
                <Github className="w-6 h-6" />  
              </a>  
              <a href="https://www.linkedin.com/in/bjnyanadeep/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-all duration-300 hover:scale-110">  
                <Linkedin className="w-6 h-6" />  
              </a>  
            </div>  
          </div>  
        </div>  
      </footer>  
    </div>  
  );  
}  

export default App;
