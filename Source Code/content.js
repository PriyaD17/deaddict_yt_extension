// document.addEventListener("click", (event) => {
//   try {
//     // Find the closest <a> element with a YouTube video URL
//     const videoLink = event.target.closest("a[href*='/watch']");
    
//     // Log the video link to debug
//     console.log("Clicked element:", event.target);
//     console.log("Found video link:", videoLink);

//     // If no matching link is found, exit
//     if (!videoLink) {
//       console.log("No video link found.");
//       return;
//     }

//     // Extract the URL and video ID
//     const url = new URL(videoLink.href, window.location.origin);
//     const videoId = url.searchParams.get("v");

//     if (videoId) {
//       console.log("Found video ID:", videoId);

//       // Prevent the default action (e.g., navigating to the video)
//       event.preventDefault();

//       // Redirect to a specific video (replace with your desired video ID)
//       url.searchParams.set("v", "0iGdLDeyeso"); 
//       console.log("Redirecting to:", url.toString()); // Log the redirect URL
//       window.location.href = url.toString(); // Redirect to the new video
//     } else {
//       console.log("No video ID found in the URL.");
//     }
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// });
