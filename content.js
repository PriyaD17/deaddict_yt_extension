document.addEventListener("click", (event) => {
  // const videoLink = event.target.closest("a[href*='/watch']");
  console.log(event.target);
  const videoLink = event.target.closest("a[href*='/watch']");
  console.log(videoLink);

  if (videoLink) {
    const url = new URL(videoLink.href);
    const videoId = url.searchParams.get("v");

    if (videoId) {
      console.log("Video ID:", videoId); // Handle dynamically
      // Example: Redirect all videos to a specific one
      event.preventDefault();
      url.searchParams.set("v", "0iGdLDeyeso"); 
      window.location.href = url.toString();
    }
  }
});// Listen for clicks on the document
document.addEventListener("click", (event) => {
  try {
    // Find the closest <a> element with a YouTube video URL
    const videoLink = event.target.closest("a[href*='/watch']");
    
    // If no matching link is found, exit
    if (!videoLink) {
      console.log("No video link found.");
      return;
    }

    // Extract the URL and video ID
    const url = new URL(videoLink.href, window.location.origin);
    const videoId = url.searchParams.get("v");

    if (videoId) {
      console.log("Found video ID:", videoId);

      // Example logic: Redirect to a specific video
      event.preventDefault(); // Prevent the default click action
      url.searchParams.set("v", "0iGdLDeyeso"); // Replace with your desired video ID
      window.location.href = url.toString(); // Redirect
    } else {
      console.log("No video ID found in the URL.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
});


