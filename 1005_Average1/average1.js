var input = [5.0, 7.1];
var lines = input.split('\n');

function calcularMedia () {
    const a = Number(input[0]);
    const b = Number(input[1]);
    
    const MEDIA = parseFloat(a + b);
    return console.log('MEDIA = ' + parseFloat(MEDIA));
}

calcularMedia();