import { Page } from "@playwright/test";

export default class Waits {
 
    private readonly page : Page ;

    constructor (page : Page){
        this.page = page ;
    }

    async waitPageToLoaded ()
    {
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('load');
    }

}