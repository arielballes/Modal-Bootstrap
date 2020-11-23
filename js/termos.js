$('document').ready(function(){

    var termos = localStorage.getItem('termos');

    if (termos == 'true'){
        console.log("Termos de uso aceitos");
    }
    
    if (termos == 'false' || termos == null){
        $('#myModal').modal('show', true);
    }

})

function aceitar(){
    localStorage.setItem('termos', true);
}

function goBack() {
	window.history.back();
}