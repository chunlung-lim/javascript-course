let counter = 0;

function count() {
    counter += 1;
    document.querySelector('h1').innerHTML = counter;

    if (counter % 10 === 0) {
        alert(`Count is now ${counter}`);
    }

}

/*
Add an event listener to the document itself so that it will go through the document first. If not, you will
get an error in the line of click button because when page reads upto this line, button is not define yet.
When addEventListerner, you need to indicate what specific even you want to listen to.
It first listen to DOMContentLoaded event which means DOMContentLoaded is wait until the DOM content is loaded.
Then run a function. It this case we are calling anonymous function "function()" function with no name because we just
want to execute whatever that is defined inside curly braces.
*/
document.addEventListener('DOMContentLoaded', function () {
    /*
    This is saying going through HTML page, look for the first button and when a button is clicked
    then call the count function. Pay attention it is "count" NOT "COUNT()".
    This is the same syntax you can use but the one showing is shorted. They mean the same.
    document.querySelector('button').addEventListener('click', count);
    */
    document.querySelector('button').onclick = count;

});