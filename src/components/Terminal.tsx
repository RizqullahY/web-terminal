import React, { useState, useEffect } from 'react';
import { executeCommand } from '../commands';  
import { navigateHistory } from '../commands/history';

const TerminalComponent = () => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const focusOnCommandInput = () => {
    document.getElementById("command")?.focus();
  };

  useEffect(() => {
    focusOnCommandInput();
  }, []);


  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      executeCommand(command, output, setOutput, setHistory, setHistoryIndex, history, historyIndex, setCommand);
    }

    if (event.key === 'ArrowUp') {
      navigateHistory('up', historyIndex, setHistoryIndex, setCommand, history);
    }

    if (event.key === 'ArrowDown') {
      navigateHistory('down', historyIndex, setHistoryIndex, setCommand, history);
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    }
  };

  return (
    <div className="p-4 text-white font-mono">
      <div className="command-container space-y-2">
        {output.map((line, index) => (
          <div 
            key={index} 
            className="command-result p-2 bg-[#2e2e2e] rounded-md"
            dangerouslySetInnerHTML={{ __html: line }} 
          />
        ))}
      </div>
      <div className="input-container mt-4">
        <label htmlFor="command" className="input-label text-green-400">ROOK@raflyAsliGalek: ~$</label>
        <input
          type="text"
          id="command"
          className="input-command input-text bg-transparent text-white border-none outline-none w-full mt-1 p-2 rounded-md border border-gray-600"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </div>
    </div>
  );
};

export default TerminalComponent;
