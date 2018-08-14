let quantidade = 20;
// quantidade = 'qualquer': - não compila!
let x = [1, 2, 3, null];
// x[0] = true; - Também não compila
// contextual typing
window.onmousedown = function (evento) {
    console.log(evento.button); // OK
    // console.log(evento.buton) não compila porque não tem o evento buton no mouseEvent
};
