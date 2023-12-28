// Simulating a database with posts and user activity
let posts = [];
let lastActivityTime = null;

// Function to create a new post
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve(posts);
    }, 1000); // Simulating 1 second delay
  });
}

// Function to update the user's last activity time
function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve(lastActivityTime);
    }, 1000); // Simulating 1 second delay
  });
}

// Function to delete the last post
function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        posts.pop();
        resolve(posts);
      } else {
        reject(new Error("No posts to delete."));
      }
    }, 1000); // Simulating 1 second delay
  });
}

// Function to log posts and last activity time
function logPostsAndLastActivity() {
  console.log("Posts:", posts);
  console.log("Last Activity Time:", lastActivityTime);
}

// Example usage
createPost("First Post")
  .then(() => updateLastUserActivityTime())
  .then(() => logPostsAndLastActivity())
  .then(() => deletePost())
  .then(() => logPostsAndLastActivity())
  .catch((error) => console.error(error));
