export function getPosts() {
  return new Promise(async (resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          reject(new Error(`Error: ${response.status}`));
        }
        const data = await response.json();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    }, 2000);
  });
}