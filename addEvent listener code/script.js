function logKey(event){
    console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener('keydown', logKey);

// or you can do the following

textBox.addEventListener('keydown', function(event) {
    console.log(`You pressed "${event.key}".`);
});

//arrow functions

textbox.addEventListeners('keydown', (event) =>{
    console.log(`You pressed "${event.key}".`);
});
