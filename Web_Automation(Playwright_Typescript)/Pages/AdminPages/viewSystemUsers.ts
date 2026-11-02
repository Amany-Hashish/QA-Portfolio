import { Locator } from "@playwright/test";
import BasePage from "../BasePage";

export default class viewSystemuser extends BasePage{
private readonly RecordsText : Locator = this.page.getByText(/Records Found/i);
private readonly AddBtn : Locator = this.page.getByRole('button',{name: /Add/i});
private readonly UsernameSearchField : Locator = this.page.locator('//label[text()="Username"]/../..//input');
private readonly SearchBtn : Locator = this.page.locator('//button[text()=" Search "]');
private DeleteBtn (Username:string){
 return  this.page.locator(`//div[text()="${Username}"]/../..//button`).first();
} 
//private readonly ConfirmDeleteBtn : Locator = this.page.getByRole('button',{name: /Yes, Delete /i});
private readonly ConfirmDeleteBtn : Locator = this.page.locator('//button[text()=" Yes, Delete "]');

//Get number of records using slice()
async GetRecordsCount (){
   const RecordsText = await this.actions.GetText(this.RecordsText);
   let NumOfRecords = Number(RecordsText?.slice(2,4));    // above to 9 (10,29..)
   if (Number.isNaN(NumOfRecords)){                      //isNan means if the number refer to 1 to 9 only
   NumOfRecords = Number(RecordsText?.slice(2,3));
   }
   return NumOfRecords ;
   
}
//Get number of records using match()
async GetNumberOfRecords_Match(){
 const TextContainNumber = await this.actions.GetText(this.RecordsText);
 let NumberOfRecords = Number(TextContainNumber?.match(/\d+/));
 return NumberOfRecords
}
//Click on Add Button
async ClickAddBtn(){
await this.actions.Click(this.AddBtn);
}
async EnterUserName (Username : string){
    await this.actions.FillTextBox(this.UsernameSearchField,Username)
}
async ClickOnSearchBtn(){
    await this.actions.Click(this.SearchBtn);
    await this.wait.waitPageToLoaded();
}
//Delete user
async DeleteUser(username : string){
    await this.actions.Click(this.DeleteBtn(username));
    await this.actions.Click(this.ConfirmDeleteBtn) ;  //Confirm Delete
    await this.wait.waitPageToLoaded();
}


}