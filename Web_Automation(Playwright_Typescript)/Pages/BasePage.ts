import { Page } from "@playwright/test";
import Actions from "../Utilities/Actions";
import Waits from "../Utilities/Waits";

export default class BasePage {
 
     protected readonly page : Page ; //protected to be used in the child class
     public readonly actions : Actions ;
     public readonly wait : Waits ;

     constructor (page:Page){
        this.page = page ;
        this.actions = new Actions(this.page);
        this.wait = new Waits(this.page);
     }   

}