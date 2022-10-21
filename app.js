const question = document.querySelectorAll('button');
const answer = document.querySelectorAll('button + div');

question.forEach(button => button.addEventListener("click", () => {
  if(button.classList.contains("wrapper__question--active")) {
    button.nextElementSibling.classList.add("hide");
    button.classList.remove("wrapper__question--active");
  } else {
    answer.forEach(div => {
      div.classList.add("hide");
    });
    question.forEach(button => {
      button.classList.remove("wrapper__question--active");
    })
    button.classList.add("wrapper__question--active");
    button.nextElementSibling.classList.remove("hide");
  }
}))



