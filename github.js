// Inspirations :
//   https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/
//   https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-reading-time/

document.addEventListener('keypress', (event) => {
  if (estCtrlShift('C', event)) copieDansPressePapiers(phraseDePR())
  if (estCtrlShift('R', event)) copieDansPressePapiers(reviewDePR())
  if (estCtrlShift('A', event)) copieDansPressePapiers(prApprouvee())
  if (estCtrlShift('M', event)) copieDansPressePapiers(prVaEtreMergee())
})

function estCtrlShift(char, event) {
  return event.shiftKey && event.ctrlKey && event.key === char;
}

function copieDansPressePapiers(texte) {
  navigator.clipboard.writeText(texte).then(() => {});
}

function phraseDePR() {
  return `:git-pull-request: La PR \`${titrePR()}\` `;
}

function reviewDePR() {
  return `:git-pull-request: :eyes: Je relis la PR \`${titrePR()}\`.`;
}

function prApprouvee() {
  return `:git-pull-request: :white_check_mark: La PR \`${titrePR()}\` est approuvée.`;
}

function prVaEtreMergee() {
  return `:merged: Je vais merger la PR \`${titrePR()}\`.`
}

function titrePR() {
  return document.getElementsByClassName('gh-header-title')[0]?.innerText;
}
