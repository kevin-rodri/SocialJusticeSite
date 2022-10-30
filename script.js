// following will chnage backgound from light mode to dark mode 
 let themeButton = document.getElementById("theme-button");
 const toggleDarkMode = () => {
     document.body.classList.toggle("dark-mode");
 }
 themeButton.addEventListener("click", toggleDarkMode);

// will allow users to sign and stand for a worthy cause :) 
 let signNowButton = document.getElementById("sign-now-button");
 // reference to the current amount of people that have signed the form
 let count = 3;
 const addSignature = (event) => {
    // Write your code to manipulate the DOM here
    let name = document.getElementById('name').value;
    let city = document.getElementById('city').value;
    let div  = document.querySelector(".signatures");
    // create a new p tag that will allow users to see the people that have signed the form
    let info = document.createElement('p');
    let second = document.getElementById('counter');
    info.innerText = "🖊️ "+  name + " from " + city + " has signed this petition and support this cause.";
    count = count + 1;
    second.innerText = "🖊️ " + count + " people have signed this petition and support this cause.";
    div.appendChild(info);
    div.appendChild(second);
    console.log(div);

}
// Prevents redirect
// ${name} from ${city} supports this`


// ensure that each input enter is a valid input
const validateForm = (event) => {
  event.preventDefault();
    let containErrors = false;
    var petitionInputs = document.getElementById("sign-petition").elements;
    console.log(petitionInputs);
    const email = document.getElementById('email');
        if (!email.value.includes('.com')) {
            email.classList.add('error');
            containErrors = true;
        } else {
            email.classList.remove('error');
        }
        const name = document.getElementById('name');
        if (name.value.length < 2){
          name.classList.add('error');
          containErrors = true;
        } else {
          name.classList.remove('error');
        }

        const homeTown = document.getElementById('city');
        if (homeTown.value.length < 5){
          homeTown.classList.add('error');
          containErrors = true;
        } else {
          homeTown.classList.remove('error');
        }
       
        
        // if inputs do not contain errors, add signaturre to page and clear ALL input boxes
        if (!containErrors){
          addSignature();
          for (var j = 0; j < petitionInputs.length - 1; j++) {
            petitionInputs[j].value = "";
          }
        }
    
   
  }
  signNowButton.addEventListener("click", validateForm);

// for first book
const URL = "https://openlibrary.org/works/OL28624126W/Technology_in_Mental_Health";
const OLID = "OL40140814M";

const getBooks = () => {
  let bookDiv = document.querySelector(".read-more");
  const proxyURL = "https://cp-proxy5.herokuapp.com/";
  const olQueryURL = "https://openlibrary.org/works/";
  const URL = "https://openlibrary.org/works/OL28624126W/Technology_in_Mental_Health";
  const OLID = "OL40140814M";
  const bulletTrainURL = "https://cp-proxy5.herokuapp.com/https://openlibrary.org/works/" + "OL40140814M" + ".json";
  fetch(bulletTrainURL)
  .then((response) => response.json())
  .then((data) => {
    // more code here later
    console.log(data);

    let div  = document.querySelector(".read-more");
    // append everything that's on json file
   
      let info = document.createElement('p');
      info.innerText = JSON.stringify(data);
      div.appendChild(info);
   

});
}
getBooks();


