import { Locator, Page } from "@playwright/test";

export default class Actions {

private readonly page : Page;    

 constructor (pagefrom_TC : Page){
  
    this.page = pagefrom_TC;

 }

async FillTextBox (ElemetLocator : Locator , Text : string) {
    await ElemetLocator.clear();
    await ElemetLocator.fill(Text);
}

async Click (ElementLocator : Locator) {
    await ElementLocator.click();
}

async GetText (ElementLocator : Locator) : Promise <string|null> {
  const TextContent =  await ElementLocator.textContent();
  return TextContent ;
}
async RefreshPage (){
    await this.page.reload();
    
}


}