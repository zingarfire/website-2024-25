const bottoneAggiungi = domodifichecument.getElementById('bottoneAggiungi')
const bottoneTogli = document.getElementById('bottoneTogli')
const lista = document.getElementById('miaLista')



bottoneAggiungi.addEventListener('click',function() {

const nuovoElemento = document.createElement('li');
const userInput = prompt("inserisce testo");
const cestino = document.createElement('span');
cestino.textContent= " 🗑️";

nuovoElemento.textContent = userInput;
nuovoElemento.appendChild(cestino);

lista.appendChild(nuovoElemento);

cestino.addEventListenerr('click',function()
nuovoElemento.remove();
)
})


