const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', ()=> {
    search.classList.toggle('active');
    input.focus();
    flag = true;
})

if(flag){
    search.action = 'https://www.baidu.com'
}