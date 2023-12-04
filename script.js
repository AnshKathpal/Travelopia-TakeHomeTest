let toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", () => {

    let textDescription = document.querySelector(".textDescription");
    let originalContent = textDescription.textContent.trim()

  let contentLength = 300;
  if (textDescription.textContent.length > contentLength) {
    textDescription.textContent =
      textDescription.textContent.substring(0, contentLength) + "....";
      toggleButton.textContent = "Show More"
  }else{
    textDescription.textContent = originalContent;
    toggleButton.textContent = "Show Less"
  }
});
