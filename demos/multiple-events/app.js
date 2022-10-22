const removeButtons = document.querySelectorAll('li button');

for(let btn of removeButtons){
    btn.addEventListener('click', function(){
        console.log('YOU CLICKED REMOVE!');
    });
}
