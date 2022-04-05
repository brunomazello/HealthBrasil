const form = document.querySelector('.form')
const resultado = document.querySelector('.resultado')
let pesoCalc;
let alturaCalc;

function calcularImc(e) {
    e.preventDefault();

    const quilos = form.querySelector('.input-peso')
    const altura = form.querySelector('.input-altura')

    pesoCalc = quilos.value;
    alturaCalc = altura.value

    console.log(pesoCalc, alturaCalc)

    let calculoIMC = Math.trunc(pesoCalc / (alturaCalc * alturaCalc))
    console.log(calculoIMC)

    if (calculoIMC >= 18.5 && calculoIMC <= 24.9) {
        form.classList.add('d-none')
        resultado.innerHTML += `<p class="lead mt-2 text-center fs-1">Seu IMC é: ${calculoIMC}</p><p class="lead text-center fw-bold">Peso normal</p>`
        
    } else if (calculoIMC >= 25 && calculoIMC <= 29.9) {
        form.classList.add('d-none')
        resultado.innerHTML +=` <p class="text-center mb-0 fs-4 fw-bold">Calcule seu IMC</p>`
        resultado.innerHTML += `<p class="lead mt-2 text-center">Seu IMC é: ${calculoIMC}</p><p class="lead text-center fw-bold">Sobrepeso</p>`
    } else if (calculoIMC >= 30 && calculoIMC <= 34.9) {
        form.classList.add('d-none')
        resultado.innerHTML +=` <p class="text-center mb-0 fs-4 fw-bold">Calcule seu IMC</p>`
        resultado.innerHTML += `<p class="lead mt-2 text-center">Seu IMC é: ${calculoIMC}</p><p class="lead text-center fw-bold">Obesidade grau 1</p>`
    } else if (calculoIMC >= 35 && calculoIMC <= 39.9) {
        form.classList.add('d-none')
        resultado.innerHTML +=` <p class="text-center mb-0 fs-4 fw-bold">Calcule seu IMC</p>`
        resultado.innerHTML += `<p class="lead mt-2 text-center">Seu IMC é: ${calculoIMC}</p><p class="lead text-center fw-bold">Obesidade grau 2</p>`
    } else if (calculoIMC >= 40) {
        form.classList.add('d-none')
        resultado.innerHTML +=` <p class="text-center mb-0 fs-4 fw-bold">Calcule seu IMC</p>`
        resultado.innerHTML += `<p class="lead mt-2 text-center">Seu IMC é: ${calculoIMC}</p><p class="lead text-center fw-bold">Obesidade grau 3</p>`
    } else if (calculoIMC != NaN){ 
        form.classList.add('d-none')
        resultado.innerHTML +=` <p class="text-center mb-0 fs-4 fw-bold">Calcule seu IMC</p>`
        resultado.innerHTML += `<p class="mt-3 text-center">Dados inválidos</p>`;
    } else {

    }

}

form.addEventListener('submit', calcularImc)