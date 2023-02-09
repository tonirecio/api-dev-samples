export function getAll() {
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

export async function create(post) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  });

  return response.json();
}