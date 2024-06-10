// async function iterateWithAsyncAwait(array) {
//   for (const value of array) {
//     console.log(value);
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//   }
// }

// Define a delay function that returns a Promise that resolves after a given time
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Define the async function that takes an array of values
async function iterateWithAsyncAwait(values) {
  for (let value of values) {
    console.log(value); // Log the current value
    await delay(1000); // Wait for 1 second
  }
}

// Example usage
const values = [1, 2, 3, 4, 5, 6];
iterateWithAsyncAwait(values);
