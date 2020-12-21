'use strict';

document.addEventListener("DOMContentLoaded", function(event){

    const btnSaludar = document.getElementById("btnSaludar");
    btnSaludar.addEventListener("click",function(){
        Android.showToastMessage("Hola desde JavaScript,Android");
    });

});