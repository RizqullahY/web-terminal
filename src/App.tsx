import { Terminal } from 'lucide-react';
import TerminalComponent from './components/Terminal';
import Typewriter from './components/Typewriter';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <header className="bg-gray-800 p-4 flex items-center gap-2">
        <Terminal className="w-6 h-6 text-green-400" />
        <h1 className="text-xl font-mono text-white">raflyAsliGalek</h1>
      </header>
      
      <main className="flex-1 p-4">
        {/* Typewriter Component */}
        <div className="mb-4">
          <Typewriter />
        </div>
        <div className="h-full max-w-4xl mx-auto bg-[#1a1b26] rounded-lg shadow-2xl border border-gray-700">
          <TerminalComponent />
        </div>
      </main>
    </div>
  );
}

export default App;