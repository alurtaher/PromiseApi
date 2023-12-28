// Simulating a database with posts and user activity
let posts = [];
let lastActivityTime = null;

// Function to create a new post (
async function createPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.push(post);
      resolve(posts);
    }, 1000);
  });
}

// Function to update the user's last activity time 
async function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve(lastActivityTime);
    }, 1000);
  });
}

// Function to delete the last post 
async function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        posts.pop();
        resolve(posts);
      } else {
        reject(new Error("No posts to delete."));
      }
    }, 1000);
  });
}

// New promise called getColdDrinks
async function getColdDrinks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Cold Drinks");
    }, 1000);
  });
}

// Example usage with async/await and Promise.all
async function main() {
  try {
    await createPost("First Post");
    await updateLastUserActivityTime();
    logPostsAndLastActivity();


    await getColdDrinks();
    logPostsAndLastActivity();

    await deletePost();
    logPostsAndLastActivity();
  } catch (error) {
    console.error(error);
  }
}

// Function to log posts and last activity time
function logPostsAndLastActivity() {
  console.log("Posts:", posts);
  console.log("Last Activity Time:", lastActivityTime);
}


main();
