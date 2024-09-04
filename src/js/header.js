const modal = document.querySelector('.header_navigation_window');
const closeButton = document.querySelector('.burger_icon_close');
const burgerButton = document.querySelector('.button_burger');


if (!modal.classList.contains('to_close')) {
  modal.classList.add('to_close');
}

closeButton.addEventListener('click', function () {
  modal.classList.add('to_close');
});

burgerButton.addEventListener('click', function () {
  modal.classList.remove('to_close');
});



// TABS
const tabsBtns = document.querySelectorAll(".tabs__nav button");
const tabsItems = document.querySelectorAll(".tabs__item");

// Ф-я скрывает табы и убирает active у кнопок
function hideTabs() {
  tabsItems.forEach((item) => item.classList.add("hide"));
  tabsBtns.forEach((item) => item.classList.remove("active"));
}

// Ф-я показывает переданный номер таба и делает соответствующую ему кнопку активной.
function showTab(index) {
  tabsItems[index].classList.remove("hide");
  tabsBtns[index].classList.add("active");
}

hideTabs();
showTab(0);

tabsBtns.forEach((btn, index) =>
  btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
  })
);

