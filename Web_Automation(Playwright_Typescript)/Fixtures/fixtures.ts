import { test as baseTest } from "@playwright/test"
import Admin from "../Pages/AdminPages/Admin"
import Daschboard from "../Pages/Dashboard"
import LoginPage from "../Pages/LoginPage"

type pages = {

    loginPage : LoginPage,
    dashboard : Daschboard,
    admin : Admin
}

const testpages = baseTest.extend<pages>({

    loginPage : async ({page}, use) => {
        await use(new LoginPage(page));
     },
    dashboard : async ({page},use) =>{
        await use(new Daschboard(page));
    },
    admin :async ({page},use) => {
        await use (new Admin(page));
    }

})

export const test = testpages;