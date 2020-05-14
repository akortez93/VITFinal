let popped = 0;

document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "balloon"){
        
                e.target.style.backgroundColor = "white";
                e.target.textContent = "POP!";
                popped++;
                removeEvent(e);
                checkAllPopped();
    }   
});

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 25){
        console.log('Choose Your Prize');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#all-popped');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};