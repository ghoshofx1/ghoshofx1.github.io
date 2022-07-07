let myImage = document.querySelector('img')
let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

myImage.onclick = function() {
    let imgsrc = myImage.getAttribute('src')
    if (imgsrc  == 'images/firefox-icon.png') {myImage.setAttribute('src', 'images/firefox2.png')}
    else {myImage.setAttribute('src', 'images/firefox-icon.png')}
} 


    if (!localStorage.getItem('name')) setUserName()
    else {
        let storedName = localStorage.getItem('name')
        myHeading.textContent = 'Welcome to Mozilla ' + storedName
    }


    function setUserName() {
        let myName = prompt('Please enter your name.');
        if(!myName) {
          setUserName();
        } else {
          localStorage.setItem('name', myName);
          myHeading.textContent = 'Mozilla is cool, ' + myName;
        }
      }
      

myButton.onclick = () => {setUserName()}

