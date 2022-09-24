document.querySelector("button.login-btn").addEventListener("click", function(){
  if(document.querySelector("#floatingInput").value != "admin"){
    alert("Log in failed!");
  }else if(document.querySelector("#floatingPassword").value != "p@ssword"){
    alert("Log in failed!!")
  }else{
    window.location.href = "home.html";
  }
  
});