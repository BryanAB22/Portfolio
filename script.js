const titles = [
  
  {
    lang: "es",
    text: "Bienvenido a Mi Portafolio."
  },
  {
    lang: "fr",
    text: "Bienvenue sur mon portfolio."
  },
  {
    lang: "de",
    text: "Willkommen auf meinem Portfolio."
  },
  {
    lang: "it",
    text: "Benvenuti nel mio portfolio."
  },
  {
    lang: "zh",
    text: "欢迎来到我的作品集。"
  },
  {
    lang: "ja",
    text: "私のポートフォリオへようこそ。"
  }
];

let titleIndex = 0;
const titleElement = document.querySelector("#Main h1");

function changeTitle() {
  titleElement.textContent = titles[titleIndex].text;
  titleElement.lang = titles[titleIndex].lang;
  titleIndex = (titleIndex + 1) % titles.length;
}

setInterval(changeTitle, 5000);
