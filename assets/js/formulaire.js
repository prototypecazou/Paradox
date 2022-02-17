var nom = document.querySelector("#nom")
var mail = document.querySelector("#mail")
var telephone = document.querySelector("#telephone")
var message = document.querySelector("#message")
var buttonFormulaire = document.querySelector("#buttonFormulaire")
var success = document.querySelector(".success")

buttonFormulaire.onclick = function(){

    if(nom.value !== "" && mail.value !== "" && telephone.value !== "" && message.value !== "" ){

        let button = $(this);

        if(!button.hasClass('animate')) {
            button.addClass('animate');
           setTimeout(() => {
                button.removeClass('animate');
            }, 7000);
        }

        fetch("./formulaire.php?nom="+nom.value+"&telephone="+telephone.value+"&mail="+mail.value+"&message="+message.value).then(function(response){
            response.text().then(function(reponse){
                if(reponse == "reussis"){
                    success.innerHTML = "Email reçu  <i class='text-success'>&#8730;</i>"
                }else{
                    success.innerHTML = "Email non reçu  <i class='text-danger'>&#935</i>"
                    }
                                                    })
                })
            
    }else{
        console.log("element vide")
    }
}
