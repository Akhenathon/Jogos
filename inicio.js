const $ = (id) => document.getElementById(id);
const T = (id, style) => $(id).style.display = style;
const player = $("player");
let [playerX, playerY, speed] = [600, 300, 10];

document.addEventListener("keydown", ({ keyCode }) => {
    const bounds = player.getBoundingClientRect();
    if (keyCode === 37) playerX = Math.max(playerX - speed, 0);
    if (keyCode === 38) playerY = Math.max(playerY - speed, 0);
    if (keyCode === 39) playerX = Math.min(playerX + speed, window.innerWidth - bounds.width);
    if (keyCode === 40) playerY = Math.min(playerY + speed, window.innerHeight - bounds.height);
    player.style.left = playerX + "px";
    player.style.top = playerY + "px";
});
$("tela-play").onclick = () => {
    T("tela-play", "none");
    T("outra-tela", "block");
};

 function openDialog() {
      var dialog = document.getElementById("myDialog");
      dialog.show();
    }

    function closeDialog() {
      var dialog = document.getElementById("myDialog");
      dialog.close();
    }

