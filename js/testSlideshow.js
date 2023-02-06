import { IconTextArea, IconEnd  } from  "./icons.js";
import { textarea1, textarea2 } from "./textareas.js"

export const text1 = `Devido à pandemia causado pelo coronavírus espalhando o covid-19 mundo afora, profissionais de saúde e governantes recomendam que as pessoas fiquem em quarentena e que se mantenha um distanciamento social.
Porém, ainda precisamos de itens, serviços, e em alguns casos, doações. Com a necessidade informada acima foi disponibilizado esse site para conectar pessoas e estabelecimentos virtualmente. 
Precisa comprar pão, solicite a uma padaria ou mercado. 
Você dono de estabelecimento, utilize esse site para receber encomendas. 
Dessa forma evitamos superfaturamentos de plataformas de entregas.
E ainda ajudamos os pequenos comerciantes. Portanto, fique em casa!`

export const Buttons2 = `<p style="margin-top: 20px;">
<button class="btn btn-primary prevBtn btn-lg pull-left" type="button">Voltar</button>
<a class="btn btn-primary prevBtn btn-lg pull-left" href="/estabelecimento">Selecionar estabelecimento</a>
<button class="btn btn-success btn-lg pull-right" type="submit">Confirmar</button>
</p>`

export const text2  = `Devido à pandemia causado pelo coronavírus espalhando o covid-19 mundo afora, profissionais de saúde e governantes recomendam que as pessoas fiquem em quarentena e que se mantenha um distanciamento social. Porém, ainda precisamos de itens, serviços, e em alguns casos, doações. Com a necessidade informada acima foi disponibilizado esse site para conectar pessoas e estabelecimentos virtualmente. Precisa comprar pão, solicite a uma padaria ou mercado. Você dono de estabelecimento, utilize esse site para receber encomendas. Dessa forma evitamos superfaturamentos de plataformas de entregas. E ainda ajudamos os pequenos comerciantes. Portanto, fique em casa!`
export const styleTextArea =  "height: 121px; border: none; width: 100%; background: none; text-align: left;"


export const URL1 = `<div class="stepwizard-step">
<a href="#step-1" type="button" class="btn btn-primary btn-circle">1</a>
<p>Processo</p>
</div>`

export const URL2 = `<div class="stepwizard-step">
<a href="#step-2" type="button" class="btn btn-default btn-circle" disabled="disabled">2</a>
<p>Análise</p>
</div>`

export const URL3 = `<div class="stepwizard-step">
<a href="#step-3" type="button" class="btn btn-default btn-circle" disabled="disabled">3</a>
<p>Confirmação</p>
</div>`

export const Form1 = `<div class="form-group">
<label class="control-label">Nome</label>
<input maxlength="200" type="text" required="required" class="form-control" placeholder="Inserir nome completo">
</div>`

export const Form2 = `<div class="form-group">
<label class="control-label">Celular</label>
<input maxlength="200" type="text" required="required" class="form-control" placeholder="Inserir número de celular">
</div>`

export const Form3 = `<div class="form-group">
<label class="control-label">E-mail</label>
<input maxlength="200" type="text" required="required" class="form-control" placeholder="Inserir endereço de e-mail completo">
</div>`

export const page1 = "Solicitar itens, serviços ou doações"
export const pageAbout = `<h4 id="solicitar" style="text-align: center;"> ${page1} </h4>`
export const stepWizards = `<div class="stepwizard-row setup-panel">
      ${URL1}
      ${URL2}
      ${URL3}
</div>`

export const mainApp = `<div class="stepwizard col-md-offset-3"> ${stepWizards} </div>`

export const ConfirmarButton = `<p> <button class="btn btn-success nextBtn btn-lg pull-right" type="button" style="width: 100%;"> Confirmar </button> </p>`

export const AllButtons = `<p style="margin-top: 20px;">
<button class="btn btn-primary prevBtn btn-lg pull-left" type="button">Voltar</button>
<button class="btn btn-danger nextBtn btn-lg pull-right" type="button">Confirmar</button>
</p>`

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
