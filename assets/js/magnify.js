const cardContent = document.getElementById('content');
cardContent.addEventListener('click', magnify);

const closeButton = document.getElementById('close');
closeButton.addEventListener('click', close);

function magnify() {
    console.log('clicked cardContent');
    cardContent.addClass('magnified');
    closeButton.style.display = 'block';
}

function close() {
    console.log('clicked close');
    cardContent.removeClass('magnified');
    closeButton.style.display = 'none';
}
