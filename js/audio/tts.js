// "Listen first, then you try" - a standard prompting step in articulation
// therapy (model the target before eliciting production). Uses the browser's
// built-in speech synthesis rather than a bundled recording.
export function speak(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel(); // don't stack utterances if replayed quickly
  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 0.85; // a touch slower, easier for a young child to track
  window.speechSynthesis.speak(utter);
}

export function isSupported() {
  return "speechSynthesis" in window;
}
