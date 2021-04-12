// function addPar() {
//     let i = document.getElementById('p-div');
//     let p = document.createElement('p');
//     let input = document.getElementById('p-input').value;
//     p.innerHTML = input;
//     i.appendChild(p);
//     document.getElementById('p-input').value = '';


//     console.log('works');
// }

// document.getElementById('p-button').addEventListener('onClick', 'addPar()');


    
var button = document.getElementById("p-button");           
var paragraph = document.getElementById("p-div");
var input = document.getElementById("p-input");
function newParagraph(){
    var userInput = input.value
    let newParagraphElement = document.createElement("p");
    newParagraphElement.innerHTML = userInput;
    paragraph.appendChild(newParagraphElement);
    input.value = ""
}
button.addEventListener("click", newParagraph)



    // var button = document.getElementById('p-button');
    // var paragraph = document.getElementById('p-input');

    // button.addEventListener('click', function() {
    // paragraph.textContent = "Someone clicked the button!";
    
    // })

