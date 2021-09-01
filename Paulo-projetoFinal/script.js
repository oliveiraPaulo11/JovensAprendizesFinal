
// valor dos pratos
var p1 = 40
let p2 = 28
let p3 = 45
let p4 = 68
let p5 = 35
const Itens = [
    {
        id: 0,
        nome: "vegetariano",
        img: "http://s2.glbimg.com/EFoi-6iFchrfO3HXBJQMlpoknhM=/smart/e.glbimg.com/og/ed/f/original/2017/11/28/receita-macarrao-com-almondegas-vegano_01.jpg",
        quantidade:0,
        preco:p1
    },
    {
        id: 1,
        nome: "macarrao com atum",
        img: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-macarrao-com-atum.jpg",
        quantidade:0,
        preco:p2
    },
    {
        id: 2,
        nome: "macarrao com frango",
        img: "https://img.itdg.com.br/tdg/images/recipes/000/173/054/162457/162457_original.jpg?mode=crop&width=710&height=400",
        quantidade:0,
        preco:p3
    },
    {
        id: 3,
        nome: "macarrao espaguet a bolonhesa",
        img: "https://www.sabornamesa.com.br/media/k2/items/cache/9e9e1351d6a763151a8613c1dd10d427_XL.jpg",
        quantidade:0,
        preco:p4
    },
    {
        id: 4,
        nome: "macarrao ravioli ao molho branco",
        img: "https://static.clubedaanamariabraga.com.br/wp-content/uploads/2019/04/ravioli-molho-4-queijos-1024x683.jpg",
        quantidade:0,
        preco:p5
    },
    
]
function menuDoCardapio (){
    var conteuDomenuDePromocao = document.getElementById("promocaoCartaoFidelidade");
    Itens.map((val) =>{
        conteuDomenuDePromocao.innerHTML+=`
        <div class = prato-single>
        <img width="450px" src="`+val.img+`" /> 
        <p>`+val.nome+`</p>
        <a class="aDoCarrinho" key="`+val.id+`" href="#">adicionar ao carrinho</a> <br>
        <a class="retirarDoCarrinho" key="`+val.id+`" href="#">retirar do carrinho</a>
        <h4> preco:`+val.preco.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})+`</h4>
        </div>`;
    })
}

menuDoCardapio()

atualizarCarrinho =()=>{
    var conteudoDoCarrinho = document.getElementById("carrinhoDeCompras");
    conteudoDoCarrinho.innerHTML = "";
    Itens.map((val) =>{
        if(val.quantidade > 0){
            let x = val.preco*val.quantidade
            
            conteudoDoCarrinho.innerHTML+=`
            <p>`+val.nome+` | quantidade: `+val.quantidade+` | preco:`+x.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})+`</p>
            <hr>
            `;
        }
    })
}

var links = document.getElementsByClassName("aDoCarrinho");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click",function(e){
        e.preventDefault();
        let key = this.getAttribute(`key`);
        Itens[key].quantidade++ ;
         
        atualizarCarrinho();
        return false;
    })
    
}
var links2 = document.getElementsByClassName("retirarDoCarrinho");
for (var i = 0; i < links2.length; i++) {
    links2[i].addEventListener("click",function(e){
        e.preventDefault();
        let key = this.getAttribute(`key`);
        Itens[key].quantidade = Itens[key].quantidade - 1;
        atualizarCarrinho();
        return false;
    })
    
}


// const sobremesas = [
//     {
//         id: 0,
//         nome: "vegetariano",
//         img: "http://s2.glbimg.com/EFoi-6iFchrfO3HXBJQMlpoknhM=/smart/e.glbimg.com/og/ed/f/original/2017/11/28/receita-macarrao-com-almondegas-vegano_01.jpg",
//         quantidade:0,
//         preco:p1
//     },
//     {
//         id: 1,
//         nome: "macarrao com atum",
//         img: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-macarrao-com-atum.jpg",
//         quantidade:0,
//         preco:p2
//     },
//     {
//         id: 2,
//         nome: "macarrao com frango",
//         img: "https://img.itdg.com.br/tdg/images/recipes/000/173/054/162457/162457_original.jpg?mode=crop&width=710&height=400",
//         quantidade:0,
//         preco:p3
//     },
//     {
//         id: 3,
//         nome: "macarrao espaguet a bolonhesa",
//         img: "https://www.sabornamesa.com.br/media/k2/items/cache/9e9e1351d6a763151a8613c1dd10d427_XL.jpg",
//         quantidade:0,
//         preco:p4
//     },
//     {
//         id: 4,
//         nome: "macarrao ravioli ao molho branco",
//         img: "https://static.clubedaanamariabraga.com.br/wp-content/uploads/2019/04/ravioli-molho-4-queijos-1024x683.jpg",
//         quantidade:0,
//         preco:p5
//     },
    
// ]
// function menuDoCardapio2 (){
//     var sobrmesasCartaoFidelide = document.getElementById("sobrmesasCartaoFidelide");
//     sobremesas.map((val) =>{
//         sobrmesasCartaoFidelide.innerHTML+=`
//         <div class = prato-single>
//         <img width="450px" src="`+val.img+`" /> 
//         <p>`+val.nome+`</p>
//         <a class="aDoCarrinho" key="`+val.id+`" href="#">adicionar ao carrinho</a> <br>
//         <a class="retirarDoCarrinho" key="`+val.id+`" href="#">retirar do carrinho</a>
//         <h4> preco:`+val.preco.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})+`</h4>
//         </div>`;
//     })
// }
// menuDoCardapio2()

// var links = document.getElementsByClassName("aDoCarrinho");
// for (var i = 0; i < links.length; i++) {
//     links[i].addEventListener("click",function(e){
//         e.preventDefault();
//         let key = this.getAttribute(`key`);
//         sobremesas[key].quantidade++ ;
         
//         atualizarCarrinho();
//         return false;
//     })
    
// }
// var links2 = document.getElementsByClassName("retirarDoCarrinho");
// for (var i = 0; i < links2.length; i++) {
//     links2[i].addEventListener("click",function(e){
//         e.preventDefault();
//         let key = this.getAttribute(`key`);
//         Itens[key].quantidade = Itens[key].quantidade - 1;
//         atualizarCarrinho();
//         return false;
//     })
// }

//modal carrinho

iniciaModalCarrinho=(idmodal)=>{
    const modalCarrinho = document.getElementById(idmodal);
    modalCarrinho.classList.add("mostrarCarrinho");
    modalCarrinho.addEventListener("click",function(e){
        if(e.target.id == idmodal){
            modalCarrinho.classList.remove("mostrarCarrinho")
        }
    })
}
fecharModalCarrinho=(idmodal)=>{
    const modalCarrinho = document.getElementById(idmodal);
    modalCarrinho.classList.remove("mostrarCarrinho");
}
// iniciaModalCarrinho("modal-carrinho");
// console.log(2*2);