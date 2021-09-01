const Itens = [
    {
        id: 0,
        nome: "vegetariano",
        img: "http://s2.glbimg.com/EFoi-6iFchrfO3HXBJQMlpoknhM=/smart/e.glbimg.com/og/ed/f/original/2017/11/28/receita-macarrao-com-almondegas-vegano_01.jpg",
        quantidade:0
    },
    {
        id: 1,
        nome: "macarrao com atum",
        img: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-macarrao-com-atum.jpg",
        quantidade:0
    },
    {
        id: 2,
        nome: "macarrao com frango",
        img: "https://img.itdg.com.br/tdg/images/recipes/000/173/054/162457/162457_original.jpg?mode=crop&width=710&height=400",
        quantidade:0
    }
]
function menuDaLoja (){
    var conteuDoPrato = document.getElementById("pratos");
    Itens.map((val) =>{
        conteuDoPrato.innerHTML+=`
        <div class = prato-single>
        <img width="450px" src="`+val.img+`" />
        <p>`+val.nome+`</p>
        <a key="`+val.id+`" href="#">adicionar ao carrinho</a>
        </div>`;
    })
}

menuDaLoja();

function atualizarCarrinho() {
    var conteudoDoCarrinho = document.getElementById("carrinho");
    conteudoDoCarrinho.innerHTML = "";
    Itens.map((val) =>{
        if(val.quantidade > 0){

            conteudoDoCarrinho.innerHTML+=`
            <p>`+val.nome+` | quantidade: `+val.quantidade+`</p>
            <hr>
            `;
        }
    })
}


var links = document.getElementsByTagName(`a`);
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click",function(){
        let key = this.getAttribute(`key`);
        Itens[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
    
}