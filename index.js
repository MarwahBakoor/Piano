window.addEventListener('load', ()=>{

    const pads = document.querySelectorAll('.set div');
    const sounds = document.querySelectorAll('.sounds');

pads.forEach((pad,index) =>{
    pad.addEventListener('click', ()=>{
        sounds[index].currentTime =0;
        sounds[index].play();
        console.log( sounds[index]);

    })
})

})
