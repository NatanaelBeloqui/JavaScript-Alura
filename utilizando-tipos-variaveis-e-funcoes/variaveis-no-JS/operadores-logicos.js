const notaFinal = 7;
const faltas = 3;
const advertencias = 0; // O zero tem o valor de falso

if (notaFinal < 7 || faltas > 4) { // OU
    console.log ('Reprovado, boas festas!')
} else {
    console.log ('Não foi reprovado por falta');
}

if (notaFinal < 7 && faltas > 4) { // E
    console.log ('Reprovado, boas festas!')
} else {
    console.log ('Não foi reprovado por falta');
}

if (faltas >= 2 && !advertencias) { // Quando coloca o ! antes da varável, ele inverte o valor dela
    console.log('Recebeu bônus');
} else {
    console.log('Não recebeu bônus');    
}