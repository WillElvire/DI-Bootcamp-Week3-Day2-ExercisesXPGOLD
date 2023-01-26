

/****************************Create A Shopping List***************** */


/**
 * @author: Koua Ekaza Wilfried
 * @description: Create A Shopping List
 * @param: array shoppingList
 * Date : 25/01/2023
 */



//1 Create an empty array. For example: let shoppingList=[].
const shoppingList = [];


//2 Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.
const root = document.getElementById('root');
// Create the form element
const form = document.createElement('form');
// Create the input element
const input = document.createElement('input');
input.type = 'text';

// Create the Add Item button
const addItemButton = document.createElement('button');
addItemButton.textContent = 'Add Item';

// Add the input and button to the form
form.appendChild(input);
form.appendChild(addItemButton);

// Add the form to the root element
root.appendChild(form);

// Add an event listener to the form
/*3 Type what you need to buy in the text input field, then add the new item to the array
 as soon as you click on the “AddItem” button (Hint: create a function named addItem() */
form.addEventListener('submit', event => {
  // Prevent the form from being submitted
  event.preventDefault();

  // Get the value of the input element
  const item = input.value;

  // Add the item to the shopping list
  shoppingList.push(item);

  // Clear the input
  input.value = '';

  // Log the shopping list to the console
  console.log(shoppingList);
});


/*4
Add a “ClearAll” button to the DOM, that when clicked on,
 should call the clearAll() function (see below). 
*/

const clearAllButton = document.createElement('button');
clearAllButton.textContent = 'Clear All';

// Add the Clear All button to the form
form.appendChild(clearAllButton);


/*5
Create a function named clearAll() that should clear out all the items in the shopping list.
*/
// Add an event listener to the Clear All button
clearAllButton.addEventListener('click', () => {
  // Clear the shopping list
  shoppingList.length = 0;

  // Log the shopping list to the console
  console.log(shoppingList);
});
