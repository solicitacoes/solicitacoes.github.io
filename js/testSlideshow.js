import { IconTextArea, IconEnd  } from  "./icons.js";
import { textarea1, textarea2 } from "./textareas.js"
import { Form1, Form2, Form3 } from "./forms.js"
import { URL1, URL2, URL3 } from "./references.js"
import { Buttons2, ConfirmarButton, AllButtons } from "./buttons.js"

export const page1 = "Solicitar itens, serviços ou doações"
export const pageAbout = `<h4 id="solicitar" style="text-align: center;"> ${page1} </h4>`
export const stepWizards = `<div class="stepwizard-row setup-panel">
      ${URL1}
      ${URL2}
      ${URL3}
</div>`

export const mainApp = `<div class="stepwizard col-md-offset-3"> ${stepWizards} </div>`

export const slideshow = `<div class="container">
  ${pageAbout}
</div>
<div class="container card card-box" style="border:none;">
   ${mainApp}
  <form role="form" action="" method="post">
    <div class="row setup-content" id="step-1">
      <div class="col-xs-6 col-md-offset-3">
        <div class="col-md-12">
          <div class="form-group">
            <div class="bd-callout bd-callout-info">
              <div class="container">
                <div class="alert alert-warning" role="alert">
                  <!-- <%= octicon "alert" %> -->
                  ${IconTextArea}
                  ${textarea1}
                </div>
              </div>
            </div>
          </div>
          ${ConfirmarButton}
        </div>
      </div>
    </div>
    <div class="row setup-content" id="step-2">
      <div class="col-xs-6 col-md-offset-3">
        <div class="col-md-12">
          ${Form1}
          ${Form2}
          ${Form3}
          ${AllButtons}
        </div>
      </div>
    </div>
    <div class="row setup-content" id="step-3">
      <div class="col-xs-6 col-md-offset-3">
        <div class="col-md-12">
          <div class="form-group">
            <div class="bd-callout bd-callout-info">
              <div class="container">
                <div class="alert alert-warning" role="alert">
                  <!-- <%= octicon "alert" %> -->
                  ${IconEnd}
                  ${textarea2}
                </div>
              </div>
            </div>
          </div>
          ${Buttons2}
        </div>
      </div>
    </div>
  </form>
</div>`
