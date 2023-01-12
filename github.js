// Inspirations :
//   https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/
//   https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-reading-time/

document.addEventListener('keypress', (event) => {
  if (estCtrlShiftC(event)) copieDansPressePapiers(phraseDePR())
})

function estCtrlShiftC(event) {
  return event.shiftKey && event.ctrlKey && event.key === 'C';
}

function copieDansPressePapiers(texte) {
  navigator.clipboard.writeText(texte).then(() => {});
}

function phraseDePR() {
  return `:git-pull-request: La PR \`${titrePR()}\` `;
}

function titrePR() {
  return document.getElementsByClassName('gh-header-title')[0]?.innerText;
}
