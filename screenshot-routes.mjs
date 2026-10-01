import {chromium} from '@playwright/test';
const b=await chromium.launch();const page=await b.newPage({viewport:{width:1440,height:1000}});for(const route of ['demo','privacidad']){await page.goto(`https://orange-hospitality-preview.vercel.app/${route}`);await page.waitForLoadState('networkidle');await page.screenshot({path:`/downloads/orange-live-${route}.png`,fullPage:true});}await b.close();
