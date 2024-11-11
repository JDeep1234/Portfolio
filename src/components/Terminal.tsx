import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

const Terminal = () => {
  const [text, setText] = useState('');
  const commands = [
    '> Hi, I am JDeep 👋.......',
    '> I am a Computer Science Student........',
    '> I am a Cybersecurity Enthusiast..........',
    '> I am a Web Developer..........',
  ];

  useEffect(() => {
    let currentCommand = 0;
    let currentChar = 0;

    const typeWriter = () => {
      if (currentCommand < commands.length) {
        // Only process if there's a valid command and character
        if (currentChar < commands[currentCommand]?.length) {
          setText((prev) => prev + commands[currentCommand][currentChar]);
          currentChar++;
        } else {
          // When one command is finished, move to the next one
          setText((prev) => prev + '\n');
          currentCommand++;
          currentChar = 0;
        }
      }
    };

    const timer = setInterval(typeWriter, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="cyber-border bg-black/90 rounded-lg p-4 font-mono text-green-500 shadow-lg hover-glow">
      <div className="flex items-center gap-2 mb-2 border-b border-green-500/20 pb-2">
        <TerminalIcon size={16} className="animate-pulse" />
        <span className="text-xs">intro-shell</span>
        <div className="ml-auto flex gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
      </div>
      <pre className="whitespace-pre-wrap typing-cursor">{text}</pre>
    </div>
  );
};

export default Terminal;
