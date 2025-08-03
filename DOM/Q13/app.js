function isValidColor(str) {
      let s = new Option().style;
      s.color = str;
      return s.color !== '';
    }

    let colorInput = document.getElementById('color-input');
    let textInput = document.getElementById('text-input');
    let changeBgBtn = document.getElementById('change-bg-btn');
    let updateTextBtn = document.getElementById('update-text-btn');
    let box = document.getElementById('box');

    
    changeBgBtn.addEventListener('click', () => {
      let color = colorInput.value.trim();
      if (!color) {
        alert("Invalid color name!");
        return;
      }
      if (!isValidColor(color)) {
        alert("Invalid color name!");
        return;
      }
      box.style.backgroundColor = color;
    });

 
    updateTextBtn.addEventListener('click', () => {
      let newText = textInput.value;
      if (newText.trim() === '') {
        alert("Please enter some text!");
        return;
      }
      box.textContent = newText;
    });