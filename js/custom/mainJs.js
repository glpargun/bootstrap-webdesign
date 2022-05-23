// for navbar java
window.addEventListener("DOMContentLoaded",event=>{
	var navbarMobile=function(){
		const nCollapsible=document.body.querySelector("#mainNavbar");
		if(!nCollapsible){
			return;
		}if(window.scrollY === 0){
			nCollapsible.classList.remove("navbar-mobile");
		}else{
			nCollapsible.classList.add("navbar-mobile");
		}
	};
	navbarMobile();
	
	document.addEventListener("scroll", navbarMobile);
	const myNavbar=document.body.querySelector("#mainNavbar");
	if(myNavbar){
		new bootstrap.ScrollSpy(document.body,{
			target:"#mainNavbar",
			offset:74,
		});
	}
});

var BtnCanvas=document.querySelectorAll(".btn-close-canvas");
for (let i = 0; i < BtnCanvas.length; i++){
	BtnCanvas[i].addEventListener("click", function(){
		document.querySelector('[data-bs-dismiss="offcanvas"]').click();
	});
}

//edit-profile security check!

(function (){ 

	'use strict'
	var myName = document.querySelector('#name');
	var myEmail = document.querySelector('#email');
	var myMessage = document.querySelector('#message');
	var myThink = document.querySelector('#yourthink');
	var myThinkPost = document.querySelector('#btnThink');
	var myBtn = document.querySelector('#btnEdit');

	if(myMessage.value.length == 0 || myThink.value.length == 0 ){
		myBtn.disabled = true;
		myThinkPost.disabled = true;
	}

	const SpacePattern = /^\S*$/;
	const EmailPattern = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;

	myName.addEventListener("blur", controlName);
	myEmail.addEventListener("blur", controlEmail);
	myMessage.addEventListener("blur", controlMessage);
	myThink.addEventListener("blur", controlThink);

	function controlName(){
		var myError = document.querySelector("#ErrName");
		if(myName.value.length == 0){
			myName.classList.remove("is-valid");
			myName.classList.add("is-invalid");
			myError.textContent = "please write something as an username";
			return false;
		} else if(myName.value.length < 3){
			myName.classList.remove("is-valid");
			myName.classList.add("is-invalid");
			myError.textContent = "how can an username be less than 3 letters?";
			return false;
		} else if(myName.value.length > 35){
			myName.classList.remove("is-valid");
			myName.classList.add("is-invalid");
			myError.textContent = "wow, you wanna have an username more than 35 letters?";
			return false;
		} else{
			myName.classList.remove("is-invalid");
			myName.classList.add("is-valid");
			return true;
		}


	}

	function controlEmail(){
		var myError = document.querySelector("#ErrEmail");
		if(myEmail.value.length == 0){
			myEmail.classList.remove("is-valid");
			myEmail.classList.add("is-invalid");
			myError.textContent = "please write something as an e-mail";
			return false;
		} else if (!SpacePattern.test(myEmail.value)){
			myEmail.classList.remove("is-valid");
			myEmail.classList.add("is-invalid");
			myError.textContent = "OooOOoops! Space cannot be used for email."
			return false;
		} 	else if (!EmailPattern.test(myEmail.value)){
			myEmail.classList.remove("is-valid");
			myEmail.classList.add("is-invalid");
			myError.textContent = "Email format is not correct, check it please!"
			return false;
		} else{
			myEmail.classList.remove("is-invalid");
			myEmail.classList.add("is-valid");
			return true;
		}
		
	}

	function controlMessage(){
		var myError = document.querySelector("#ErrMessage");
		if(myMessage.value.length == 0){
			myMessage.classList.remove("is-valid");
			myMessage.classList.add("is-invalid");
			myError.textContent = "you have to give some informations about you, we want to know your style more!";
			return false;
		} else if(myMessage.value.length < 20){
			myMessage.classList.remove("is-valid");
			myMessage.classList.add("is-invalid");
			myError.textContent = "Even robots have something to say more than 10 letters!";
			return false;
		}else{
			myMessage.classList.remove("is-invalid");
			myMessage.classList.add("is-valid");
			return true;
		}
		
	}

	function controlThink(){
		var myError = document.querySelector("#ErrThink");
		if(myThink.value.length == 0){
			myThink.classList.remove("is-valid");
			myThink.classList.add("is-invalid");
			myError.textContent = "Don't you wanna share anything, because it seems nothing you wrote!";
			return false;
		}else{
			myThink.classList.remove("is-invalid");
			myThink.classList.add("is-valid");
			return true;
		}
		
	}


	myMessage.addEventListener("keyup", function(){
		document.getElementById("current-character").textContent = myMessage.value.length;
		if (myMessage.value.length >= 10) {
			myBtn.disabled = false;
		} else{
			myBtn.disabled = true;
		}
	
	});

	myThink.addEventListener("keyup", function(){
		document.getElementById("current-think-character").textContent = myThink.value.length;
		if (myThink.value.length == 0) {
			myThinkPost.disabled = true;
		} else{
			myThinkPost.disabled = false;
		}
	
	});
	var myForms = document.querySelector(".needs-validation");
	myForms.addEventListener("submit", function(e) {
		if (!myForms.checkValidity() || 
			!controlName() ||
			!controlEmail ||
			!controlMessage){
			e.preventDefault();
			e.stopPropagation();
		}
	}, false);

})();


//datepicker
