import { Locator } from "@playwright/test";
import BasePage from "../BasePage";
import viewSystemuser from "./viewSystemUsers";
import AddUser from "./AddUser";

export default class Admin extends BasePage {

    public readonly viewSystemUser : viewSystemuser = new viewSystemuser(this.page);
    public readonly adduser : AddUser = new AddUser(this.page);


}