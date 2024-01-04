// waits time and returns promise
export const wait = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`waited ${time}`);
    }, time);
  });
};

// for load images
export const fileReader = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
