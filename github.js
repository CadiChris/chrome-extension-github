// Inspirations :
//   https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/
//   https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-reading-time/

document.addEventListener('keypress', (event) => {
  if (estCtrlShiftC(event)) copieDansPressePapiers(titrePR())
})

function estCtrlShiftC(event) {
  return event.shiftKey && event.ctrlKey && event.key === 'C';
}

function copieDansPressePapiers(texte) {
  navigator.clipboard.writeText(texte).then(() => {});
}

function titrePR() {
  return document.getElementsByClassName('gh-header-title')[0]?.innerText;
}
