function calcularMedia(){
    
    var total = 0;
    var qtd = arguments.length;
    var x = 0;

    while(typeof arguments[x]=== 'number'){
        total += arguments[x];
        x++
    }
    var media = total/qtd
    return media.toFixed(2);
}
function sortear(n){
    var _n = n || 1;
    var nSorteado = Math.random();
    nSorteado = nSorteado * _n;
    nSorteado = Math.floor(nSorteado);
    return nSorteado;
};