
chrome.storage.sync.get(["isEnabled", "boringVideos"], (data) => {
    const isEnabled = data.isEnabled ?? true; 
    const boringVideos = data.boringVideos ?? [
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "https://www.youtube.com/watch?v=nMfPqeZjc2c&t=30777s",
      "https://www.youtube.com/watch?v=QH0t_ogClhA"
    ];
  
    if (isEnabled) {
      document.addEventListener("click", (e) => {
        const videoLink = e.target.closest("a#thumbnail");
        if (videoLink) {
          e.preventDefault();
          window.location.href =
            boringVideos[Math.floor(Math.random() * boringVideos.length)];
        }
      });
    }
  });
  