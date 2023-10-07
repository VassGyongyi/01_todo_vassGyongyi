
import MegjSor from "./MegjSor.js";
class LMegjelenit {
    #lista=[]
    constructor(lista, szuloElem) {
      this.#lista = lista;
      this.szuloElem = szuloElem;
      szuloElem.append(`<table class=table>`)
    
      this.tablaElem = szuloElem.children("table");
      //this.szuloElem.html(txt);
      this.osszeallit();
    }
    osszeallit() {
        let txt = "";
        for (let index = 0; index < this.#lista.length; index++) {
          //const element = this.#lista[index];
         new MegjSor(this.#lista[index],this.tablaElem)  
      }
      
    }
}
  export default LMegjelenit;

