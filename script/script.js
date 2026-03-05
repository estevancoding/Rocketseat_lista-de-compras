const form = document.querySelector('form');
const input = document.getElementById('form-input');
const alert = document.getElementById('alert');
const items = document.getElementById('item-container');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const inputValue = input.value

  if (inputValue.trim() === "") {
      return; 
  }

  const newItem = document.createElement('li');
  const itemDiv = document.createElement('div');
  const itemCheckbox = document.createElement('input');
  const itemLabel = document.createElement('label');
  const deleteButton = document.createElement('button');
  const deleteIcon = document.createElement('img');
  
  const itemId = "item-" + Date.now();
  

  itemLabel.textContent = inputValue;
  itemLabel.htmlFor = itemId;

  newItem.classList.add('flex');
  itemCheckbox.type = 'checkbox';
  itemCheckbox.name = itemId;
  itemCheckbox.id = itemId;

  itemDiv.classList.add('flex');
  items.classList.add('flex');

  deleteButton.classList.add('delete-button');
  deleteButton.type = 'button';

  deleteIcon.src = 'assets/Frame.png';

  deleteButton.append(deleteIcon);
  itemDiv.append(itemCheckbox, itemLabel);

  newItem.append(itemDiv, deleteButton);
  items.append(newItem);
  input.value = "";

});

items.addEventListener('click', function (event) {
  if (event.target.closest('.delete-button')) {
    const itemToDelete = event.target.closest('li');
    itemToDelete.remove();
    alert.style.display = 'flex';
  }
});

alert.querySelector('button').addEventListener('click', function () {
  alert.style.display = 'none';
});