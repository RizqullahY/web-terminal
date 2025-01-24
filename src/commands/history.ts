export const navigateHistory = (direction: 'up' | 'down', historyIndex: number, setHistoryIndex: React.Dispatch<React.SetStateAction<number>>, setCommand: React.Dispatch<React.SetStateAction<string>>, history: string[]) => {
    if (direction === 'up' && historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setCommand(history[historyIndex - 1]);
    } else if (direction === 'down' && historyIndex < history.length) {
      setHistoryIndex(historyIndex + 1);
      setCommand(history[historyIndex + 1] || '');
    }
  };
  