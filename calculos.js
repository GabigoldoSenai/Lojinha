let menu;

debugger;
const btn_start = document.getElementById("btn_start");

btn_start.addEventListener("click", fn_start);

function fn_start() {
  menu = Number(
    prompt(
      "Que tipo de cálculo você quer fazer? \n 1) Cálculo de preço\n 2) Catálogo de preços base"
    )
  );

  switch (menu) {
    //>>> PRIMEIRO CASO: CÁLCULO DE PREÇO
    case 1:
      /*
            let continuar = confirm("Bem-vinda ao cálculo de preço!\nContinuar?")
            if(continuar == false){
                location.reload()
            }

            /* Materiais base (preços arredondados):
            Lã normal(40g): R$5.00 || Preço/g : R$0.13
            Espuma (1kg) : R$39.00 || Preço/g : R$0.04
            Feltro (1.4m²) : R$20.00 || Preço/cm²: 0.0142
            Olhos amigurumi : R$5.00 || Preço/uni : 0.5

            Tempo : R$3.00/h
            */

      let la = { quantidade: 0, peso: 0, preco_total: 0, tipo: 0 },
        espuma,
        feltro,
        olhos,
        preco = {
          lucro_bruto: 0,
          investimento: 0,
          lucro_liquido: 0,
          custo: 0,
          tempo: 0,
          total: 0,
        };

      //---- Valores para lã
      la.quantidade = Number(prompt("Quantos tipos de lã você utilizou?"));
      //

      while (la.quantidade > 3 || la.quantidade <= 0 || isNaN(la.quantidade)) {
        alert("ERRO - Caracteres inválidos");
        la.quantidade = Number(prompt("Quantos tipos de lã você utilizou?"));
      }

      //
      for (let n = 0; la.quantidade > n; n++) {
        la.tipo = prompt(
          "Qual(is) são os tipos de lã usadas?\n opções: fina, normal, grossa"
        );
        la.tipo = la.tipo.toUpperCase();

        if (la.tipo == "FINA" || la.tipo == "NORMAL" || la.tipo == "GROSSA") {
          switch (la.tipo) {
            case "FINA":
              la.preco = Number(
                prompt("Digite o peso total de lã (em g) usado: ")
              );
              la.preco = la.preco * 0.08;
              break;
            case "NORMAL":
              la.preco = Number(
                prompt("Digite o peso total de lã (em g) usado: ")
              );
              la.preco = la.preco * 0.13;
              break;
            case "GROSSA":
              la.preco = Number(
                prompt("Digite o peso total de lã (em g) usado: ")
              );
              la.preco = la.preco * 0.24;
              break;
          }

          while (la.preco <= 0 || isNaN(la.preco)) {
            alert("ERRO - Caracteres inválidos");
            la.preco = Number(
              prompt("Digite o peso total de lã (em g) usado: ")
            );
            if (la.tipo == "FINA") {
              la.preco = la.preco * 0.08;
            } else if (la.tipo == "NORMAL") {
              la.preco = la.preco * 0.13;
            } else {
              la.preco = la.preco * 0.24;
            }
          }
          la.preco_total = la.preco_total + la.preco;
        } else {
          alert("ERRO - Tipo inválido");
          n--;
        }
      }

      //---- VALORES DE ESPUMA
      espuma = prompt(
        `Digite o peso total de espuma (em g) usado:\nSe não usou, digite "n" `
      );

      if (espuma <= 0) {
        while (espuma <= 0) {
          alert("ERRO - Caracteres inválidos");
          espuma = prompt(
            `Digite o peso total de espuma (em g) usado:\nSe não usou, digite "n" `
          );
        }
      } else if (espuma > 0) {
      } else {
        while (espuma <= 0 || (espuma !== "n" && "N")) {
          alert("ERRO - Caracteres inválidos");
          espuma = prompt(
            `Digite o peso total de espuma (em g) usado:\nSe não usou, digite "n" `
          );
        }
      }
      if (espuma == "n" || espuma == "N") {
        alert("Você não usou espuma");
        espuma = 0;
      }
      espuma = espuma * 0.4;

      //---- VALORES DE FELTRO
      feltro = prompt(
        `Digite o tamanho total de feltro (em cm²) usado:\nSe não usou, digite "n" `
      );

      if (feltro <= 0) {
        while (feltro <= 0) {
          alert("ERRO - Caracteres inválidos");
          feltro = prompt(
            `Digite o tamanho total de feltro (em cm²) usado:\nSe não usou, digite "n" `
          );
        }
      } else if (feltro > 0) {
      } else {
        while (feltro <= 0 || (feltro !== "n" && "N")) {
          alert("ERRO - Caracteres inválidos");
          feltro = prompt(
            `Digite o tamanho total de feltro (em cm²) usado:\nSe não usou, digite "n" `
          );
        }
      }
      if (feltro == "n" || feltro == "N") {
        alert("Você não usou feltro");
        feltro = 0;
      }
      feltro = feltro * 0.0142;

      //---- VALORES DE OLHOS
      olhos = prompt(
        `Digite o total de olhos usado:\nSe não usou, digite "n" `
      );

      if (olhos <= 0) {
        while (olhos <= 0) {
          alert("ERRO - Caracteres inválidos");
          olhos = prompt(
            `Digite o total de olhos usado:\nSe não usou, digite "n" `
          );
        }
      } else if (olhos > 0) {
      } else {
        while (olhos <= 0 || (olhos !== "n" && "N")) {
          alert("ERRO - Caracteres inválidos");
          olhos = prompt(
            `Digite o total de olhos usado:\nSe não usou, digite "n" `
          );
        }
      }
      if (olhos == "n" || olhos == "N") {
        alert("Você não usou olhos");
        olhos = 0;
      }
      olhos = olhos * 0.5;

      //---- CÁLCULO DE PREÇO, CUSTO, ETC..
      preco.custo = la.preco_total + espuma + feltro + olhos;

      preco.tempo = Number(
        prompt("Insira o tempo que você levou até terminar (em h): ")
      );
      if (preco.tempo <= 0) {
        while (preco.tempo <= 0) {
          alert("ERRO - Valores inválidos");
          preco.tempo = Number(
            prompt("Insira o tempo que você levou até terminar (em h): ")
          );
        }
      }
      // PADRÃO: R$3,00/h (metade de um salario minimo)

      preco.tempo = preco.tempo * 6;

      preco.total = Math.ceil(preco.custo) + preco.tempo;
      preco.lucro_bruto = preco.total - preco.custo;
      preco.investimento = preco.lucro_bruto * 0.3;
      preco.lucro_liquido = preco.lucro_bruto - preco.investimento;

      const div = document.querySelector("#data");
      div.innerHTML = `Custo de produção: R$${preco.custo.toFixed(
        2
      )} <br> Custo de produção +35% : R$${(preco.custo * 1.35).toFixed(
        2
      )} <br> Sugestão de preço: R$${Math.ceil(preco.total).toFixed(
        2
      )}<br><br> ||Lucro bruto: R$${preco.lucro_bruto.toFixed(
        2
      )} | Para investir/guardar: R$${preco.investimento.toFixed(
        2
      )} | Lucro líquido: R$${preco.lucro_liquido.toFixed(2)}`;
      break;

    // >>>> NÃO É NENHUMA DAS OPÇÕES
    case 2:
      let menu_2;

      debugger;

      menu_2 = Number(
        prompt("Os modelos padrões disponíveis são:\n 1) Boneco [M]")
      );

      switch (menu_2) {
        case 1:
          const div = document.getElementById("data");
          div.innerHTML =
            "Preço base:<br>mínimo:R$24.00   Meio-termo= R$32.00    Máximo:R$39.00<th> <br>Preço base + 35% = R$10.98<br> Lucro líquido = Lucro líquido: R$11.81 || Para investir/guardar: R$5.06";
          break;
        default:
          alert("Opção não");
      }
  }
}
