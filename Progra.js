var hola = prompt("En que planeta quieres saber tu peso\n1= Marte y 2 = Jupiter");
var lalala = prompt("Cuanto pesas we?")
var peso = parseFloat(lalala);
var g_tierra = 9.8;
var g_marte = 3.7;
var g_jupiter = 24.8;
var planeta;
var peso_final;
if (hola == 1) {
    peso_final = peso * g_marte / g_tierra;
    planeta = "Marte"
}
else if (hola == 2){
    peso_final = peso * g_jupiter / g_tierra;
    planeta = "Jupiter"
}
else{
    peso_final = 1000000;
    planeta = "Namekusei"
}
peso_final = parseInt(peso_final);
document.write("Tu peso en " + planeta + " es <strong>" + peso_final + " Kg</strong>");