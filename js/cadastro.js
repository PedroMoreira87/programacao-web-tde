//Define an array to hold users as they're added in the new registration page
var userArray = [];

$(document).ready(function(){ //serve para rodar a página toda para depois rodar a função
    
    fLocalEventosClick();

});

function fLocalEventosClick(){

	//On first load, skip this step (null check)
	//But when returning to the main page after adding users, get all the added users
	//out of the array passed between the pages and into the working userArray
	if(JSON.parse(sessionStorage.getItem('passingArray')) != null){
		for(i=0;i<JSON.parse(sessionStorage.getItem('passingArray')).length;i++){
		 	userArray.push(JSON.parse(sessionStorage.getItem('passingArray'))[i]);
		}
	}
	//log the list of users for convenience and troubleshooting
	console.log(userArray);

	$("#enter").click(function(){
		verifyNew();
	});
	// document.getElementById('enter').onclick = function(){
	// 	verifyNew();
	// };

}

//Verify new user function
function verifyNew(){

	var un = $("#unnew").val();
	var email = $("#emailnew").val();
	// var un = document.getElementById('unnew').value;
	// var email = document.getElementById('emailnew').value;

	//once users have been added to the user array,
	//check the new usernames against the known
	//if there's a match kick them back
	//if you get to the end of the array of known users
	//i will have incremented all the way to the array's length
	//this tells you there was no match and calls verifySecure
	//to ensure their password is long enough

	if(userArray.length>0){
		for(i=0; i<userArray.length; i++){
			if(un == userArray[i].un){
				alert("Usuário já cadastrado, por favor, crie um usuário diferente");
				$("#unnew").val();
				// document.getElementById('unnew').value = "";
				break;
			}else if(email == userArray[i].email){
				alert("Email já cadastrado, por favor, crie um email diferente");
				$("#emailnew").val();
				$("#emailnew1").val();
				// document.getElementById('emailnew').value = "";
				// document.getElementById('emailnew1').value = "";
				break;
			}
		}
		if(i == userArray.length){
			verifySecure();
		}
	}else{
		verifySecure();
	}
}

function verifySecure(){

	var pw = $("#pwnew").val();
	var pw1 = $("#pwnew1").val();
	var email = $("#emailnew").val();
	var email1 = $("#emailnew1").val();
	// var pw = $document.getElementById('pwnew').value;
	// var pw1 = document.getElementById('pwnew1').value;
	// var email = document.getElementById('emailnew').value;
	// var email1 = document.getElementById('emailnew1').value;

	//check that the password entered is 8 characters or more
	if(pw.length>=8){
		if (pw == pw1){
			if (email.includes("@")) {
				if (email == email1) {
					addUser();
				}else{
					alert("Por favor, digite o mesmo email");
					$("#emailnew").val("");
					$("#emailnew1").val("");
					// document.getElementById('emailnew').value = "";
 					// document.getElementById('emailnew1').value = "";
				}
			}else{
				alert("Por favor, digite o email corretamente");
				$("#emailnew").val("");
				$("#emailnew1").val("");
				// document.getElementById('emailnew').value = "";
				// document.getElementById('emailnew1').value = "";
			}
		}else{
			alert("Por favor, digite a mesma senha");
			$("#pwnew").val("");
			$("#pwnew1").val("");
			// document.getElementById('pwnew').value = "";
			// document.getElementById('pwnew1').value = "";
		}
	}else{
		alert("Por favor, crie uma senha com 8 caracteres ou mais");
		$("#pwnew").val("");
		$("#pwnew1").val("");
		// document.getElementById('pwnew').value = "";
		// document.getElementById('pwnew1').value = "";
	}
}

function addUser(){

	var newUser = {
		name: $("#namenew").val(),
		nasc: $("#nascnew").val(),
		un: $("#unnew").val(),
		pw: $("#pwnew").val(),
		pw1: $("#pwnew1").val(),
		email: $("#emailnew").val(),
		email1: $("#emailnew1").val(),
		// name: document.getElementById('namenew').value,
		// nasc: document.getElementById('nascnew').value,
		// un: document.getElementById('unnew').value,
		// pw: document.getElementById('pwnew').value,
		// pw1: document.getElementById('pwnew1').value,
		// email: document.getElementById('emailnew').value,
		// email1: document.getElementById('emailnew1').value,
	};

	//add the user to the array, put the array into the shared array, clear the inputs
	userArray.push(newUser);
	sessionStorage.setItem('passingArray', JSON.stringify(userArray));
	$("#namenew").val("");
	$("#nascnew").val("");
	$("#unnew").val("");
	$("#pwnew").val("");
	$("#pwnew1").val("");
	$("#emailnew").val("");
	$("#emailnew1").val("");
	// document.getElementById('namenew').value = "";
	// document.getElementById('nascnew').value = "";
	// document.getElementById('unnew').value = "";
	// document.getElementById('pwnew').value = "";
	// document.getElementById('pwnew1').value = "";
	// document.getElementById('emailnew').value = "";
	// document.getElementById('emailnew1').value = "";

	alert("Seu cadastro foi efetivado com sucesso!");
	pagina();
}

function pagina(){
	window.location.href="login.html";
}
