export const routes = [
  {
    "path": "#comunidade",
    "description": "comunidade"
  },
  {
    "path": "#codigo-fonte",
    "description": "código-fonte"
  }
];

export const navbar = `<div class="Header"><nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container">
          <img src="https://cdn-icons-png.flaticon.com/512/2107/2107774.png" style="width: 30px;">
          <a href="/solicita/" class="navbar-brand Header-link f4 d-flex flex-items-center">
            <span>solicitar</span>
        </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="c">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/solicita/"> comece aqui </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#documentacao"> acessar documentação </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#codigo-fonte"> acessar código-fonte </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#comunidade"> comunidade </a>
              </li>
              $('#routes').append(`${routes.reduce((updated, item) => updated.concat(`<li class="nav-item"> <a class="nav-link active" aria-current="page" href="${item.path}"> acessar documentação </a> ${item.description} </li> </a>`), '')} `)
            </ul>
          </div>
        </div>
      </nav>
</div>`;
