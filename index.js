// document.getElementById(btn).addEventListener("click", function() {

// });



let counter = 4;
let sec = 59;
let myvalue = setInterval(function() {
    sec = sec - 1;

    // counter = counter + 1;


    document.getElementById('time').innerText = sec + "s";
    document.getElementById('min').innerText = counter + "m";

    if (sec == 1) {
        if (counter == 0 && sec == 1) {
            console.log("done");


            clearInterval(myvalue);
            document.getElementById('time').innerText = 0 + "s";
            return;

        }

        counter = counter - 1;
        console.log(counter);
        console.log(sec);

        document.getElementById('min').innerText = counter + "m";
        document.getElementById('time').innerText = 59 + "s";
        sec = 59;
        return sec;

    }

}, 1000);

// function Interval() {
//     clearInterval(myvalue);
// }


// console.log("after");

document.getElementById('stop').addEventListener("click", function() {
    let tame = myvalue;
    console.log(tame);
    clearInterval(myvalue);
    // document.getElementById('stop').innerHTML = "Resume";




});

document.getElementById('resume').addEventListener("click", function() {

    myvalue = setInterval(function() {
        sec = sec - 1;

        // counter = counter + 1;


        document.getElementById('time').innerText = sec + "s";
        document.getElementById('min').innerText = counter + "m";

        if (sec == 1) {
            if (counter == 0 && sec == 1) {
                console.log("done");


                clearInterval(myvalue);
                document.getElementById('time').innerText = 0 + "s";
                return;

            }

            counter = counter - 1;
            console.log(counter);
            console.log(sec);

            document.getElementById('min').innerText = counter + "m";
            document.getElementById('time').innerText = 59 + "s";
            sec = 59;
            return sec;

        }

    }, 1000);

});

document.getElementById('reset').addEventListener("click", function() {
    sec = 59;
    counter = 4;
    clearInterval(myvalue);
    document.getElementById('min').innerText = counter + "m";
    document.getElementById('time').innerText = sec + "s";

    console.log(sec);

});