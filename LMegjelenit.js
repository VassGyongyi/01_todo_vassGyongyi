
import MegjSor from "./MegjSor.js";
class LMegjelenit {
    #list=[]
    constructor(list, szuloElem) {
      this.#list = list;
      this.szuloElem = szuloElem;
      this.szuloElem.append(`<table class="table table-bordered table-striped">`);
    
      this.tablaElem = szuloElem.children(`table`);
     //this.szuloElem.html(txt);
      this.osszeallit();
    }
    osszeallit() {
        let txt = "";
        for (let index = 0; index < this.#list.length; index++) {
          
             new MegjSor(this.#list[index], this.tablaElem)  
      }}
      
    }
      


  export default LMegjelenit;

