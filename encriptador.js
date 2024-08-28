

const doc = document;
const textarea = doc.querySelector(".form__input");
const imagenMuneco = doc.querySelector(".result__img");
const loaderCubo = doc.querySelector(".loader");
const resultTitulo = doc.querySelector(".result__titulo");
const resultadoText = doc.querySelector(".result__texto");
const botonEncriptar = doc.querySelector(".form__btn");
const botonDesencriptar = doc.querySelectorAll(".form__btn");
const botonCopiar = doc.querySelector(".form__btn__third");



const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

//Funcion Encriptar
function encriptartexto(texto){
    let textoEncriptado = "";
    for(let i=0;i<texto.length;i++){
        let letra = texto[i];
        let encriptada = letra;
        for(let j = 0;j<llaves.length;j++){
            if(letra ==llaves[j][0]){
                encriptada = llaves[j][1]; //reemplaza la letra por lla letra encriptada
                break; //termina el bucle
            }
        }
        textoEncriptado += encriptada;
    }
    return textoEncriptado;

}

//Funcion Desencriptar
function desencriptartexto(texto){
    let textoDesencriptado = texto;
    for(let i=0;i<llaves.length;i++){
        let regex = new RegExp(llaves[i][1],'g');
        textoDesencriptado = textoDesencriptado.replace(regex, llaves[i][0]);
    }
    return textoDesencriptado;
}
//Ocutar elementos dinamicamente
textarea.addEventListener("input", (e) =>{
    imagenMuneco.style.display = "none";
    loaderCubo.classList.remove("hidden");
    resultTitulo.textContent = "Capturando mensaje";
    resultadoText.textContent = "";

});
//Funcion del boton encriptar
botonEncriptar.addEventListener("click", (e) =>{
    e.preventDefault(); 
    let texto = textarea.value.toLowerCase();
    let textoEncriptado = encriptartexto(texto);
    resultadoText.textContent = textoEncriptado;
    botonCopiar.classList.remove("hidden");
    resultTitulo.textContent = "El resultdo es: ";
});


botonDesencriptar[1].addEventListener("click", (e) =>{
    e.preventDefault(); 
    let texto = textarea.value.toLowerCase();
    let textoDesencriptado = desencriptartexto(texto);
    resultadoText.textContent = textoDesencriptado;
    botonCopiar.classList.remove("hidden");

});

botonCopiar.addEventListener("click", (e) =>{
    let textoCopiado = resultadoText.textContent;
    navigator.clipboard.writeText(textoCopiado).then(() =>{
        console.log(`Se copio el texto: ${textoCopiado}`)
    })

});