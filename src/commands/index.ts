// commands.ts
// help | h
const help = `
  <div class="bg-[#333333] text-white p-2 rounded-md">
    <h3 class="text-lg font-semibold">Available Commands:</h3>
    <ul class="list-inside space-y-2 mt-2">
      <li><span class="text-green-400">help</span> - Displays available commands</li>
      <li><span class="text-green-400">whoami</span> - Displays user information</li>
      <li><span class="text-green-400">clear</span> - Clears the terminal</li>
    </ul>
  </div>
`;

const whoami = `This is your terminal.`;



// To Execute Command
export const executeCommand = (command: string, output: string[], setOutput: React.Dispatch<React.SetStateAction<string[]>>, setHistory: React.Dispatch<React.SetStateAction<string[]>>, setHistoryIndex: React.Dispatch<React.SetStateAction<number>>, history: string[], historyIndex: number, setCommand: React.Dispatch<React.SetStateAction<string>>) => {
  switch (command.trim().toLowerCase()) {
    case 'help':
    case 'h':
      setOutput([...output, help]);
      break;
    case 'whoami':
      setOutput([...output, whoami]);
      break;
    case 'clear':
      setOutput([]);
      break;
    case '':
      setOutput([...output, `Type 'help' or 'h' to view a list of available commands.`]);
      break;
    default:
      setOutput([...output, `${command}: command not found. Type 'help' or 'h' to view a list of available commands.`]);
  }
  setHistory([...history, command]);
  setHistoryIndex(history.length + 1);
  setCommand(''); 
};

