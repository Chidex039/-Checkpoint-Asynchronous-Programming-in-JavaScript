// Define a function to simulate fetching data from an API
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "Sample API data" });
    }, 2000); // Simulate a 2-second delay for the API response
  });
}

// Define the async function that waits for the API response and logs the data
async function awaitCall() {
  console.log("Fetching data...");
  const response = await fetchData(); // Wait for the simulated API response
  console.log("Data received:", response.data); // Log the received data
}

// Example usage
awaitCall();
