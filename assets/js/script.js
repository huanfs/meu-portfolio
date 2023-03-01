
function SobreMim(){
    let botao=document.getElementById('btn');
    let mais=document.getElementById('maissobremim');
    let sobre=document.querySelector("#sobre-mim h2");
    mais.innerHTML=`Eu comecei a estudar programação para ver como era á area
    e caso eu gostasse dela eu seguiria estudando. isso foi há mais de um ano atrás
    e hoje estou aqui escrevendo sobre mim no meu portfólio que EU mesmo criei
    através de tudo que aprendi nessa pequena jornada. Nasci na cidade de Aracaju-SE
    endereço este ao qual resido atualmente e busco uma oportunidade de ingressar
    na área de tecnologia de forma profissional exercendo com segurança e confiança
    todos os meus aprendizados nas tecnologias HTML5, CSS3, JavaSript e GIT/GitHub.
    além de estar estudando Bootstrap,Node.js e futuramente React.js.`;
    mais.style.fontSize='1.2em';
    mais.style.marginTop="10px";
    botao.style.display='none';
    sobre.style.marginBottom="-30px";
}