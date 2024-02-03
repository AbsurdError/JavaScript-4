// let elems = document.body.children
// for (let elem of elems){
//     console.log(elem)
// }
// console.log(document.body.firstElementChild)
// console.log(document.body.lastElementChild)
// console.log(document.body.firstElementChild.nextElementSibling)
// console.log(document.body.lastElementChild.previousElementSibling)
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)

// let elem = document.getElementById('num')
// elem.previousElementSibling.style.color = "red";
// console.log(elem)

// let elems = document.querySelectorAll('li');
// let elems = document.querySelectorAll('.item')
// for (let elem of elems){
//     console.log(elem)
// }
// let elem2 = document.querySelector('.list')
// elem2.firstElementChild.style.color = 'blue'
// console.log(elem2.firstElementChild)

// let elem = document.querySelector('.list')
// let item = elem.querySelector('.item4')
// console.log(item)

// let elem = document.getElementById('num');
// console.log(elem.closest('.item4')) // небудет искать

// let elem = document.getElementsByClassName('list');
// console.log(elem)

// let elem = document.getElementById('num');
// elem.style.color = 'red';
// elem.innerHTML = '<h1>Text</h1>';
// console.log(elem.innerHTML)

// let item = document.querySelector('.item4')
// item.outerHTML = '<h4>New Text </h4>';
// console.log(item)

// console.log(document.body.firstChild.data)
// item.innerHTML = document.body.firstChild.data;
// item.textContent = 'My text'

// let elem = document.querySelector('p')
// setTimeout(() => elem.hidden = false, 3500); //пропадание елемента

// let elem = document.querySelector('.alert');
// setTimeout(() => elem.hidden = false, 4000)

// let newElem = document.createElement('div');
// newElem.innerHTML = '<strong>Hello</strong>I love Python'
// document.querySelector('ul').replaceWith(newElem)
// console.log(newElem)
// let elem = document.querySelector('p')
// elem.remove()

// document.querySelector('ul').insertAdjacentHTML('beforeend',
// `
//     <div class="alert">
//         <strong>Hello</strong>I love JavaScript
//     </div>
// `
// )
// 
// let elem2 = document.querySelector('.alert')
// // console.log(elem2.className)
// // setInterval(() => {elem2.classList.toggle('new');
// //     elem2.innerHTML = 'I love Python'    
// // }, 2000)
// // elem2.classList.remove('alert')
// let size = getComputedStyle(elem2, `::before`).fontSize
// console.log(parseInt(size))
// size = parseInt(size)
// elem2.style.marginTop = size*3 + 'px';

// let link = document.querySelector('.link');
// let input = document.querySelector('.input');
// console.log(link.href)
// input.value = 'Vasya'
// console.log()

// let elem = document.createElement('input')
// elem.classList.add('alert')
// elem.setAttribute('class', 'alert')
// elem.setAttribute('placeholder', 'Age')
// elem.setAttribute('name', 'Age')
// document.querySelector('.alert').before(elem)
// console.log(elem.getAttribute('name'))
// elem.removeAttribute('placeholder')
// console.log(elem)
// console.log(elem.hasAttribute('placeholder'))

// // // //index2

let users = [
    {id: 1, name: 'Vasya', surname: 'Ivanov', grade: '5B'},
    {id: 2, name: 'Petya', surname: 'Shishkin', grade: '7A'},
    {id: 3, name: 'Sasha', surname: 'Vasiluev', grade: '9B'},
    {id: 4, name: 'Sogdiyar', surname: 'Petrov', grade: 'childrenhouse'},
    {id: 5, name: 'Ilya', surname: 'Mitroshin', grade: '1kirs'},
    {id: 6, name: 'Misha', surname: 'Burdin', grade: '1Г'},
    {id: 7, name: 'Misha', surname: 'Burdin', grade: '1Г'},
    {id: 8, name: 'Misha', surname: 'Burdin', grade: '1Г'},
    {id: 9, name: 'Misha', surname: 'Burdin', grade: '1Г'},
    {id: 10, name: 'Misha', surname: 'Burdin', grade: '1Г'},
]
let win = [2,6]
let nums = [1,2,3,4,5,6,7,8,9,10]
let elem = document.querySelector('.list');
let del = document.querySelector('body');
setTimeout(() => del.hidden = true, 20000)

for (let user of users){
    elem.insertAdjacentHTML('beforeend',
`
    <div class="card" id="${user.id}" onclick="chek_card(${user.id})">
        <h4 class="name">${user.name}</h4>
        <p class="surname">${user.surname}</p>
        <p class="grade">${user.grade}</p>
    </div>
`
    )
}
function hello(id){
    console.log(id)
    document.getElementById(id).hidden = true;
}
function chek_card(id){
    if(win.includes(id)){
        alert('You Win')
    }
    else{
        alert('Game Over')
        setTimeout(() => document.getElementById(id).hidden = true, 1000)
    }
}