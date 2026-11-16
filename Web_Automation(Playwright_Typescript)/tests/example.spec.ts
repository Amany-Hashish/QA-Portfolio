import { Path } from '../auth/enum';
import {test} from '../Fixtures/fixtures';
import { NewUserData } from '../TestData/enums/NewUserData';

 test.use({
  storageState : Path.StorageState  //This will use the storage state file created in Authenticate project to run this project without login again
});


  const UserRole = NewUserData.UserRole;
  const EmployeeName = NewUserData.EmployeeName;
  const Status = NewUserData.Status;
  const UserName = `${NewUserData.UserName} ${Date.now().toString().slice(-4)}`;  //To use user that's not duplicated *Ignore not already found;
  const Password = NewUserData.Password;



test('OrangeHRM', async ({ dashboard, admin }) => {

  await dashboard.GotoDaschboardPage();
  await dashboard.sidePanel.clickOnAdmin();
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

test('OrangeHRM2', async ({ dashboard, admin }) => {

  await dashboard.GotoDaschboardPage();
  await dashboard.sidePanel.clickOnAdmin();
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


