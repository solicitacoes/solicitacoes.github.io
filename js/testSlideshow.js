import { URL1, URL2, URL3 } from "./references.js"
import { MainForm } from "./MainForm.js";

export const page1 = "Solicitar itens, serviços ou doações"
export const stepWizards = `<div class="stepwizard-row setup-panel">
      ${URL1}
      ${URL2}
      ${URL3}
</div>`

export const mainApp = `<div class="stepwizard col-md-offset-3"> ${stepWizards} </div>`
export const pageAbout = `<h4 id="solicitar" style="text-align: center;margin-top: 60px;"> ${page1} </h4>`
export const slideshow = `<div class="container">
  ${pageAbout}
</div>
<div class="container card card-box" style="border:none;">
   ${mainApp}
   ${MainForm}
</div>`
