function toggleMode() {
  const html = document.documentElement
  // toggle faz a remocao do parametro light do html
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode adiciona imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "foto de Rafael Quero sorrindo, usando camisa preta, barba e fundo gradiente verde"
    )
  } else {
    // se tiver sem light mode mantem imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "foto de Rafael Quero sorrindo, usando camisa preta, barba e fundo branco"
    )
  }
}
