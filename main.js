function navSlide() {
    const burger = document.querySelector('.mobileNav');
    const container = document.querySelector('.outside');
    burger.addEventListener('click', () => {
        if(container.style.height == '')
            container.style.height = '335px';
        else
            container.style.height = '';
    });
}
function changeImage(){
    var button = document.getElementsByClassName('rowItem');
    var image = document.getElementById("imageViewImg");
    var link = document.getElementById("imageViewLink");
    for(var i = 0; i < button.length; i++)
    {
        button[i].onclick = function() {
            var newImage = this.querySelector("img");
            image.src = newImage.src;
            link.href = newImage.src;
        }
    }
}
navSlide();
changeImage();