// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Function to handle video redirection
    function handleVideoClick(event) {
      try {
        console.log("its working not quite")
        // Find the closest anchor tag with '/watch' in the href attribute
        const videoLink = event.target.closest("a[href*='/watch*']");
        
        // If no valid video link is found, exit the function
        if (!videoLink) return;
  
        // Modify the URL to redirect to the "boring" video
        const boringVideoId = "0iGdLDeyeso";

        // Construct the URL for the "boring" video by replacing the video ID
        const newUrl = new URL(window.location.href);  // Get the current page URL
        newUrl.searchParams.set("v", boringVideoId); // Set the 'v' query parameter to the boring video ID
        
        // Prevent the default behavior (so that the original link does not open)
        event.preventDefault();
        
        // Redirect to the new "boring" video
        window.location.href = newUrl.toString();
      } catch (error) {
        console.error("Error handling video click:", error);
      }
    }
  
    // Add a click event listener to handle video link clicks
    document.addEventListener("click", handleVideoClick);
  
    // Use MutationObserver to handle dynamically loaded content
    const observer = new MutationObserver(() => {
      console.log("DOM updated, observer running...");
      // Reattach the click event listener to ensure newly loaded content is covered
      document.addEventListener("click", handleVideoClick);
    });
  
    // Observe the body for child element additions or subtree changes
    if (document.body) {
      observer.observe(document.body, { childList: true, subtree: true });
    } else {
      console.error("document.body is not available.");
    }
  });
  