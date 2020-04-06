//Aggiungo a tutte le funzioni il metodo defer usando prototype
Function.protoype.defer = function(ms) {
  //defer mi ritorna il numero dato in input e mi ritarda l'esecuzione della funziona a cui la applico con un ritardo di x ms
  setTimeout(this, ms)
}