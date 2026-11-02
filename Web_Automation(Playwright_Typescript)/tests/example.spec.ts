import { test, expect } from '@playwright/test';
import LoginPage from '../Pages/LoginPage';
import Daschboard from '../Pages/Dashboard';
import SidePanel from '../Pages/Components/SidePanel';
import Admin from '../Pages/AdminPages/Admin';

test('WebAutomation', async ({ page }) => {

  const login = new LoginPage(page);
  const Dashboard = new Daschboard (page);
  const admin = new Admin(page);

  const LoginUserName = "Admin";
  const LoginPassword = "admin123";
  const UserRole = "Admin";
  const EmployeeName = "Peter";
  const Status = "Enabled";
  const UserName = `Amany ${Date.now().toString().slice(-4)}` ; //To use user that's not duplicated *Ignore not already found 
  const Password = "Amany1234";


  await login.goTo_URL();
  await login.EnterUserName(LoginUserName);
  await login.EnterPassword (LoginPassword);
  await login.clickOn_LoginBtn();
  await Dashboard.sidePanel.clickOnAdmin();
  const CountsBeforeAddUser = await admin.viewSystemUser.GetNumberOfRecords_Match();
  console.log("Counts before Add User",CountsBeforeAddUser);
  await admin.viewSystemUser.ClickAddBtn();
  await admin.adduser.SelectUserRole(UserRole);
  await admin.adduser.EnterEmployeeName(EmployeeName);
  await admin.adduser.SelectStatus(Status);
  await admin.adduser.EnterUserName(UserName);
  await admin.adduser.EnterPassword(Password);
  await admin.adduser.ConfirmPassword(Password);
  await admin.adduser.Click_Save();
  const CountsAfterAddUser = await admin.viewSystemUser.GetNumberOfRecords_Match();
  console.log("Counts After Add User",CountsAfterAddUser);
  await admin.viewSystemUser.assertions.AssertValueIsIncreased(CountsBeforeAddUser,CountsAfterAddUser);
  await admin.viewSystemUser.EnterUserName(UserName);
  await admin.viewSystemUser.ClickOnSearchBtn();
  await admin.viewSystemUser.DeleteUser(UserName);
  await admin.viewSystemUser.actions.RefreshPage();
  const CountsAfterDeleteUser = await admin.viewSystemUser.GetNumberOfRecords_Match();
  console.log("Counts After Delete User",CountsAfterDeleteUser);
  await admin.viewSystemUser.assertions.AssertValueIsDecreased(CountsAfterAddUser,CountsAfterDeleteUser);
  
});


