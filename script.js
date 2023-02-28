const h1=document.querySelector('h1');
const p=document.getElementById('msge');

// function(cb = () => {}) {
//    p.innerText="10"
//     cb();
// }

function two(cb = () => {}) {
    p.innerText="9";

    cb();
}

function three(cb = () => {}) {
    p.innerText="8";

    cb();
}

function four(cb = () => {}) {
    p.innerText="7";

    cb();
}

function five(cb=()=>{}) {
    p.innerHTML="6";
    cb();
} 
function six(cb=()=>{}) {
    p.innerHTML="5";
    cb();
} 
function seven(cb=()=>{}) {
    p.innerHTML="4";
    cb();
    

} 
function eight(cb=()=>{}) {
    p.innert="3";
    cb();
} 
function nine(cb=()=>{}) {
    p.innerText="2";
    cb();
} 
function ten(cb=()=>{}) {
    p.innerText="1";
    cb();
}
function message(cb=()=>{}) {
    p.innerText="Happy Independence day";
} 


// one(() => two(() => three(() => four(() => five()) )));

 function greet(e) {
    p.innerText="10";
 setTimeout(() => { 
    p.innerText="9";
     setTimeout(()=>{ 
        p.innerText="8";
        setTimeout(()=>{ 
            p.innerText="7";
            setTimeout(()=>{ 
                p.innerText="6"; 
                setTimeout(()=>{ 
                    p.innerText="5";
                    setTimeout(()=>{ 
                        p.innerText="4";
                        setTimeout(()=>{ 
                            p.innerText="3";
                            setTimeout(()=>{ 
                                p.innerText="2";
                                setTimeout(()=>{ 
                                    p.innerText="1";
                                    setTimeout(()=>{ 
                                        p.innerText="Happy Independence Day";
    
                                        
                                
                                     },1000);

                                    
                            
                                 },1000);
                        
                             },1000);
                    
                         },1000);
                
                     },1000);
            
                 },1000);          
              },1000);    
         },1000);
     },1000);
  }, 1000);
}

greet(e);