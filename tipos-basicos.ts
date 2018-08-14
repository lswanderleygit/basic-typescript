// boolean
let estaPago: boolean = true;

// number
let idade: number = 20;
let valor: number = 29.90;

// string
let empresa: string = 'AlgumaEmpresa';
// Templete String
let nome: string = 'João';
console.log(`Olá meu nome é ${nome} e tenho ${idade} anos.`);

// arrays
let notas: number[] = [8, 10, 9, 6, 9];

// tuple
let alunos: [string, number, string] = ['João', 10, 'Matemática '];
console.log(alunos[0]);
console.log(alunos[1]);

// Enum
enum Cor {Verde, Amarelo, Azul, Branco};
let corFundo: Cor = Cor.Verde;

// Any
let algumValor: any = 4;
algumValor = 'Agora é uma string';
algumValor = true;

// void
function alerta(): void{
    // ... alert('Operação não permitida');
}

// null e underfined
let u: undefined = undefined;
let n: null = null;

