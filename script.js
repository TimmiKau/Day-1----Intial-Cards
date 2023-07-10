const panels = document.querySelectorAll('.panel') // So getting panels form the html file. 
//This basiclly creates and array of all the panels from the html
//from there we can access them by entering a number. 

panels.forEach(panel => {   //For all panels
    panel.addEventListener('click', () => {  
        removeActiveClasses();
        panel.classList.add('active')
    })  //When a click happends, remove use function "removeActiveClasses" then add "Active" to that panel. 
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')

    }) //This reomves all active statements from the panels.
}

//I am not 100% sure what the =>  thing does. He runs trought some of the tings quite fast. 