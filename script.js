function toggleMode() {
  const html =
    document.documentElement /* document representa o documento em si, e doocument.Element representa onde está o HTML*/

  /* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/
  html.classList.toggle(
    "light"
  ) /* resume toda essa função acima que faz colocar ou tirar o light do HTML*/

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.jpg")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Foto do Higor Gostosão")
  } else {
    img.setAttribute("alt", "Foto do Higor Lindão")
  }
}
