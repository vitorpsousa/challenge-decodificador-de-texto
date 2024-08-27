let btnCrip = document.querySelector(".criptografar")
let btnDescrip = document.querySelector(".descriptografar")
let btnCopy = document.querySelector("#btn-copiar")
let textoAntes = document.querySelector("#textoEncriptar");
let textoDepois = document.querySelector("#textoEncriptado");
let codifica = {a:"ai", e:"enter", i:"imes", o:"ober", u:"ufat"};
let decodifica = {ai:"a", enter:"e", imes:"i", ober:"o", ufat:"u"};

escondeDepois();

btnCrip.addEventListener("click", () =>{
    mostraDepois();
    criptografar();
    limparElementos();
    
})

btnDescrip.addEventListener("click", () => {
    mostraDepois();
    descriptografar();
    limparElementos();
})

btnCopy.addEventListener("click", async function(){
    await navigator.clipboard.writeText(textoDepois.value);
    textoDepois.innerHTML = "";
    escondeBtnCopiar();
});


function criptografar() {
    let texto = textoAntes.value;

    let textoNovo = texto.replace(/a|e|i|o|u/g,function(ocorrencia){
        return codifica[ocorrencia];
    });

    textoDepois.innerHTML = textoNovo;
    mostraBtnCopiar();
}

function descriptografar() {
    let texto = textoAntes.value;

    let textoNovo = texto.replace(/ai|enter|imes|ober|ufat/g, function(ocorrencia){
        return decodifica[ocorrencia];
    })
    
    textoDepois.innerHTML = textoNovo;
    mostraBtnCopiar();
}

function escondeDepois() { 
    document.getElementById("local-saida-de-texto").style.display = "none";
}

function mostraDepois() {
    document.getElementById("local-saida-de-texto").style.display = "flex";
}

function limparElementos() {
    document.getElementById("antes").remove();
}

function mostraBtnCopiar() {
    document.getElementById("btn-copiar").style.visibility = "visible";
}

function escondeBtnCopiar() {
    document.getElementById("btn-copiar").style.visibility = "hidden";
}