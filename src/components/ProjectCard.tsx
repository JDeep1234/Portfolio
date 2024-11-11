import React from 'react';
import { ExternalLink, Github, Lock } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image: string;
}

const ProjectCard = ({ title, description, tags, github, demo, image }: ProjectCardProps) => {
  return (
    <div className="cyber-border bg-black/90 rounded-lg overflow-hidden hover-glow group transform transition-all duration-300 hover:scale-[1.02]">
      <div className="relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-green-500 hover:text-green-400 transform hover:scale-110 transition-all"
            >
              <Github className="w-6 h-6" />
            </a>
          )}
          {demo && (
            <a 
              href={demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-green-500 hover:text-green-400 transform hover:scale-110 transition-all"
            >
              <ExternalLink className="w-6 h-6" />
            </a>
          )}
        </div>
        <div className="absolute top-2 right-2">
          <Lock className="w-4 h-4 text-green-500 animate-pulse" />
        </div>
      </div>
      <div className="p-4 space-y-3">
        <h3 className="text-xl font-bold text-green-500 flex items-center gap-2">
          {title}
        </h3>
        <p className="text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-500 border border-green-500/20 hover:border-green-500/40 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;