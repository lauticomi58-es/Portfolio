const form = document.getElementById('todo-form');
const list = document.getElementById('list');
const taskInput = document.getElementById('task');

const save = () => localStorage.setItem('tasks', list.innerHTML);
const load = () => { list.innerHTML = localStorage.getItem('tasks') || ''; attachDelete(); }

const attachDelete = () => {
  document.querySelectorAll('.del').forEach(btn => {
    btn.onclick = () => { btn.parentElement.remove(); save(); }
  });
}

form.onsubmit = (e) => {
  e.preventDefault();
  const li = document.createElement('li');
  li.innerHTML = `<span>${taskInput.value}</span><button class="del">Delete</button>`;
  list.appendChild(li);
  taskInput.value='';
  save();
  attachDelete();
}

load();
