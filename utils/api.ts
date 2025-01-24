export const fetchIpInfo = async (): Promise<string> => {
    try {
      const response = await fetch("https://ipinfo.io/json");
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      return `
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
    } catch (error: any) {
      throw new Error(`Failed to fetch IP information: ${error.message}`);
    }
  };
  