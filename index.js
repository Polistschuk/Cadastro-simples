String: nome = "zé";
Int: data = 02-12-2021;
Int: idade = 125;

String: participantes = [];

if (data > 03-12-2021 || idade < 18 || participantes.length == 100){
    console.log("cadastro não realizado");
}else{
    console.log("cadastro realizado");
}

if(participantes.length < 100 ){
    participantes.push(nome);
    console.log(participantes);
}else{
    console.log("");
}
