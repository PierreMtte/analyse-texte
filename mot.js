
const valid =() =>{
document.getElementById('zoneTexte').addEventListener('keyup', function() {
document.getElementById('compteur').innerHTML = zoneTexte.value.length;});
}