document.addEventListener("DOMContentLoaded", () => {
  // Insira seu nome na variável meuNome
  const meuNome = "Marcello Carboni"

  const casas = [
    new Casa(
      "Gryffindor",
      "./img/casas/gryffindor.jfif",
      ["Harry Potter", "Hermione Granger", "Ron Weasley", "Neville Longbottom"],
      "Grifinória, onde a coragem, o cavalheirismo e a determinação são os valores fundamentais."
    ),
    new Casa(
      "Hufflepuff",
      "./img/casas/hufflepuff.jfif",
      ["Cedric Diggory", "Nymphadora Tonks", "Newt Scamander", "Pomona Sprout"],
      "Lufa-Lufa, conhecida por seu trabalho árduo, lealdade e paciência."
    ),
    new Casa(
      "Ravenclaw",
      "./img/casas/ravenclaw.jfif",
      ["Luna Lovegood", "Cho Chang", "Garrick Ollivander", "Filius Flitwick"],
      "Corvinal, onde a sabedoria, o intelecto e a criatividade são altamente valorizados."
    ),
    new Casa(
      "Slytherin",
      "./img/casas/slytherin.jfif",
      [
        "Draco Malfoy",
        "Severus Snape",
        "Tom Riddle (Voldemort)",
        "Bellatrix Lestrange",
      ],
      "Sonserina, famosa pela ambição, astúcia e desejo de poder."
    ),
  ]

  const seletor = new Seletor(casas, meuNome)
})
