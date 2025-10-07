(function() {
  var ex1_button = document.getElementById('ex1_button');
  var ex1_content = document.getElementById('ex1_content');

  // Ex1
  ex1_button.addEventListener('click', function() {
    var tabela = [];
    for (var i = 0; i <= 9; i++) {
      tabela.push(i);
    }
    ex1_content.innerHTML = tabela.toString();
  });

  // Ex2

  document.getElementById('ex2_text').addEventListener('input', function() {
    const value = this.value;
    const content = document.getElementById('ex2_content');

    if (/[a-zA-Z]/.test(value)) {
      content.textContent = 'Numer nie może zawierać liter';
    }
    else if (/[^0-9]/.test(value)) {
      content.textContent = 'Numer nie może zawierać znaków specjalnych';
    }
    else if (value.length !== 9) {
      content.textContent = 'Numer musi zawierać 9 cyfr';
    }
    else {
      content.textContent = 'Numer jest poprawny';
    }
  });

})();   
