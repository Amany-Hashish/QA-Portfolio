import { Locator, Page } from "@playwright/test";
import Actions from "../Utilities/Actions";
import BasePage from "./BasePage";

export default class LoginPage extends BasePage{
  

  
    private readonly OrangeHRM_URL : string ="https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
    private readonly UserName : Locator =  this.page.getByRole('textbox',{name : 'username'});
    private readonly Password : Locator = this.page.getByPlaceholder('Password');
    private readonly Login_Btn : Locator = this.page.getByRole('button',{name : /login/i});


    //Actions
    async goTo_URL (){    
    await this.page.goto(this.OrangeHRM_URL);
    await this.wait.waitPageToLoaded();

    }

    async EnterUserName ( username: string){
        await this.actions.FillTextBox(this.UserName,username)
    }

    async EnterPassword (password : string){
        await this.actions.FillTextBox(this.Password,password)
    }

    async clickOn_LoginBtn (){
        await this.actions.Click(this.Login_Btn);
        await this.wait.waitPageToLoaded()
    }

    


                
}