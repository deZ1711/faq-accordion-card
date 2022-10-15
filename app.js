// au clic ,

// SI 

// button a deja wrapper__question--active, 
// retirer la classe et ajouter hide a la div suivant le button

// SINON 

// mettre hide a toute les div suivant les buttons
// ajouter wrapper__question--active au button 
// retirer hide a la div suivant le button 

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



