// commands.ts
// help | h ✔

const help = `
  <div class="bg-[#333333] text-white p-2 rounded-md">
    <h3 class="text-lg font-semibold">Available Commands:</h3>
    <ul class="list-inside space-y-2 mt-2">
      <li><span class="text-green-400">help</span>   - Displays available commands</li>
      <li><span class="text-green-400">whoami</span> - Displays user browser information</li>
      <li><span class="text-green-400">clear</span>  - Clears the terminal</li>
      <li><span class="text-green-400">ipinfo</span> - Displays your public IP information</li>
      <li><span class="text-red-600">core</span>     - Magic Command : redirect to raflyasligalek-core</li>
      <li><span class="text-red-600"> c3d </span>    - Magic Command : redirect to chainsaw 3d</li>
      <li><span class="text-blue-400">download &lt;file&gt;</span> - Downloads the specified file from the root folder</li>
    </ul>
  </div>
`;

const whoami: string = `${navigator.userAgent}`;
const fileList: String[] = ["virus-kamal.txt"];

// To Execute Command
export const executeCommand = async (
  command: string,
  output: string[],
  setOutput: React.Dispatch<React.SetStateAction<string[]>>,
  setHistory: React.Dispatch<React.SetStateAction<string[]>>,
  setHistoryIndex: React.Dispatch<React.SetStateAction<number>>,
  history: string[],
  _historyIndex: number,
  setCommand: React.Dispatch<React.SetStateAction<string>>
) => {
  const [cmd, ...args] = command.trim().split(" ");

  switch (cmd.toLowerCase()) {
    case "help":
    case "h":
      setOutput([...output, help]);
      break;
    case "whoami":
      setOutput([...output, whoami]);
      break;
    case "clear":
      setOutput([]);
      break;
    case "ipinfo":
      try {
        const response = await fetch("https://ipinfo.io/json");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        const ipInfo = `
          <div class="bg-[#333333] text-white p-2 rounded-md">
            <h3 class="text-lg font-semibold">IP Information:</h3>
            <ul class="list-inside space-y-2 mt-2">
              <li><span class="text-green-400">IP:</span> ${data.ip}</li>
              <li><span class="text-green-400">City:</span> ${data.city}</li>
              <li><span class="text-green-400">Region:</span> ${data.region}</li>
              <li><span class="text-green-400">Country:</span> ${data.country}</li>
              <li><span class="text-green-400">Provider:</span> ${data.org}</li>
            </ul>
          </div>
        `;
        setOutput([...output, ipInfo]);
      } catch (error: any) {
        setOutput([...output, `Error fetching IP info: ${error.message}`]);
      }
      break;
    case "core":
      window.open(
        "https://raflyasligalek-core-topan-playground.vercel.app/",
        "_blank",
        "noopener,noreferrer"
      );
      break;
    case "download":
      const fileName = args[0];
      if (!fileName) {
        setOutput([
          ...output,
          `Usage: download <file>. Type 'help' or 'h' to view a list of available commands.`,
        ]);
        break;
      }

      if (fileList.includes(fileName)) {
        window.open(
          `https://github.com/RizqullahY/web-terminal/raw/refs/heads/master/public/assets/${fileName}`
        );
      } else {
        setOutput([...output, `Error: File '${fileName}' not found.`]);
      }
      break;
    case "c3d":
      window.open(
        "https://chainsaw-3d-raflyasligalek.vercel.app/",
        "_blank",
        "noopener,noreferrer"
      );
      break;
    case "":
      setOutput([
        ...output,
        `Type 'help' or 'h' to view a list of available commands.`,
      ]);
      break;
    default:
      setOutput([
        ...output,
        `${command}: command not found. Type 'help' or 'h' to view a list of available commands.`,
      ]);
  }

  setHistory([...history, command]);
  setHistoryIndex(history.length + 1);
  setCommand("");
};
