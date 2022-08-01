
//DOM Elements
const 
    time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');


    //Show Time 
    function showTime() {
        let today = new Date();
        let hour = today.getHours();
        let min = today.getMinutes();
        let sec = today.getSeconds();

        //Set AM or PM
        const amOrPm= (hour >= 12)? 'PM' : 'AM';
        
        //12 Hour Format. So we dont get 13:00, 14:00, etc but get 1pm...
        hour = hour % 12 || 12;

        //Output the Time
        time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

        setTimeout(showTime, 1000);
    }

    //Add Zeros to get 01 instead of 1
    function addZero(number){
        return (parseInt(number,10) < 10 ? '0' : '') + number;
    }

    //Set Background and Greeting depending on the time
    function setBgGreet() {
        let today = new Date();
        let hour = today.getHours();

        if(hour < 12){
            document.body.style.backgroundImage = 'url("./img/morning.jpg")';
            greeting.textContent = 'Good Morning';
        }else if (hour < 18){
            document.body.style.backgroundImage = 'url("./img/afternoon.jpg")';
            greeting.textContent = 'Good Afternoon';
        }
        else {
            document.body.style.backgroundImage = 'url("./img/night.jpg")';
            greeting.textContent = 'Good Evening';

            //Turn the colorr of everything white so We can see the text
            document.body.style.color = "white"
        }
    }

    //Set Name into Local Storage
    function setName(event) {
        if(event.type === 'keypress'){
            //Make sure enter is pressed. the enter button keycode is '13'
            if(event.which == 13 || event.keyCode == 13){
                localStorage.setItem('name', event.target.innerText);
                //Stops the highlighting. So this means the name is only on 1 line. No 2 lines if they press enter. This blur, then sets off the event again, but this time with the else statement
                name.blur();
            }
        }else {
            localStorage.setItem('name', event.target.innerText);
        }
    }


    //Get Name in Local Storage
    function getName() {
        if(localStorage.getItem('name') === null) {
            name.textContent = '[enter name]';
        }else {
            name.textContent = localStorage.getItem('name');
        }
    }


    //Set Focus into Local Storage
    function setFocus(event) {
        if(event.type === 'keypress'){
            //Make sure enter is pressed. the enter button keycode is '13'
            if(event.which == 13 || event.keyCode == 13){
                localStorage.setItem('focus', event.target.innerText);
                //Stops the highlighting. So this means the name is only on 1 line. No 2 lines if they press enter. This blur, then sets off the event again, but this time with the else statement
                name.blur();
            }
        }else {
            localStorage.setItem('focus', event.target.innerText);
        }
    }

    //Get Focus in Local Storage
    function getFocus() {
        if(localStorage.getItem('focus') === null) {
            focus.textContent = '[enter goal]';
        }else {
            focus.textContent = localStorage.getItem('focus');
        }
    }


    function fillerText(event) {
        let input = event.target.innerText;
        input = event.target.innerText.replace(/\s/g, '');
        

        if(input === '') {
            
            if(event.target.id === 'name'){
                event.target.innerText = '[enter name]'
            } else {
                event.target.innerText = '[enter goal]'
            }
        }
        
        
        
    }


    name.addEventListener('blur', fillerText);
    name.addEventListener('keypress', setName);
    name.addEventListener('blur', setName);
   
    focus.addEventListener('blur', fillerText);
    focus.addEventListener('keypress', setFocus);
    focus.addEventListener('blur', setFocus);
    

    
    






    //Run the Thing

    function runApp() {
        setBgGreet();
        showTime();
        getName();
        getFocus();
    };

    runApp();
    