//Define an array to hold users as they're added in the new registration page
if (!(localStorage.hasOwnProperty("usuarios"))){
	localStorage.setItem("usuarios", "[]")
}

var userArray = JSON.parse(localStorage["usuarios"])

$(document).ready(function(){ //serve para rodar a página toda para depois rodar a função

	$("#enter").click(function() {
		verifyNew();
	});
});

//Verify new user function
function verifyNew(){

	var un = $("#unnew").val();
	var email = $("#emailnew").val();

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
				}
			}else{
				alert("Por favor, digite o email corretamente");
				$("#emailnew").val("");
				$("#emailnew1").val("");
			}
		}else{
			alert("Por favor, digite a mesma senha");
			$("#pwnew").val("");
			$("#pwnew1").val("");
		}
	}else{
		alert("Por favor, crie uma senha com 8 caracteres ou mais");
		$("#pwnew").val("");
		$("#pwnew1").val("");
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
	};

	userArray.push(newUser)
	var userArrayJason = JSON.stringify(userArray)
	localStorage.setItem("usuarios", userArrayJason);

	//add the user to the array, put the array into the shared array, clear the inputs
	$("#namenew").val("");
	$("#nascnew").val("");
	$("#unnew").val("");
	$("#pwnew").val("");
	$("#pwnew1").val("");
	$("#emailnew").val("");
	$("#emailnew1").val("");

	alert("Seu cadastro foi efetivado com sucesso!");
	pagina();
}

function pagina(){
	window.location.href="login.html";
}
