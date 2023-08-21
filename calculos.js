let menu

menu = Number(prompt("Que tipo de cálculo você quer fazer? \n 1) Cálculo de preço"))

switch(menu){
    case 1:
        /* Materiais base (preços arredondados):
        Lã normal(40g): R$5,00 || Preço/g : R$0,13
        Espuma (1kg) : R$39,00 || Preço/g : R$0,04
        Feltro (1,4m²) : R$20,00 || Preço/cm²: 0,0142
        Olhos amigurumi : R$5,00 || Preço/uni : 0,5

        Tempo : R$3,00/h
        */
        
        let la , valor_la = 0 , i , espuma  , feltro , olhos , custo , tempo , preco , lucro_bruto , investimento , lucro_liquido 
    debugger
        i = Number(prompt("Quantos tipos de lã você utilizou?"))

        if(isNaN(i)){
            for(; (i > 3 || i < 1 ) || isNaN(i);){
                    alert("ERRO - Caracteres inválidos")
                    i = Number(prompt("Quantos tipos de lã você utilizou?"))
            }
        }
        debugger
        for(let n = 0; i > n ; n ++){
            la = prompt("Qual(is) são os tipos de lã usadas?\n opções: fina, normal, grossa")
            la = la.toUpperCase()

            if(la == "FINA" || la == "NORMAL" || la == "GROSSA"){
                switch(la){
                    case "FINA":
                        la = Number(prompt("Digite o peso total de lã (em g) usado: "))
                        la = la * 0.08
                    break;
                    case "NORMAL":
                        la = Number(prompt("Digite o peso total de lã (em g) usado: "))
                        la = la * 0.13
                    break;
                    case "GROSSA":
                        la = Number(prompt("Digite o peso total de lã (em g) usado: "))
                        la = la * 0.24
                    break;
                    }
                
                valor_la = valor_la + la

            }else{
                alert("ERRO - Tipo inválido")
                n --
            }
        }
        
        espuma = Number(prompt("Digite o peso total de espuma (em g) usado: "))
        for(; isNaN(espuma) || espuma < 0;)
        if(isNaN){
            alert("ERRO - Caracteres inválidos")
        }
        espuma = espuma * 0.4

        feltro = Number(prompt("Digite o tamanho total de feltro (em cm²) usado: "))
        feltro = feltro * 0.142

        olhos = Number(prompt("Digite o total de olhos de amigurumi usados: "))
        olhos = olhos * 0.5

        debugger 

        custo = la + espuma + feltro + olhos

        tempo = Number(prompt("Insira o tempo que você levou até terminar (em h): "))
        // PADRÃO: R$3,00/h (metade do salario minimo)
        tempo = tempo * 3

        preco = Math.ceil(custo) + tempo
        lucro_bruto = preco - custo
        investimento = lucro_bruto * 0.3
        lucro_liquido = lucro_bruto - investimento
        

        document.write(`Custo de produção: R$${custo.toFixed(2)} <br> Custo de produção +35% : R$${(custo * 1.35).toFixed(2)} <br> Sugestão de preço: R$${Math.ceil(preco).toFixed(2)}<br><br> ||Lucro bruto: R$${lucro_bruto.toFixed(2)} | Para investir/guardar: R$${investimento.toFixed(2)} | Lucro líquido: R$${lucro_liquido.toFixed(2)}`)
        break;
    
        alert("ERROR")
        location.reload()
}






















