'use strict';

document.addEventListener('keydown',event =>{
    const keyName = event.key;

    if(keyName === 'control'){
        return;
    }

    if(event.ctrlKey){
        alert(`Combination of ctrlkey + ${keyName}`);
    }else{
        alert(`You have pressed ${keyName} key`);
    }
},false);

document.addEventListener('keyup',event =>{
    const keyName = event.key;

    if(keyName === 'control'){
        alert('control key was released');
    }
},false); 