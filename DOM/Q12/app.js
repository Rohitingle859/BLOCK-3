const ul = document.querySelector('#item-list');
    const button = document.querySelector('#add-btn');

    function styleListItem(li, index) {
      
      if (index % 2 === 1) { 
        li.style.fontWeight = 'bold';
        li.style.fontStyle = 'normal';
        li.style.color = 'blue';
      } else { 
        li.style.fontWeight = 'normal';
        li.style.fontStyle = 'italic';
        li.style.color = 'red';
      }
    }


    Array.from(ul.children).forEach((li, i) => {
      styleListItem(li, i + 1);
    });

    button.addEventListener('click', () => {
      const newItem = document.createElement('li');
      newItem.textContent = 'New Item';
      ul.appendChild(newItem);
      const seq = ul.children.length; 
      styleListItem(newItem, seq);
    });