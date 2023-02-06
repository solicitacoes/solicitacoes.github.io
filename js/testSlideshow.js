export const IconTextArea = `<svg class="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
<path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z">
</path>
</svg>`

export const IconEnd  = `<svg class="octicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
<path fill-rule="evenodd" d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z">
</path>
</svg>`

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
export const textarea1 = `<textarea style="${styleTextArea}"> ${text1} </textarea>`.trim();
export const textarea2 = `<textarea style="${styleTextArea}"> ${text2} </textarea>`

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
          {Buttons2}
        </div>
      </div>
    </div>
  </form>
</div>`
