
let body = document.querySelector('body');
let eventType = 'mousedown';
let useCapture = true;

let fix = function () {
  console.log('AliLinkFixer: Fixing');

  let targets = document.querySelectorAll('a[data-href]');
  if (targets.length <= 0) {
    return;
  }

  Array.slice(targets).forEach(it => {
    let parent = it.parentNode;
    let next = it.nextSibling;
    let cloned = it.cloneNode(true);
    cloned.href = it.getAttribute('data-href');
    parent.removeChild(it);
    parent.insertBefore(cloned, next);
  });
  body.removeEventListener(eventType, fix, useCapture);
  clearTimeout(timer);
  console.log('AliLinkFixer: Fixed');
};

let timer = setTimeout(fix, 1000);
body.addEventListener(eventType, fix, useCapture);

console.log('AliLinkFixer: Installed');
