document.addEventListener("DOMContentLoaded", function () {
  const link = document.getElementById("twitterLink");
  const link2 = document.getElementById("linkedInLink");
  let dx = Math.floor(Math.random() * 4) + 1;
  let dy = Math.floor(Math.random() * 4) + 1;

  // should start somewhere random within the window
  let x = Math.floor(Math.random() * window.innerWidth);
  let y = Math.floor(Math.random() * window.innerHeight);
  let dx2 = Math.floor(Math.random() * 4) + 1;
  let dy2 = Math.floor(Math.random() * 4) + 1;
  let x2 = Math.floor(Math.random() * window.innerWidth);
  let y2 = Math.floor(Math.random() * window.innerHeight);

  function moveLink(setLink, dx, dy, x, y) {
    const width = window.innerWidth - setLink.offsetWidth;
    const height = window.innerHeight - setLink.offsetHeight;

    x += dx;
    y += dy;

    if (x >= width || x <= 0) dx *= -1;
    if (y >= height || y <= 0) dy *= -1;

    // check if the link is out of the window
    if (x > width) x = width;
    if (y > height) y = height;
    if (x < 0) x = 0;
    if (y < 0) y = 0;

    setLink.style.left = x + "px";
    setLink.style.top = y + "px";

    requestAnimationFrame(() => moveLink(setLink, dx, dy, x, y));
  }
  function changeColor(setLink) {
    const randomColorText =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    setLink.style.color = randomColorText;

    const randomColorBackground =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    setLink.style.backgroundColor = randomColorBackground;

    setTimeout(() => changeColor(setLink), 500);
  }

  changeColor(link);
  moveLink(link, dx, dy, x, y);
  changeColor(link2);
  moveLink(link2, dx2, dy2, x2, y2);
});
