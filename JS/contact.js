let form=document.getElementById("my-form")
let formErr = document.getElementById('erros');
let erros = [];
form.addEventListener("submit", (evt)=>{
     let allErrors=document.querySelectorAll(".errMsg");
     allErrors.forEach(error=>{
        error.remove()
     });
    let {Name, LName,Email ,Comments} = form.elements;
    let tempName = Name.value.trim();
    if(tempName.length <2){
        let msg = "You name is wrong"
        erros.push(msg)
        evt.preventDefault();
    }
    let tempNameLname = LName.value.trim();

    if(tempNameLname.length <2){
        let msg = "You last name is wrong"
        erros.push(msg)
        evt.preventDefault();
    }
    
    if(!Email.value.includes("@")){
        let msg = "incorrect email"
        erros.push(msg)
        evt.preventDefault();
    }

    if(Comments.value.length < 2){
        let msg = "write a comment please"
        erros.push(msg)
        evt.preventDefault();
    }

if(erros.length >0 ){
erros.map((err)=>{
formErr.innerHTML += `
<div class="errMsg">
There is a problem with ${err}
</div>
`
})
erros=[];
}
else{
    Name.value="";
    LName.value="";
    Email.value="";
    Comments.value="";
    evt.preventDefault();
    console.log("You are good to go") ;
}

})