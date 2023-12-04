let toggleButton = document.getElementById("toggleButton");
let textDescription = document.querySelector(".textDescription");
let originalContent = textDescription.innerHTML.trim();
let contentLength = 300;
let isToggle = true;

const textSplit = () => {
  if (window.innerWidth <= 768) {
    if (textDescription.textContent.length > contentLength) {
      textDescription.innerHTML =
        textDescription.innerHTML.substring(0, contentLength) + "....";
      toggleButton.textContent = "Show More";
      console.log(true);
    } else {
      toggleButton.textContent = "Show Less";
      console.log(false);
    }
  } else {
    textDescription.innerHTML = originalContent;
    toggleButton.textContent = "Show Less";
    console.log(false);
  }
};
textSplit();
window.addEventListener("resize", textSplit);

const toggleFunctionality = () => {
  if (window.innerWidth <= 768) {
    toggleButton.style.display = "block";
    toggleButton.addEventListener("click", () => {
      if (!isToggle) {
        if (textDescription.innerHTML.length > contentLength) {
          textDescription.innerHTML =
            textDescription.innerHTML.substring(0, contentLength) + "....";
          toggleButton.textContent = "Show More";
          console.log(true);
        }
      } else {
        textDescription.innerHTML = originalContent;
        toggleButton.textContent = "Show Less";
        console.log(false);
      }

      isToggle = !isToggle;
    });
  } else {
    toggleButton.style.display = "none";
  }
};

toggleFunctionality();
window.addEventListener("resize", toggleFunctionality);
