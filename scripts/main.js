function selecionar(oper) {
// atribui os dados do primerio form a novas variaveris 
   var n1 = document.dadosmerc.quant.value;
   var n2 = document.dadosmerc.preco.value;
   var n3 = document.dadosmerc.cod.value;
   var n4 = document.dadosmerc.tipo.value;
   var n5 = document.dadosmerc.nome.value;
   var indice = document.dadosmerc.oper.selectedIndex;
   var oper1 = document.dadosmerc.oper.options[indice].text;

// operacao envolvendo quantidade vezes o preço da mercadoria
   var jun = n1*n2;

// atribui os dados do primerio form ao form debaixo
   document.dadosmerc1.jun.value = jun;
   document.dadosmerc1.cod.value = n3;
   document.dadosmerc1.tipo.value = n4;
   document.dadosmerc1.nome.value = n5;
   document.dadosmerc1.quant.value = n1;
   document.dadosmerc1.preco.value = n2;
   document.dadosmerc1.oper.value = oper1;

}

