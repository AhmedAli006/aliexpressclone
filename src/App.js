import { Button, Grid, IconButton, icons, Link, Select } from "@mui/material";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SelectVariants from "./comp/select";

import BasicBreadcrumbs from "./comp/bcrum";

function App() {
  return (
    <div className="App">
      <div className="bgimg">
        <img src="https://ae01.alicdn.com/kf/Hf2a6ef659c39403789c055c2d03cb957Z/1920x80.png_.webp" />
      </div>
      <div className="nav">
        <Button color="inherit">app</Button>
        <Button color="inherit">Buyer protection</Button>
        <Button color="inherit">wish list</Button>
        <SelectVariants />
      </div>
      <div className="ser-nav">
        <Grid container>
          <Grid md={6}>
            <img
              className="px-5 "
              alt="asdf"
              src="https://ae01.alicdn.com/kf/H1674ac74299a489f8e2995c8b73006ceJ.png"
            />
          </Grid>
          <Grid md={6} className="d-flex justify-content-center">
            {" "}
            <input className="serbar" type="search" />{" "}
          </Grid>
          <br />

          <Grid md={12} className="d-flex justify-content-center">
            <BasicBreadcrumbs />
          </Grid>
        </Grid>
      </div>
      
      <div className='card'>
        <ul>
          <li>Woman Fashion</li>
          <li>man Fashion</li>
          <li>mobile</li>
          <li>computer</li>
          <li>home pet & appliances</li>
          <li>bags</li>
          <li>toys</li>
          
        </ul>
        
      </div>

      <div className="footer">
        <Grid container style={{backgroundColor:'lightgray'}}>
          <Grid className="pt-5 m-3" md={4}>
            <h4>Help</h4>
            <p>
              Customer Service, Disputes & Reports, Buyer Protection, Report IPR
              infringement
            </p>
          </Grid>
          <Grid className="pt-5 m-3" md={4}>
            <h4>AliExpress Multi-Language Sites</h4>
            <p>
              Russian, Portuguese, Spanish, French, German, Italian, Dutch,
              Turkish, Japanese, Korean, Thai, Vietnamese, Arabic, Hebrew,
              Polish
            </p>
          </Grid>
          <Grid className="pt-5 m-3" md={4}>
            <h4>Browse by Category</h4>
            <p>
              All Popular, Product, Promotion, Low Price, Great Value, Reviews,
              Blog, Seller Portal, BLACK FRIDAY, AliExpress Assistant
            </p>
          </Grid>
          <Grid className="pt-5 m-3" md={4}>
            <h4>Alibaba Group</h4>
            <p>
             
Alibaba Group Website, AliExpress, Alimama, Alipay, Fliggy, Alibaba Cloud, Alibaba International, AliTelecom, DingTalk, Juhuasuan, Taobao Marketplace, Tmall, Taobao Global, AliOS, 1688
            </p>
          </Grid>
        </Grid>
        <div className='blkfoot'>
          <p>Intellectual Property Protection - Privacy Policy - Sitemap - Terms of Use - Information for EU consumers - Transaction Services Agreement for EU consumers - User Information Legal Enquiry Guide ©️2010-2021 AliExpress.com. All rights reserved.  增值电信业务经营许可证 浙B2-20120091-8  浙公网安备 33010802002248号</p>
        </div>
      </div>
    </div>
  );
}

export default App;
