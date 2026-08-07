// A clear, single flashcard - word + emoji - styled like a physical card in
// a carousel, with a "Card X of Y" counter so it reads as a deck he's
// working through rather than a plain quiz screen.
export function flashCardHtml(item, index, total) {
  return `
    <div class="flashcard">
      <div class="flashcard-index">Card ${index + 1} of ${total}</div>
      <div class="flashcard-emoji">${item.icon ?? "🎤"}</div>
      <div class="flashcard-word">${item.text}</div>
      ${item.prompt ? `<div class="flashcard-prompt">${item.prompt}</div>` : ""}
    </div>
  `;
}
