openCloseButton = document.querySelector('.openClose');
colorsDiv       = document.querySelector('.colors');
styleTag        = document.querySelector('style');
function openClose(){
    if(openCloseButton.classList.contains('closed')){
        openCloseButton.innerHTML = '<i class="fas fa-eye"></i>';
        openCloseButton.classList.remove('closed');
        colorsDiv.classList.remove('hide');
    }else{
        openCloseButton.innerHTML = '<i class="fas fa-times"></i>';
        openCloseButton.classList.add('closed');
        colorsDiv.classList.add('hide');
    }
}
function changeColor(color){
    styleTag.innerHTML = `:root{ --primary-color: ${color};}`;
    
}