var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/** CALCULO DE UMA ESFERA
 * Crie um programa que CALCULE e mostre o VOLUME de uma ESFERA a partir de seu RAIO(R)
 * A formula para calcular o volume é:
 * (4/3) * PI(3.14159) * R^3 (elevado a três)
 */

function volumeSphere(Radius){
    const R = parseFloat(Radius);
    const PI = Math.PI.toFixed(5);
    const SPHERE = (4.0/3) * PI * (R**3);

    return SPHERE.toFixed(3);
}

console.log('VOLUME = '+ volumeSphere(lines));