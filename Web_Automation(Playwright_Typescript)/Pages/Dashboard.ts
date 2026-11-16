import { Page } from "@playwright/test";
import BasePage from "./BasePage";
import SidePanel from "./Components/SidePanel";


export default class Daschboard  extends BasePage{

 public readonly sidePanel : SidePanel = new SidePanel(this.page); 
 private readonly DashboardURL : string = 'https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser'; 

 async GotoDaschboardPage (){
    await this.actions.GoTo(this.DashboardURL);
    await this.wait.waitPageToLoaded();
 }  

}