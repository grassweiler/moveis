var	banners	=
    ["Os melhores do Brasil!"];
var	bannerAtual	= 0;
    
function trocaBanner(){
    bannerAtual	=(bannerAtual +	1) % 2 ; 
    document.querySelector('h2#mensagem').textContent =
    banners[bannerAtual];
}
setInterval(trocabanner, 2000);