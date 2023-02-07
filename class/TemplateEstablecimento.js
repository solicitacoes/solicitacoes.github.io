export default class TemplateEstablecimento {

    constructor(nome) {
        const format = /[!@#$%^&*()_+\-=\[\]{};:\\|,.<>\/?]/;
        if (nome === undefined || nome.length <= 0) {
            throw new Error("O nome é obrigatório para uma Pessoa");
        }
        if (nome === "" || nome === '') { 
            throw new Error("O nome não pode conter um valor vazio, sem preenchimento ou nulo");
        }
        if (checkNumber.test(nome) === false) { // nome1 nome 2 nome3 nome4 ... 
            throw new Error("O nome não pode conter número");
        }
        if (format.test(nome) === false) { // "My@string-with(some%text)" or '[!@#$%^&*()_+\-=\[\]{};:\\|,.<>\/?]'
            throw new Error("O nome não pode símbolo especial como tab, ponto etc - com a excessão do espaço em branco");
        }
        this.nome = nome;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }

}

// { nome:'', email:'', telefone:'', whatsapp:'', categorias:'', endereço:'' }
