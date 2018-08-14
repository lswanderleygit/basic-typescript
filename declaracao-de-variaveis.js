//var, let e const
/*
    * var é valida dentro de todo o escopo
    * let é valido apenas dentro de onde ela for declarada, ou seja se ela for declarada dentro do if so vale dentro do mesmo e para o codigo funcionar temos que declarar ela fora.
    * é uma constante hihi
*/
function iniciarTime(iniciaJogo) {
    const nome = 'Lucas e amigos';
    let cidade;
    if (iniciaJogo) {
        cidade = 'em algum lugar';
    }
    console.log(`${nome} vão jogar ${cidade}`);
}
iniciarTime(true);
