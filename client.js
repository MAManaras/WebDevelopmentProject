document.getElementById('insertButton').addEventListener('click', function(){
    const xhr = new XMLHttpRequest();
    //getting the values of each textBox
    document.getElementById('Author')
    document.getElementById('Title')
    document.getElementById('dropList').onchange = function(){
        if (this.value == 'Science fiction') {
            var optionID=document.getElementById('1');
            alert(optionID.value);

         }
        if (this.value == 'Satire') {
            var optionID=document.getElementById('2');
            alert(optionID.value);

         }
         if (this.value == 'Drama') {
            var optionID=document.getElementById('3');
            alert(optionID.value);

         }
         if (this.value == 'Action and Adventure') {
            var optionID=document.getElementById('4');
            alert(optionID.value);

         }
         if (this.value == 'Romance') {
            var optionID=document.getElementById('5');
            alert(optionID.value);

         }
         if (this.value == 'Mystery') {
            var optionID=document.getElementById('6');
            alert(optionID.value);

         }
         if (this.value == 'Horror') {
            var optionID=document.getElementById('7');
            alert(optionID.value);

         }
         
    }
    document.getElementById('Price')
    xhr.open('POST','http://localhost:8081/',true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200){
            alert(xhr.responseText);
        }
    };
}); 




document.getElementById('searchButton').addEventListener('click', function(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','http://localhost:8081/',true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200){
            alert(xhr.responseText);
            newObject = JSON.parse(xhr.responseText);
            alert(newObject.); // NEED SPECIFIC STRING THERE LIKE lastName
        }
    };
}); 
