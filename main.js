import { TODOLIST } from "./adatok.js";
import {TODOLIST2} from "./adatok.js";
import LMegjelenit from "./Megjelenit.js";
$(function(){
    const szuloElem=$(".ujadat")
   const szuloElem2 =$(".tarolo")
    new LMegjelenit(TODOLIST, szuloElem)
   // new LMegjelenit(TODOLIST2, szuloElem2)
}
)
