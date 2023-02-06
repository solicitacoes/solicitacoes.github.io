 // Salvar localmente
  const doc = new jsPDF();
  doc.setProperties({
    title: 'Solicitar',
    subject: 'Documento de exemplo de solicitar',
    author: 'James Hall',
    keywords: 'generated, javascript, web 2.0, ajax',
    creator: 'solicitacoes'
  });
  
  document.getElementById('cadastro').onsubmit = betterOnsubmit(values => {
    // gera o pdf a partir do client quando efetuar o submit
    doc.text(values.nome, 20, 20);
    doc.text(values.telefone, 20, 30);
    doc.text(values.whatsapp, 20, 40);
    doc.text(values.logradouro, 20, 50);
    doc.text(values.cidade, 20, 60);
    doc.text(values.estado, 20, 70);
    doc.text(values.bairro, 20, 80);
    doc.text(values.categoria, 20, 90);
    doc.save("cadastro.pdf");
  })
