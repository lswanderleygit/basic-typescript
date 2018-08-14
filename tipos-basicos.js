// boolean
let estaPago = true;
// number
let idade = 20;
let valor = 29.90;
// string
let empresa = 'AlgumaEmpresa';
// Templete String
let nome = 'João';
console.log(`Olá meu nome é ${nome} e tenho ${idade} anos.`);
// arrays
let notas = [8, 10, 9, 6, 9];
// tuple
let alunos = ['João', 10, 'Matemática '];
console.log(alunos[0]);
console.log(alunos[1]);
// Enum
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Branco"] = 3] = "Branco";
})(Cor || (Cor = {}));
;
let corFundo = Cor.Verde;
// Any
let algumValor = 4;
algumValor = 'Agora é uma string';
algumValor = true;
// void
function alerta() {
    // ... alert('Operação não permitida');
}
// null e underfined
let u = undefined;
let n = null;
