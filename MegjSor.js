class MegjSor{
   
    #adat ={}
    constructor(adat, szuloElem){
      this.#adat = adat;
   
      this.tablaElem = szuloElem;

       
        this.#sor();
    
    // megfogom a pipákkal együtt az egész sort
    /** eseménykezelők a kész és a törlés gombokhoz */
    this.sorElem = this.tablaElem.children("tr:last-child");
    this.keszElem = this.sorElem.children("td").children(".kesz");
    this.torolElem = this.sorElem.children("td").children(".torol");
   
    // eseménykezelő pipára
     this.keszElem.on("click", () => {
      this.#pipa();
    });
    // eseménykezelő kukára
    this.torolElem.on("click", () => {
      this.sorElem.remove();
    });
  
    }
    #sor(){
      let txt ="<tr>";
     
      for (const key in this.#adat) {
        txt += `<td>${this.#adat[key]}</td>`;
      }
      txt += `<td><span class='kesz'>✔️</span> <span class='torol'>🗑</span></td>`;
      txt += `</tr>`;

      this.tablaElem.append(txt);
    }
    #pipa() {
     
        this.keszElem.text("❌")
      }
    }
    
export default MegjSor;
