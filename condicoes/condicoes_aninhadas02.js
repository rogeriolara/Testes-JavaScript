var agora = new Date()
var horas = agora.getHours()
console.log (`São ${horas}h `)
if (horas >= 5 && horas <12) {
    console.log ('Bom dia!')
}
else if (horas >=12 && horas <18){
    console.log ('Boa tarde!')
}
else if (horas >=18 && horas <=24) {
    console.log ('Boa Noite!')
}
else if (horas >=1 && horas <=4) {
    console.log ('Boa madrugada!')
}
else {
    console.log ('Esse horário não existe!')
}
