const openModalButtons = document.querySelectorAll('[data-modal-target]') ; // could be >1 modal buttons
const closedModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay') ;

openModalButtons.forEach(button => {
    button.addEventListener('click', () =>  {
        const modal = document.querySelector(button.dataset.modalTarget) ; // selects each modal from our HTML 
        openModal(modal) ;
    })
});

// Closes a modal when clicking anywhere outside the pop-up 
overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll(".modal.active") ; // We are interested only in active modals 
    modals.forEach(modal => { 
        closeModal(modal) ;

    })
})


closedModalButtons.forEach(button => {
    button.addEventListener('click', () =>  {
        const modal = button.closest('.modal') ; // Finds the closest parent that has a class of "modal"
        closeModal(modal) ;
    })
});



function openModal(modal) { 
    if (modal == null) return ;

    modal.classList.add('active') ;
    overlay.classList.add('active') ;

}

function closeModal(modal) { 
    if (modal == null) return ;

    modal.classList.remove('active') ;
    overlay.classList.remove('active') ;

}