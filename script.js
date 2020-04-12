const refresh = document.querySelector(".next")
const dice = document.querySelector(".faces")

refresh.addEventListener('click', () =>
{
  const faceNumber = Math.floor(Math.random() * 6) + 1
  const diceImage = `images/face${faceNumber}.png`
  dice.src = diceImage
  const audio = document.querySelector(".sound")
  return audio.play()
})
