//import { TODOLIST } from "./adatok.js";
import {TODOLIST2} from "./adatok.js";
import LMegjelenit from "./LMegjelenit.js";
//import MegjSor from "./MegjSor.js";
$(function(){
    //const szuloElem=$(".ujadat")
   const szuloElem =$(".tarolo")
    //new LMegjelenit(TODOLIST, szuloElem)
   new LMegjelenit(TODOLIST2, szuloElem)
   $(window).on("torles", (event )=>{
    console.log(event.detail);
   });
}
)


