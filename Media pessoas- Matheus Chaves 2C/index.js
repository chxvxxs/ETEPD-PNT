
var prinome = prompt(`Insira o nome da primeira pessoa:`)
var prisobrenm = prompt(`Insira o sobrenome da primeira pessoa:`)
var pridade = parseInt(prompt(`Insira a idade da primeira pessoa:`))

var segnome = prompt(`Insira o nome da segunda pessoa:`)
var segsobrenm = prompt(`Insira o sobrenome da segunda pessoa:`)
var segidade = parseInt(prompt(`Insira a idade da segunda pessoa:`))


var ternome = prompt(`Insira o nome da terceira pessoa:`)
var tersobrenm = prompt(`Insira o sobrenome da terceira pessoa:`)
var teridade = parseInt(prompt(`Insira a idade da terceira pessoa:`))


if (!isNaN(pridade) && !isNaN(segidade) && !isNaN(teridade)) {
    
    var media = ((pridade + segidade + teridade) / 3).toFixed(2)
    alert(`Calculando a média...`)
    
    document.write(`<b><font size='16'>Nome: ${prinome} ${prisobrenm} - Idade: ${String(pridade)}`, '; ')
    document.write(`<b><font size='16'>Nome: ${segnome} ${segsobrenm} - Idade: ${String(segidade)}`, '; ')
    document.write(`<b><font size='16'>Nome: ${ternome} ${tersobrenm} - Idade: ${String(teridade)}<br><br>`)
    document.write(`<b><font size='16'>Média das idades: ${String(media)}`)
} else {
    alert(`Você inseriu um dado que não é um número nos campos de idade!`)
}

