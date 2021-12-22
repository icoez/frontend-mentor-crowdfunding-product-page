const hamburger = $(".toggle-button");
$(hamburger).click(openModalMenu);
function openModalMenu() {
  $(".modal-bg").toggleClass("visible");
}
