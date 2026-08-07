// Video-only camera preview for the optional "watch yourself" mirror.
// No audio, no analysis - the app no longer listens to or judges his
// speech at all; a grown-up decides that. This is purely a visual aid so
// he can see his own tongue/teeth placement while practicing.

let mediaStream = null;

export async function startCameraPreview() {
  if (mediaStream) return;
  mediaStream = await navigator.mediaDevices.getUserMedia({
    video: { facingMode: "user" },
    audio: false,
  });
}

export function stopCameraPreview() {
  if (mediaStream) {
    mediaStream.getTracks().forEach((t) => t.stop());
    mediaStream = null;
  }
}

export function getMediaStream() {
  return mediaStream;
}
