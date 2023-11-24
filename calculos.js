/* Desenvolva aqui a rotina */


function calcularReceitas (){
    const valorBase = Number(document.getElementById('valor_base').value)
    const valorTransporteEl = Number(document.getElementById('valor_transporte').value)
    const valorAlimentacaoEl = Number(document.getElementById('valor_alimentacao').value)
  
    const valorTotalReceita = valorBase + valorTransporteEl + valorAlimentacaoEl
  
    document.getElementById('valor_receita').value = valorTotalReceita
    return valorTotalReceita
  }
  
  function calcularDespesas() {
    const valorAutomovelEl = Number(document.getElementById('valor_automovel').value)
    const faltasEl = Number(document.getElementById('faltas').value)
    const valorDespesas = valorAutomovelEl + faltasEl
  
    document.getElementById('valor_descontos').value = valorDespesas
    return valorDespesas  
  }
  
  function calcularTotal() {
    const valorTotal = calcularReceitas() - calcularDespesas()
    document.getElementById('valor_total').value = valorTotal  
  }