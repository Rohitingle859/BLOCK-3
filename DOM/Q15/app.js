const input = document.getElementById('task-input');
    const addBtn = document.getElementById('add-btn');
    const list = document.getElementById('task-list');

    // Add task when button clicked
    addBtn.addEventListener('click', () => {
      const text = input.value.trim();
      if (text === '') {
        alert("Please enter a task."); // prevent empty task
        return;
      }

      // Create list item
      const li = document.createElement('li');

      const span = document.createElement('span');
      span.textContent = text;

  
      const completeBtn = document.createElement('button');
      completeBtn.textContent = 'Complete';
      completeBtn.addEventListener('click', () => {
        span.classList.toggle('completed');
      });

  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => {
        list.removeChild(li);
      });

    
      li.appendChild(span);
      li.appendChild(completeBtn);
      li.appendChild(deleteBtn);
      list.appendChild(li);

      input.value = ''; 
      input.focus();
    });


    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        addBtn.click();
      }
    });
