"use strict";

var form = document.querySelector('form');
var input = document.getElementById('form-input');
var alert = document.getElementById('alert');
var items = document.getElementById('item-container');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  var inputValue = input.value.trim();
  if (inputValue === "") {
    return;
  }
  var newItem = document.createElement('li');
  var itemDiv = document.createElement('div');
  var itemCheckbox = document.createElement('input');
  var itemLabel = document.createElement('label');
  var deleteButton = document.createElement('button');
  var deleteIcon = document.createElement('img');
  var itemId = "item-" + Math.random();
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
    var itemToDelete = event.target.closest('li');
    itemToDelete.remove();
    alert.style.display = 'flex';
    setTimeout(function () {
      alert.style.display = 'none';
    }, 10000);
  }
});
alert.querySelector('button').addEventListener('click', function () {
  alert.style.display = 'none';
});