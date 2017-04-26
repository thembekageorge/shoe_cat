document.getElementById('addBootStock').addEventListener("click", hideShowForm);
document.getElementById('addBoot').addEventListener("click",addBoot);

// The add Stock Part of the project
 function hideShowForm(){

   var getDiv = document.getElementById("adding");

    if (getDiv.style.display === 'none')
    {
    getDiv.style.display = 'block';
    }
    else {
    getDiv.style.display = 'none';
    }
 }

 function addBoot() {
   var bootName = document.getElementById('bootname').value;
   var bootColor = document.getElementById('bootcolor').value;
   var bootSize = document.getElementById('bootcolor').value;
alert( bootname);
 }
