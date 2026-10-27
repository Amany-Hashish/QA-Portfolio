import { test, expect } from '@playwright/test';
import LoginPage from '../Pages/LoginPage';
import Daschboard from '../Pages/Dashboard';
import SidePanel from '../Pages/Components/SidePanel';

test('WebAutomation', async ({ page }) => {

  const login = new LoginPage(page);
  const Dashboard = new Daschboard (page);
  const SideNav = new SidePanel (page);

  await login.goTo_URL();
  await login.EnterUserName("Admin");
  await login.EnterPassword ("admin123");
  await login.clickOn_LoginBtn();
  await Dashboard.sidePanel.clickOnAdmin();
   
  await page.pause();
  
});


