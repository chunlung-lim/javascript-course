// let counter = 0;

// If there is NOT something called localStorage item is 'counter', then set counter =0
if(!localStorage.getItem('counter')) {
    console.log('************************')
    localStorage.setItem('counter', 0);
    console.log(counter)
}


function count() {
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter', counter);

    // if (counter % 10 === 0) {
    //     alert(`Count is now ${counter}`);
    // }

}

/*
Add an event listener to the document itself so that it will go through the document first. If not, you will
get an error in the line of click button because when page reads upto this line, button is not define yet.
When addEventListener, you need to indicate what specific even you want to listen to.
It first listen to DOMContentLoaded event which means DOMContentLoaded is wait until the DOM content is loaded.
Then run a function. It this case we are calling anonymous function "function()" function with no name because we just
want to execute whatever that is defined inside curly braces.
*/
document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('h1').innerHTML = localStorage.getItem('counter')
    /*
    This is saying going through HTML page, look for the first button and when a button is clicked
    then call the count function. Pay attention it is "count" NOT "COUNT()".
    This is the same syntax you can use but the one showing is shorted. They mean the same.
    document.querySelector('button').addEventListener('click', count);
    */
    document.querySelector('button').onclick = count;

    // Run count function every 1000ms which is 1s
    // setInterval(count, 1000);

});