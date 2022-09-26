let buttons, box;

window.onload = () => {
  buttons = document.getElementById("buttons").children;
};

const select = (button) => {
  Array.from(buttons).forEach((element) => {
    element.setAttribute("selected", false);
  });
  if (box) box.classList.add("hidden");
  box = null;
  if (button.innerHTML == "Meeting") {
    button.setAttribute("selected", true);
    box = document.getElementById("box-meeting");
  }
  if (button.innerHTML == "Speaker") {
    button.setAttribute("selected", "true");
    box = document.getElementById("box-speaker");
  }
  if (box) box.classList.remove("hidden");
};
