window.addEventListener("scroll", onScroll);

onScroll(); /* precisa ser chamada para adcionar a classe no ee=lemento html antes */

/* gerencia os diversos scroll da pagina*/

function onScroll() {
  showNavOnScroll();

  showBackToTopButtonOnScroll();

  activeMenuAtCurrentSection(home);
  activeMenuAtCurrentSection(services);
  activeMenuAtCurrentSection(about);
  activeMenuAtCurrentSection(contact);
  // activeMenuAtCurrentSection(services);
}

//vai ativar o meno na sessão que estiver no momento.
function activeMenuAtCurrentSection(section) {
  const linkHome = document.getElementById("home");
  //linha alvo
  const targetLine = scrollY + innerHeight / 2;

  //verificar se a seção passsou da linha (targetLine)
  //quais dados vou precisar para isso.

  //topo da seção
  const sectionTop = section.offsetTop;
  //altura da seção
  const sectionHeight = section.offsetHeight;

  // o topo da seção chegou ou ultapassou a linha alvo.
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  // console.log(
  //   "O topo da seção chegou ou passou da linha?",
  //   sectionTopReachOrPassedTargetLine
  // );

  //verificar se a base esta abaixo da linha alvo
  //quias dados vou precisar

  //secão termina onde
  const sectionEndsAt = sectionTop + sectionHeight;

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  // console.log("o fundo da seção passou da linha.", sectionEndPassedTargetLine);

  //limites da seção

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  //outra forma de pegar um elemento no html

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove("active");

  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

/* mostra o navagation ao fazer o scroll*/

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
}
/* mostra a botão ao fazer scroll*/

function showBackToTopButtonOnScroll() {
  if (scrollY > 600) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}

function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 700,
}).reveal(
  `#home, #home img, #home .stats, #home, #services header, #services .card,#about, #about header, #about .content`
);
