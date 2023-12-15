let fosm=document.querySelector('#fosm');

const indicator=()=>{
    fosm.innerHTML="&#xf2cb;";
    fosm.style.color="white";

    setTimeout(()=>{
        fosm.innerHTML="&#xf2ca;"
        
    }, 1000);

    setTimeout(()=>{
        fosm.innerHTML="&#xf2c9;"
        fosm.style.color="yellow";
    }, 2000);

    setTimeout(()=>{
        fosm.innerHTML="&#xf2c8;"
        fosm.style.color="yellow";
    }, 3000);

    setTimeout(()=>{
        fosm.innerHTML="&#xf2c7;"
        fosm.style.color="red";
    }, 4000);
}

indicator();
setInterval(indicator, 5000);