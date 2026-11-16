import {test} from '../Fixtures/fixtures';
import { AdminData } from '../TestData/enums/LoginData';
import {Path} from '../auth/enum';

  const LoginUserName = AdminData.AdminUserName;
  const LoginPassword = AdminData.AdminPassword;



test('Authenticate', async ({page, loginPage}) => {
  await loginPage.goTo_URL();
  await loginPage.EnterUserName(LoginUserName);
  await loginPage.EnterPassword (LoginPassword);
  await loginPage.clickOn_LoginBtn();
  await page.context().storageState({path: Path.StorageState});
  });     