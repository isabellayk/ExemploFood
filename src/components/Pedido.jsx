import { useState } from "react"


const cardapio = [
    { id: 1, nome: "Combo-01", preco: 25.00, disponivel: true, quantidade: 0 },
    { id: 2, nome: "Combo-02", preco: 45.00, disponivel: true, quantidade: 0 },
    { id: 3, nome: "Combo-03", preco: 55.00, disponivel: false, quantidade: 0 },
    { id: 4, nome: "Combo-04", preco: 65.00, disponivel: true, quantidade: 0 },
]



const Pedido = () => {

// HOOK-useState= Manipula o estado da variavel
// Estados para gerenciar a lista de items
    const[items,setItems]=useState(cardapio);
    const[status,setStatus]=useState();
    const[enviar,setEnviar]=useState(false);

    // Valor fixo adicionado ao total quando tiver items no carrinho
    const taxaEntrega = 5.0;
    //Função que altera a quantidade de um pedido
    const alterarQuantidade =(id,valor)=>{
        //usa a funcao updater para garantir o valor mais recente do estado
        setItems(prev=>
            // MAP: percorre a lista para criar um novo array sem modificar o original(imutabilidade)
            prev.map(item=>
                // TERNARIO: verifica se o item da interação atual é oq deve ser alterado
                // SPRED(...item): copia as propriedades do item e atualiza apenas a quantidade, mantendo o resto
                // MATH.max : objeto que garante que a quantidade nunca seja menor que 0
                //ITEM: retorna o item intacto caso o id nao corresponda
                item.id===id ? {...item,quantidade: Math.max(0, item.quantidade + valor)}:item
            )
        )
    }

    // FILTER - Seleciona apenas os produtos disponiveis e do carrinho
    const produtosDiponiveis = items.filter(item=>item.disponivel);
    const carrinho= items.filter(item=>item.quantidade>0);
    // REDUCE - calcula a soma dos items (preço * quantidade) e adiciona a taxa de entrega
    const subtotal = carrinho.reduce((act,item)=>ac + item.preco * item.quantidade,0)
    const total = subtotal >0 ? subtotal + taxaEntrega: 0;

    //Simulação do cilco de vida da entrega usando temporizadores assincronos
    const confirmarPedido=()=>{
        setEnviar(true);
        setStatus("Restaurante preparando seu pedido...")
        setTimeout(()=>{
            setStatus("Seu pedido saiu para entrega!")
            setEnviar(false)
    },5000);
    setTimeout(()=>{
        setStatus("Seu pedido foi entregue com sucesso")
        setEnviar(false)
    },1000)    

}

  return (
    <>



    </>
  )
}



