//Define an array to hold users as they're added in the new registration page
var userArray = JSON.parse(localStorage["usuarios"])

$(document).ready(function(){ //serve para rodar a página toda para depois rodar a função

	$("#enter").click(function() {
		authenticate();
	});

	$("#cadastro").click(function() {
		pagina("cadastro");
	});
});

//Autheticate user function
function authenticate(){

	var un = $("#un").val();
	var pw = $("#pw").val();

	//once users have been added to the user array,
	//check the stored usernames and passwords against the known
	//if there's a match let them in
	//if you get to the end of the array of known users
	//i will have incremented all the way to the array's length (less 1)
	//this tells you there was no match and calls troubleshoot
	//troubleshoot helps determine which fields to clear
	//  Valid un and   valid pw -> clear both fields
	//  Valid un and invalid pw -> clear pw only
	//Invalid un and   valid pw -> clear both fields
	//Invalid un and invalid pw -> clear both fields
	if(userArray.length>0){
		for(i=0; i<userArray.length; i++){
			if((un == userArray[i].un) && (pw == userArray[i].pw)){
				alert("Você está dentro!");
				$("#un").val("");
				$("#pw").val("");
				localStorage.setItem("usuario-logado", JSON.stringify(userArray[i]))
				pagina("index");
				break;
			}
			if(i==userArray.length-1 || userArray.length==0){
				console.log('working')
				troubleshoot(un, pw);
			}
		}
	}else{//enter here on first load when there are no users in the array yet
		alert("Nenhuma combinação encontrada. Clique no botão \"Cadastrar\" para registrar um novo usuário");
		$("#un").val("");
		$("#pw").val("");
	}
}

//If there is a match in the known usernames clear only the pw field so user
//doesn't have to retype un
//If there is no match in the known usernames clear both un and pw fields
function troubleshoot(un, pw){
	for(j=0; j<userArray.length; j++){
		if(un == userArray[j].un){
			alert("Senha incorreta");
			document.getElementById('pw').value = "";
			break;
		}
		if(j==userArray.length-1 || userArray.length==0){
			alert("Nenhuma combinação encontrada. Clique no botão \"Cadastrar\" para registrar um novo usuário");
			$("#un").val("");
			$("#pw").val("");
		}
	}
}

function pagina(pg){
	if (pg == "index"){
		window.location.href = "index.html";
	}else if (pg == "cadastro"){
		window.location.href = "cadastro.html";
	}
}
