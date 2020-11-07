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
		};
	};
	//log the list of users for convenience and troubleshooting
	console.log(userArray);

	//When the enter button is clicked, call the function to grab the id and pw entered
	//and check user authentication
	$("#enter").click(function (){
		authenticate();
		// pagina("index");
	});
	// document.getElementById('enter').onclick = function (){
	// 	authenticate();
	// 	pagina("index");
	// };

	$("#cadastro").click(function (){
		pagina("cadastro");
	});
	// document.getElementById("cadastro").onclick = function (){
	// 	pagina("cadastro");
	// };
}

//Autheticate user function
function authenticate(){

	var un = $("#un").val();
	var pw = $("#pw").val();
	// var un = document.getElementById('un').value;
	// var pw = document.getElementById('pw').value;

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
				// document.getElementById('un').value = "";
				// document.getElementById('pw').value = "";
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
		// document.getElementById('un').value = "";
		// document.getElementById('pw').value = "";
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
			// document.getElementById('un').value = "";
			// document.getElementById('pw').value = "";
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
