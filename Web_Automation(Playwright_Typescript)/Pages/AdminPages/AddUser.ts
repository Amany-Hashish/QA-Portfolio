import { Locator } from "@playwright/test";
import BasePage from "../BasePage";

export default class AddUser extends BasePage {
 
private readonly UserRole : Locator = this.page.locator('//div[text()="-- Select --"]/..//div/i').first();
private readonly Status : Locator = this.page.locator('//div[text()="-- Select --"]/..//div/i').last();
private RolesOptions (URole:string | RegExp) {
 return this.page.getByRole('option', {name : URole })
}
private StatusOptions (StatusOptions:string| RegExp){
    return this.page.getByRole('option', {name: StatusOptions})
}
private readonly EmployeeName : Locator = this.page.getByPlaceholder(/Type for hints.../i);
private  EmployeeNameOptions (EmpName : string | RegExp){
 return this.page.getByRole('option',{name:EmpName})
}
private readonly UserName : Locator = this.page.locator('//label[text()="Username"]/../..//input');
private readonly Password : Locator = this.page.locator('//label[text()="Password"]/../..//input');
private readonly Confirm_Password : Locator = this.page.locator('//label[text()="Confirm Password"]/../..//input');
private readonly SaveBtn : Locator = this.page.getByRole('button',{name:/Save/i});





//Show UserRole list then Select
async SelectUserRole (RoleName : string | RegExp){
    await this.actions.Click(this.UserRole);
    await this.actions.Click(this.RolesOptions(RoleName));
}

//Show Status list then select
async SelectStatus(Status : string | RegExp){
    await this.actions.Click(this.Status);
    await this.actions.Click(this.StatusOptions(Status))
}
//Fill EmployeeName
async EnterEmployeeName (EmpName : string){
    await this.actions.FillTextBox(this.EmployeeName,EmpName);
    const FirstOption : Locator = this.EmployeeNameOptions(/.*/).filter({hasNotText: /Searching/i}).first();
    await this.actions.Click(FirstOption);
}
//Enter UserName
async EnterUserName(UserName : string){
    await this.actions.FillTextBox(this.UserName,UserName);
}
//Enter Password
async EnterPassword(Password : string){
    await this.actions.FillTextBox(this.Password,Password);
}
//Confirm Password
async ConfirmPassword(ConfirmPassword : string){
    await this.actions.FillTextBox(this.Confirm_Password,ConfirmPassword);
}
//click on save
async Click_Save(){
    await this.actions.Click(this.SaveBtn);
    await this.wait.waitPageToLoaded();
}







}