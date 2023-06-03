function SobreMim(){
    let botao=document.getElementById('btn');
    let mais=document.getElementById('maissobremim');
    let sobreMim = document.querySelector("#sobre-mim");
    let eu=document.querySelector("#eu");
    mais.innerHTML=`Eu comecei a estudar programação para ver como era á area
    e caso eu gostasse dela eu seguiria estudando. isso foi há mais de um ano atrás
    e hoje estou aqui escrevendo sobre mim no meu portfólio que EU mesmo criei
    através de tudo que aprendi nessa pequena jornada. Nasci na cidade de Aracaju-SE
    endereço este ao qual resido atualmente e busco uma oportunidade de ingressar
    na área de tecnologia de forma profissional exercendo com segurança e confiança
    todos os meus aprendizados nas tecnologias HTML5, CSS3, JavaSript e GIT/GitHub.
    além de estar estudando Bootstrap,Node.js e futuramente Vue.js.`;
    mais.style.fontSize='1.2em';
    mais.style.marginTop="20px";
    botao.style.display='none';
    sobreMim.style.height="100vh";
    // criação da minha foto na area sobre mim
    let foto = document.createElement("img");
    foto.setAttribute("title","Huan Figuereido dev front-end");
    eu.appendChild(foto);
    foto.src="cachorro.png";
    foto.style.marginTop="20px;"
    foto.style.filter="drop-shadow:5px 5px 10px;";
    //adicionando animação
    mais.animate([{opacity:0},{opacity:1}], {
        duration: 1000,
      });
    foto.animate([{opacity:0},{opacity:1}], {
        duration: 800,
      });    
}