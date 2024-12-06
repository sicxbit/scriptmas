/*
Grandpa has a Christmas wish list to keep track of all the gifts he wants to ask for. But there’s a problem: if he forgets he’s already added something, the list gets clogged up with duplicates. This happened last year, and he ended up with 8 talking picture frames on Christmas Day!

Your task is to complete the `checkDuplicate()` function 👇 to ensure no duplicates are added to the list. But here’s the tricky part: Grandpa sometimes hits the spacebar more than once, making it harder to spot duplicates.

For example, only one of these entries should be added to the list — the others should be flagged as duplicates:

- "talking picture frames"
- "talking  picture frames"
- "talking picture    frames"
- " talking picture frames "

**Your tasks:**
1. Ensure no duplicates can be added to the list.
2. Account for extra spaces at the beginning/end and between words.
 
**Stretch Goals:**
1. Case Sensitivity: Handle cases where capitalization differs. For example:
   - `"Cat Hammock"` should be flagged as a duplicate of `"cat hammock"`.
   - Preserve Grandpa’s original capitalization (e.g., if `"Cat Hammock"` is added first, that should be added to the list). Do not simply convert all entries to lower case - Grandpa might well want to capitalize some words. 

2. Additional Features: Add functionality to delete or edit items on the list.
*/

// Get references to DOM elements
const itemInput = document.getElementById('item-input')
const addItemButton = document.getElementById('add-item-button')
const shoppingList = document.getElementById('shopping-list')
const listArr = []

const uniqueItems = new Set();

// Function to check item is not duplicate
function checkDuplicate() {

    /* ⚠️ You need to add code to this function! ⚠️*/
    let itemText = itemInput.value.trim();
    const processedText = itemText.replace(/\s+/g, ' ').toLowerCase();
    if (uniqueItems.has(processedText)) {
        alert("this item is already on the list!");
        itemInput.value = '';
    } else {
        uniqueItems.add(processedText)
        listArr.push(itemText)
        renderList()
    }
}

// Function to add an item to the shopping list
function renderList() {
    shoppingList.innerHTML = ''
    listArr.forEach((gift,index) => {
        const listItem = document.createElement('li')
        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editItem(index));
        deleteButton.textContent = 'Delete'; 
        deleteButton.addEventListener('click', () => deleteItem(index));
        

        listItem.textContent = gift
        listItem.appendChild(deleteButton);
        listItem.appendChild(editButton);
        shoppingList.appendChild(listItem);
        
    })
    itemInput.value = ''; // Clear the input field
}

function deleteItem(index) {
    const processedText = listArr[index].replace(/\s+/g, ' ').toLowerCase();
    uniqueItems.delete(processedText);
    listArr.splice(index,1)
    renderList()
}
function editItem(index) {
    const toEdit = listArr[index];
    deleteItem(index);
    itemInput.value = toEdit;
}
// Add event listener to button
addItemButton.addEventListener('click', checkDuplicate)

// Allow adding items by pressing Enter key
itemInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        checkDuplicate()
    }
})
