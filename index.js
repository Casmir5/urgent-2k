console.log("hello");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElementsLeft = document.querySelectorAll(".hide-element-left");
const hiddenElementsRight = document.querySelectorAll(".hide-element-right");

hiddenElementsLeft.forEach((el) => observer.observe(el));
hiddenElementsRight.forEach((el) => observer.observe(el));

const siderbar = document.querySelector(".sidebar");
const openSidebar = document.querySelector(".open-sidebar");
const closeSidebar = document.querySelector(".close-sidebar");

openSidebar.addEventListener("click", function () {
  siderbar.classList.remove("translate-x-full");
  siderbar.classList.add("translate-x-0");
});
closeSidebar.addEventListener("click", function () {
  siderbar.classList.add("translate-x-full");
  siderbar.classList.remove("translate-x-0");
});
