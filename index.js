const calendarContainer = document.getElementById('calendar-container');
const taskList = document.getElementById('task-list');
const addTaskForm = document.getElementById('add-task-form');



function generateCalendar(selectedDate = new Date()) {
    calendarContainer.innerHTML = '';
  
    const month = selectedDate.getMonth();
    const year = selectedDate.getFullYear();
  
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
  
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
    const headerRow = document.createElement('div');
    headerRow.classList.add('header-row');
    weekdays.forEach(day => {
      const cell = document.createElement('div');
      cell.textContent = day;
      headerRow.appendChild(cell);
    });
    calendarContainer.appendChild(headerRow);
  
    let date = 1;
   
    for (let i = 0; date <= daysInMonth; i++) {
      const row = document.createElement('div');
      row.classList.add('calendar-row');
      for (let j = 0; j < 7; j++) {
        const cell = document.createElement('div');
        if (i === 0 && j < firstDayOfMonth) {
          cell.textContent = '';
        } else if (date > daysInMonth) {
          break;
        } else {
          cell.textContent = date;
          date++;
        }
        row.appendChild(cell);
      }
      calendarContainer.appendChild(row);
    }
  }
  
  generateCalendar(new Date(2024, 3, 1)); 
  
  
  dayElement.addEventListener('click', () => {
      const selectedElements = document.querySelectorAll('.selected');
      selectedElements.forEach(element => element.classList.remove('selected'));
      dayElement.classList.add('selected');
      fetchTasks(date); 
    });

    calendarContainer.appendChild(dayElement);
