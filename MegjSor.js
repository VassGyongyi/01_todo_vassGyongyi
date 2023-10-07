class MegjSor{
   
    #adat ={}
    constructor(adat, szuloElem){
        this.#adat = adat;
        this.szuloElem =szuloElem
        this.sor()
    }
    sor(){
        let txt = `<tr>`
        for(const key in this.#adat){
            txt += `<td>${this.#adat[key]}</td>`;
           
    }
            txt += `<td><span class="kesz">szerk</span> </td>`;
            txt += "</tr>";


  
    this.szuloElem.append(txt);
    }
}
export default MegjSor;
