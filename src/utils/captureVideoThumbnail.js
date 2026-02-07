export const captureVideoThumbnail = (videoSrc, time = 0.1) =>
  new Promise((resolve, reject) => {
    const video = document.createElement("video");

    video.src = videoSrc;
    video.crossOrigin = "anonymous";
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";

    const capture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      resolve(canvas.toDataURL("image/jpeg", 0.85));
    };

    video.addEventListener("seeked", capture);
    video.addEventListener("error", () =>
      reject("Thumbnail generation failed")
    );

    video.addEventListener("loadedmetadata", () => {
      video.currentTime = Math.min(time, video.duration || time);
    });
  });
