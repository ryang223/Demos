const ul = document.querySelector('#cars');
ul.addEventListener('click', (e) => {
    console.log(e.target.getAttribute('data-id'));
    console.log(e.target.dataSet);
});

