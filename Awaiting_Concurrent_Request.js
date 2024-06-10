// Define a function to simulate fetching data from an API
function fetchData(endpoint) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a success response 90% of the time, and an error 10% of the time
      if (Math.random() > 0.1) {
        resolve({ data: `Sample data from ${endpoint}` });
      } else {
        reject(new Error(`Failed to fetch data from ${endpoint}`));
      }
    }, 2000); // Simulate a 2-second delay for the API response
  });
}

// Define the async function that makes two API calls concurrently
async function concurrentRequests() {
  console.log("Fetching data from two endpoints concurrently...");

  try {
    const [response1, response2] = await Promise.all([
      fetchData("endpoint1"),
      fetchData("endpoint2"),
    ]);

    // Log the combined results after both requests have resolved
    console.log("Data received from endpoint1:", response1.data);
    console.log("Data received from endpoint2:", response2.data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Example usage
concurrentRequests();
