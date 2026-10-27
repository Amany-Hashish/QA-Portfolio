import { Page } from "@playwright/test";
import BasePage from "./BasePage";
import SidePanel from "./Components/SidePanel";


export default class Daschboard  extends BasePage{

 public readonly sidePanel : SidePanel = new SidePanel(this.page); 
    

}