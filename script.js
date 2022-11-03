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
      info.innerText = 'Book: ' +  data.full_title + ' ISBN: ' + data.isbn_13;
      let second = document.createElement('p');
      div.appendChild(info);
   

});
}
getBooks();
const apiKey = 'bnIpw-6MSLihS0noxoMJNu0G4ojJsj7Mak387aBug4L6yDgi';
const keywords = 'Technology';
const url = 'https://api.currentsapi.services/v1/search?apiKey=' + apiKey + '&keywords=' + keywords;

const request = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const news = data.news;

  for (var i = 0; i < 10; i++){
  
    const title = document.createElement('h3');
    title.textContent = news[i].title;
    const description = document.createElement('p');
  description.textContent = news[i].description;
  const article = document.createElement('article');
  article.appendChild(title);
  article.appendChild(description);
  const newsDiv = document.getElementById('news');
  newsDiv.append(article);
  }
}
request();

