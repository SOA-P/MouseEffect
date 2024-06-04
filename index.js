// @ts-nocheck
// window.addEventListener("mousemove", (e) => {
//   cursor.style.top = e.y + "px";
//   cursor.style.left = e.x + "px";
//   mouse1.style.top = e.y + "px";
//   mouse1.style.left = e.x + "px";
//   mouse2.style.top = e.y + "px";
//   mouse2.style.left = e.x + "px";
// });

const mouses = document.querySelectorAll(".mouse");

window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouses) => {
    mouses.style.top = e.y + "px";
    mouses.style.left = e.x + "px";
  });
});
