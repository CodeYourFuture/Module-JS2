// const images = [
//     "./assets/cute-cat-a.png",
//     "./assets/cute-cat-b.jpg",
//     "./assets/cute-cat-c.jpg",
// ];


// Write your code here


document.addEventListener('DOMContentLoaded',function(){
    const images = [
        './animal/cat.jpg',
        "./animal/coala.jpeg",
        "./animal/dog.jpg",
        './animal/panda.jpg'
    ];
    let counter=0;
    let inputTimer=5000;

    const img=document.getElementById('carousel-img');
    img.setAttribute('src',images[counter]);

    // set timer based on input box
    let slideShowTimer=document.getElementById('slideshow-timer');
    const submitTimer=document.getElementById('timer-submit');

    submitTimer.addEventListener('click',function(){
        inputTimer=parseInt(slideShowTimer.value)*1000|| 1000;
        slideShowTimer.value='';
        stopsliding();

    })



    function forwardAction(){
        if(counter===3){
            counter=0;
            img.setAttribute('src',images[counter]);
        }
        else{
            counter++;
            img.setAttribute('src',images[counter]);
        }
        }

    ////setting up backward function
    function backwardAction(){
        if(counter===0){
            counter=3;
            img.setAttribute('src',images[counter]);
        }
        else{
            counter--;
            img.setAttribute('src',images[counter]);
        }
        }


    ///// setting up forward button///////
    const forwardBtn=document.getElementById("forward-btn");
    forwardBtn.addEventListener('click',forwardAction);

    ///////////////set up for backward button/////////////////////////
    const backWard=document.getElementById("backward-btn")
    backWard.addEventListener('click',backwardAction);

    // setiing up stop button 

    function stopsliding(){
        counter=0;
        img.setAttribute('src',images[counter]);
        clearInterval(autoForwardInterval);
        clearInterval(autoBackwardInterval);
    }

    const stop=document.getElementById('stop-btn');
    stop.addEventListener('click',function (){
        stopsliding();
        inputTimer=5000;
    }
    );

    //setting up auto-forward btn
    const autoForward=document.getElementById("auto-forward-btn");
    autoForward.addEventListener('click',function(){
        autoForwardInterval=setInterval(() => {
            
            forwardAction();
            
            
        }, inputTimer);
        clearInterval(autoBackwardInterval);
    })

    // setting up auto backward button
    const autoBackward=document.getElementById("auto-backward-btn");
    autoBackward.addEventListener('click',function (){
        autoBackwardInterval=setInterval(() => {
            backwardAction();
            
        }, inputTimer);
        clearInterval(autoForwardInterval);
    })

    
    
})



// Write your code here