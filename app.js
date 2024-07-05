// 'use strict'
del_button = document.querySelector('.btn-del')
add_button = document.querySelector('.btn-add')
multipy_button = document.querySelector('.btn-multiply')
divide_button = document.querySelector('.btn-divide')
clear_button = document.querySelector('.btn-clear')
minus_button = document.querySelector('.btn-minus')
equal_button = document.querySelector('.btn-equal')
exp_button = document.querySelector('.btn-exp')
dot_button = document.querySelector('.btn-dot')
rest_button = document.querySelector('.btn_value')
input_screen = document.querySelector('#input')
one = document.querySelector('.one')
two = document.querySelector('.two')
three = document.querySelector('.three')
four = document.querySelector('.four')
five = document.querySelector('.five')
six = document.querySelector('.six')
seven = document.querySelector('.seven')
eight = document.querySelector('.eight')
nine = document.querySelector('.nine')
zero = document.querySelector('.zero')

clear_button.addEventListener('click', function(){
    input_screen.value = ''

})
del_button.addEventListener('click', function(){
    content = input_screen.value
    deleted_value = content.slice(0,-1)
    input_screen.value = deleted_value    

})
equal_button.addEventListener('click', function(){
    solve = input_screen.value
    input_screen.value = eval(solve)



});

one.addEventListener('click', function(){
    value = input_screen.value
    input_screen.value = value.concat('1')
    
})
two.addEventListener('click', function(){
    value = input_screen.value
    input_screen.value = value.concat('2')
    

})
three.addEventListener('click', function(){
    value = input_screen.value
    input_screen.value = value.concat('3')
    

})
four.addEventListener('click', function(){
    value = input_screen.value
    input_screen.value = value.concat('4')
    

})
five.addEventListener('click', function(){
    value = input_screen.value
    input_screen.value = value.concat('5')
    

})
six.addEventListener('click', function(){
    value = input_screen.value
    input_screen.value = value.concat('6')
    

})
seven.addEventListener('click', function(){
    value = input_screen.value
    input_screen.value = value.concat('7')
    

})
eight.addEventListener('click', function(){
    value = input_screen.value
    input_screen.value = value.concat('8')
    

})
nine.addEventListener('click', function(){
    value = input_screen.value
    input_screen.value = value.concat('9')
    

})
zero.addEventListener('click', function(){
    value = input_screen.value
    input_screen.value = value.concat('0')
    

})
multipy_button.addEventListener('click', function(){
    value = input_screen.value
    input_screen.value = value.concat('*')
    

})
dot_button.addEventListener('click', function(){
    value = input_screen.value
    input_screen.value = value.concat('.')
    

})
divide_button.addEventListener('click', function(){
    value = input_screen.value
    input_screen.value = value.concat('/')
    

})
exp_button.addEventListener('click', function(){
    value = input_screen.value
    input_screen.value = value.concat('**')
    

})
add_button.addEventListener('click', function(){
    value = input_screen.value
    input_screen.value = value.concat('+')
    

})
minus_button.addEventListener('click', function(){
    value = input_screen.value
    input_screen.value = value.concat('+')
    

})
let branch;
let git;
console.log(0)




