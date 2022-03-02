let submitButton = document.body.querySelector('.submit')

submitButton.addEventListener('click', addItem);

function addItem() {
  let inputBar = document.body.querySelector('.input')
  let newListItem = inputBar.value;
  if(newListItem){
    
  
  let addedListItem = document.createElement('div');
  addedListItem.innerHTML = `
  ${newListItem}
  <i class="fa-solid fa-trash ${newListItem}"></i>
  `
  let resultList = document.body.querySelector('.result-list');
  resultList.appendChild(addedListItem);
  addedListItem.classList.add('result')
  sessionStorage.setItem(`${newListItem}`, `${newListItem}`)
  let listLength = document.body.querySelectorAll('.result').length
  console.log(listLength)
  let deleteBut = document.body.querySelectorAll('.fa-trash')
  let thisDeleteBut = deleteBut[listLength - 1]
  thisDeleteBut.addEventListener('click', function removeItem() {
    thisDeleteBut.parentElement.remove();
    let itemRemoved = document.body.querySelector('.item-removed');
    itemRemoved.style.display = 'block'
    setTimeout(function () {
      itemRemoved.style.display = 'none'
    }, 800)
  })
  inputBar.value = '';
  let itemAdded = document.body.querySelector('.item-added');
  itemAdded.style.display = 'block'
  setTimeout(function () {
    itemAdded.style.display = 'none'
  }, 800)
  let clearItems = document.body.querySelector('.clearitems')
  if (!clearItems) {
    let clearItemsContainer = document.body.querySelector('.clearitemscontainer');
    let clearItemsDiv = document.createElement('div');
    clearItemsDiv.innerText = "Clear Items";
    clearItemsDiv.classList.add('clearitems')
    clearItemsContainer.appendChild(clearItemsDiv);

    clearItems = document.body.querySelector('.clearitems')
    clearItems.addEventListener('click', removeAll)
    function removeAll() {
      let allResults = document.body.querySelectorAll('.result');
      for(i=0;i<allResults.length;i++){
        allResults[i].remove()
      }
      clearItems.remove()
    }
  }
}
}

setInterval(function(){
  let clearItems = document.body.querySelector('.clearitems');
  let allResults = document.body.querySelectorAll('.result');
  if (allResults.length===0){
    if (clearItems){
    clearItems.remove()
    }
  }
},200)




window.onkeydown = function (e) {
  if (e.keyCode == 13) {
    addItem();
  }
};