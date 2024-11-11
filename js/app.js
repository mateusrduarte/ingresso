function comprar() {
  let tipoIngresso = document.getElementById("tipo-ingresso").value;
  let quantidadeCompra = parseInt(document.getElementById("qtd").value);
  let quantidadePista = parseInt(
    document.getElementById("qtd-pista").textContent
  );
  let quantidadeSuperior = parseInt(
    document.getElementById("qtd-superior").textContent
  );
  let quantidadeInferior = parseInt(
    document.getElementById("qtd-inferior").textContent
  );

  if (tipoIngresso == "pista") {
    if (quantidadePista > 0 && quantidadePista - quantidadeCompra >= 0) {
      quantidadePista -= quantidadeCompra;
      document.getElementById("qtd-pista").textContent = quantidadePista;
      console.log(quantidadePista);
    } else {
      alert("Sem ingresso!");
    }
  } else if (tipoIngresso == "superior") {
    if (quantidadeSuperior > 0 && quantidadeSuperior - quantidadeCompra >= 0) {
      quantidadeSuperior -= quantidadeCompra;
      document.getElementById("qtd-superior").textContent = quantidadeSuperior;
      console.log(quantidadeSuperior);
    } else {
      alert("Sem ingresso!");
    }
  } else {
    if (quantidadeInferior > 0 && quantidadeInferior - quantidadeCompra >= 0) {
      quantidadeInferior -= quantidadeCompra;
      document.getElementById("qtd-inferior").textContent = quantidadeInferior;
      console.log(quantidadeInferior);
    } else {
      alert("Sem ingresso!");
    }
  }

  document.getElementById("qtd").value = "";
}
