const darkButton = document.getElementById("darkButton");

darkButton.addEventListener("click", function(){
    const darkMode = document.body.style.backgroundColor= "black";
    return document.body.appendChild(darkMode);

})

const lightButton = document.getElementById("lightButton");

lightButton.addEventListener("click", function(){
    const lightMode = document.body.style.backgroundColor= "yellow";
    return document.body.appendChild(lightMode);
})