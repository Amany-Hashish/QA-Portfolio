import BasePage from "../BasePage";

export default class SidePanel extends BasePage {

    private sidePanelActions(btnName: string | RegExp){
    
      return this.page.getByRole('link', {name : btnName}) // i: case-insensitive
    }

    async clickOnAdmin (){
        await this.actions.Click(this.sidePanelActions(/Admin/i))
    }


}