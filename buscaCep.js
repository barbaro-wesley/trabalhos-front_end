const frmCepSearch = document.querySelector("#frmCepSearch");
const showCepInfo = document.querySelector("#showCepInfo");

frmCepSearch.addEventListener("submit", function(event) {
  event.preventDefault();
  const cepValue = frmCepSearch.cepSearch.value;

  if (!isNaN(cepValue) && parseInt(cepValue) === parseFloat(cepValue)) {
    const request = fetch(`https://viacep.com.br/ws/${cepValue}/json/`);
    
    request
      .then(function(response) {
        return response.json();
      })
      .then(function(cepData) {
        showCepInfo.textContent = `Cidade: ${cepData.localidade}, UF: ${cepData.uf}`;
      })
      .catch(function() {
        showCepInfo.textContent = "CEP não encontrado";
      });
  } else {
    showCepInfo.textContent = "CEP inválido. Digite apenas números inteiros.";
  }
});
