const slider = document.querySelector('.slider');
const top_bg = document.querySelector('.top_bg');

function activate(e) {
  const items = document.querySelectorAll('.item');
  if (e.target.matches('.next')) {
    items[0].remove();
    top_bg.style["background-image"] = items[2].style["background-image"];
    slider.append(items[2].cloneNode(true));
  }
  if (e.target.matches('.prev')) {
    items[items.length-1].remove();
    slider.prepend(items[items.length-3].cloneNode(true));
  }
}

document.addEventListener('click', activate, false);
