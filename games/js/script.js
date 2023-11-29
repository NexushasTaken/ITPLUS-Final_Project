const login_input_node = document.querySelector("#login-toggle");
function hideLoginMenu() {
  console.log("event");
  login_input_node.checked = false;
}
document.querySelector(".page")
  .addEventListener("scroll", hideLoginMenu);
document.querySelector(".nav")
  .addEventListener("click", hideLoginMenu);
