document.getElementById('insertButton').addEventListener('click', function(){
    const xhr = new XMLHttpRequest();
    //getting the values of each textBox
    var a = document.getElementById('Author').value
    var t = document.getElementById('Title').value
    var g = document.getElementById("dropList");
	var gender = g.options[g.selectedIndex].value;
    // document.getElementById('dropList').onchange = function(){
    //     if (this.value == 'Science fiction') {
    //         var optionID=document.getElementById('1');
    //         var g = optionID.value;

    //      }
    //     if (this.value == 'Satire') {
    //         var optionID=document.getElementById('2');
    //         var g = optionID.value;

    //      }
    //      if (this.value == 'Drama') {
    //         var optionID=document.getElementById('3');
    //         var g = optionID.value;

    //      }
    //      if (this.value == 'Action and Adventure') {
    //         var optionID=document.getElementById('4');
    //         var g = optionID.value;

    //      }
    //      if (this.value == 'Romance') {
    //         var optionID=document.getElementById('5');
    //         var g = optionID.value;

    //      }
    //      if (this.value == 'Mystery') {
    //         var optionID=document.getElementById('6');
    //         var g = optionID.value;

    //      }
    //      if (this.value == 'Horror') {
    //         var optionID=document.getElementById('7');
    //         var g = optionID.value;

    //      }
         
    // }
    var p = document.getElementById('Price').value
    xhr.open('POST','http://localhost:8081/books/',true); // true = asynchronous
    xhr.send('{"Author":"' + a + '","Title":"' + t + '","Gender":"' + gender + '","Price":"' + p + '"}');	
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200){
        	alert("information sent successfully")
            alert(xhr.responseText);
        }
    };
}); 




document.getElementById('searchButton').addEventListener('click', function(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','http://localhost:8081/books/:',true); // true = asynchronous
    xhr.send();
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200){
            alert(xhr.responseText);
            newObject = JSON.parse(xhr.responseText);
            //alert(newObject.); // NEED SPECIFIC STRING THERE LIKE lastName
        }
    };
}); 
