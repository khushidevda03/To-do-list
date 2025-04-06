const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const complimentBox = document.getElementById('compliment');
const prioritySelect = document.getElementById('priority');

const compliments = [
  "You're doing amazing! 💖",
  "Great job, superstar! 🌟",
  "One step closer to your dreams! ✨",
  "That was awesome! Keep it up! 💪",
  "You're crushing it! 💥",
  "go ahead,do some more work!👌",
  "that was mindblowing!!🤩"
];

const changeToLightBtn = document.getElementById('changeToLight');
const changeToDarkBtn = document.getElementById('changeToDark');
const changeToPastelBtn = document.getElementById('changeToPastel');

changeToLightBtn.addEventListener('click', () => {
  document.body.classList.remove('dark', 'pastel');
  localStorage.setItem('theme', 'light');
  document.body.classList.add('light');
});

changeToDarkBtn.addEventListener('click', () => {
  document.body.classList.remove('pastel', 'light');
  localStorage.setItem('theme', 'dark');
  document.body.classList.add('dark');
});

changeToPastelBtn.addEventListener('click', () => {
  document.body.classList.remove('dark', 'light');
  localStorage.setItem('theme', 'pastel');
  document.body.classList.add('pastel');
});

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.body.classList.add(savedTheme);
  }
});

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  const priority = prioritySelect.value;
  if (taskText === '') return;

  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('task-checkbox');

  const taskTextNode = document.createElement('span');
  taskTextNode.textContent = taskText;
  
  li.appendChild(checkbox);
  li.appendChild(taskTextNode);
  li.classList.add(priority);

  // Create sticky note for high priority
  if (priority === 'high') {
    const stickyNote = document.createElement('div');
    stickyNote.classList.add('sticky-note');
    stickyNote.textContent = '🚨 Do the work ASAP!!';
    li.appendChild(stickyNote);
  }

  // When checkbox is clicked, mark task as completed
  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed');
    if (li.classList.contains('completed')) {
      showCompliment();
    }
  });

  taskList.appendChild(li);
  taskInput.value = '';
});

function showCompliment() {
  const message = compliments[Math.floor(Math.random() * compliments.length)];
  complimentBox.textContent = message;
  complimentBox.style.opacity = 1;
  setTimeout(() => {
    complimentBox.style.opacity = 0;
  }, 3000);
}
