document.getElementById('addBootStock').addEventListener("click", hideshow);
// document.getElementById('showAvailableBoots').addEventListener("click", practise);

// function practise(){
//   alert("I work");
// }

// The add Stock Part of the project
 function hideshow(){
   var getDiv = document.getElementById("adding");
    if (getDiv.style.display === 'none')
    {
    getDiv.style.display = 'block';
    }
    else {
    getDiv.style.display = 'none';
    }
 }
