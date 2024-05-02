function runAnimations() {
  document
    .querySelector("#id-452922")
    .addEventListener("click", func_452922_452520);

  function func_452922_452520(e) {
    e.stopPropagation();

    document.querySelector(".parent-div").classList.add("parent-animation-854");
    document.querySelector("#id-854").classList.add("animationClass-854");
    document
      .querySelector("#id-854 > div:first-child")
      .classList.add("bgClass-452520");
    document
      .querySelector("#id-452922")
      .removeEventListener("click", func_452922_452520);
  }
}
runAnimations();
