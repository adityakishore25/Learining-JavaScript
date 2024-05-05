// document.getElementById('title').setAttribute('class', 'test heading')
// const title = document.getElementById('title')

// title
// title.style.color = 'blue';
// title.style.backgroundColor = 'green'   
// title.style.padding = '15px'
// title.style.borderRadius = '15px'

// title.textContent   // show all the contents
// title.innerHTML // support inner HTML tags as well

// title.innerText // don't display the hidden content
// document.getElementsByClassName('heading')
// document.querySelector('h1') // returns the first h1 tag
// document.querySelector('h2')
// document.querySelector('#title')  // to target a particular id
// document.querySelector('.heading')   // to target a particular class
// document.querySelector('input[type="password"]')        //to select the inout of type password
// document.querySelector('p:first-child')

// const myul = document.querySelector('ul')
// const turngreen = myul.querySelector('li')
// turngreen.style.backgroundColor = 'green' 
// turngreen.style.padding = '15px'
// turngreen.innerText = "ten"
// document.querySelectorAll('li')
// const tempList = document.querySelectorAll('li');  // Not an array but shares properties of array, can't use map
// tempList.style.color = 'pink'  // we can't use it like this
// tempList.forEach( (item) => {  // we can use loop to iterate over the list using arrow function
//   item.style.color = 'orange';
// })
// tempList.forEach(function(l) {  // we can use loop using normal function
//   l.style.backgroundColor = 'pink'
// })
// const myH1 = document.querySelectorAll('h1')
// myH1[0].style.color = 'brown'

// const tempClassList = document.getElementsByClassName('list-item')  // HTMLCollection, different from arrays

// tempClassList.forEach(function(li) {  // can't use loops
//   console.log(li)
// })


// Example assuming tempClassList is a NodeList
Array.from(tempClassList);  // Only for demonstration, not needed for the forEach

// const myConvertedArray = Array.from(tempClassList);  // Declare and convert here

myConvertedArray.forEach(function(li) {
  li.style.color = 'orange';
});
