//  document.getElementsByClassName('title');
//  titles

// titles[0]
// titles[1]

// var lis = document.getElementsByTagName('li');

// lis[0];
// lis[2];

// titles

// for(i=0; i < titles.length; i++){
//   console.log(titles[i]);
// }

// var titles = document.getELementsByClassName('title');
// console.log(Array.isArray{titles});
// console.log(Array.isArray(Array.from(titles)));


// Array.from(titles).forEach(function(item){
//    console.log(item);
// })

//  const wrap = document.querySelector('#book-list li:nth-child(2) .name');
//  console.log(wmf);

//  var books = document.querySelector('#book-list .name');
//  console.log(books);

//  books = document.querySelector('#book-list li .name');
// console.log(books);

// Arrow.from(books).forEach(function(book){
//   book.textContent += ' (book titles)';
// });

// const bookList = document.querySelector('#book-list');
// //bookList.innerHTML = '<h2>Books and more books...</h2>';
// bookList.innerHTML += '<p>This is how you add HTML</p>';

// const banner = document.querySelector('#page-banner');

// console.log('#page-banner node type is:', banner.nodeType);

// console.log('#page-banner node type is:', banner.nodeName);

// console.log('#page-banner has child nodes:', banner.hasChildNodes());

// const closedBanner = banner.cloneNode(true);
// console.log(clonedBanner);





// const bookList = document.querySelector('#book-list');

// console.log('book-list next sibling is:', bookList.nextSibling);

// console.log('book-list next element sibling is:', bookList.nextElementSibling);

// console.log('book-list previous sibling is:', bookList.previousSibling);

// console.log('book-list previous element sibling is:', bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML += '<br />Too cool for everyone else!'

// console.log('the parent node is:', bookList.parentNode);


// console.log('the parent node is:', bookList.parentElement.parentElement);

// console.log(bookList.children);

document.addEventListener('DOMContentLoaded', function(){
  var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btns){
  btns.addEventListener('click', function(e){
    const li = e.target.parentElement;

    li.parentNode.removeChild(li);
  });
});


const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
  if(e.target.className == 'delete');{
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});


const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  console.log(value);
});

hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
    list.style.display = "none";
  } else{
    list.style.display = "initial"
  }
});
const hideBox = document.querySelector('#hide')

const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach(function(book){
    const title = book.firstElemenetChild.textContent;
    if(title.toLowerCase().indexOf(term) != -1){
      book.style.display = 'block';
    } else{
      book.style.display = 'none';
    }
  })
});


const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e){
  if(e.target.tagName == "Ll"){
    const targetPanel = document.querySelector(e.target.dataset.target);
      panels.forEach(function(panel){
        if (panel == targetPanel){
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      })
  }
});
})




// const link = document.querySelector('#page-banner a');

// link.addEventListener('click', function(e){
//   e.preventDefault();
//   console.log('navigation ', e.target.textContent, ' was prevented');
// })











