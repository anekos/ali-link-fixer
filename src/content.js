
function makeHandler(target) {
  return (ev) => {
    const url = target.getAttribute('data-href');
    ev.preventDefault();
    ev.stopPropagation();
    window.open(url)
  }
}

const injected = new Set();

function setup() {
  let targets = document.querySelectorAll('a[data-href]');

  let injections = 0;

  Array.from(targets).forEach((target) => {
    if (injected.has(target))
      return;
    injected.add(target);
    const handler = makeHandler(target);
    target.addEventListener('click', handler, false);
    target.addEventListener('mousedown', handler, false);
    injections++;
  });

  if (0 < injections)
    console.log(`${injections} injections`)
}

console.log('AliLinkFixer: Installed');

setup();
setInterval(setup, 200);
