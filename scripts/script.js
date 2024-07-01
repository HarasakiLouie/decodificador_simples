

function criptografa(){
    let textoCriptografado = '';
    let textoc = document.querySelector(".entrada__texto").value.toLowerCase();
    for (let letra of textoc){
        if (letra=='a'){textoCriptografado +='ai';}
        else if (letra == 'e') {textoCriptografado +='enter'}
        else if(letra=='o'){textoCriptografado +='ober'}
        else if(letra=='i'){textoCriptografado +='imes'}
        else if(letra=='u'){textoCriptografado +='ufat'}
        else{textoCriptografado +=letra;}}
    document.querySelector(".entrada__texto").value='';
    document.querySelector(".saida__antes").setAttribute("style", "display:none;");
    document.querySelector(".saida__depois").setAttribute("style","display:flex")
    document.querySelector(".saida__texto").value=textoCriptografado}

function descriptografa(){
    let textoc = document.querySelector(".entrada__texto").value.toLowerCase();
    textoc = textoc.replace(/ai/g, "a");
    textoc = textoc.replace(/enter/g, "e");
    textoc = textoc.replace(/ober/g, "o");
    textoc = textoc.replace(/imes/g, "i");
    textoc = textoc.replace(/ufat/g, "u");
    document.querySelector(".entrada__texto").value='';
    document.querySelector(".saida__antes").setAttribute("style", "display:none;");
    document.querySelector(".saida__depois").setAttribute("style","display:flex")
    document.querySelector(".saida__texto").value=textoc}


function copiaTexto() {
    var textoCopiado = document.querySelector(".saida__texto");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textoCopiado.value);
    }