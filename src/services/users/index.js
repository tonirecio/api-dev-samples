
export const get = async (id) => {
  const response = await fetch(`https://reqres.in/api/users/${id}`);
  if (!response.ok) {
    throw new Error({
      message: response.statusText,
      statusCode: response.status,
    });
  }
  const jsonData = await response.json();
  return jsonData.data;

  // return {
  //   "id": 1,
  //   "email": "george.bluth@reqres.in",
  //   "first_name": "George",
  //   "last_name": "Bluth",
  //   "avatar": "https://reqres.in/img/faces/1-image.jpg"
  // }
};

export const getWithPause = async (id) => {
  return new Promise(async (resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch(`https://reqres.in/api/users/${id}`);
        if (!response.ok) {
          reject(new Error(`Error: ${response.status}`));
        }
        const jsonData = await response.json();
        resolve(jsonData.data);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
}
