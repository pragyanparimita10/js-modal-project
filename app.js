const modal=document.querySelector(".modal");
const openModalButton=document.querySelector(".openModalButton");
const closeModalButton=document.querySelector(".close_modal");
const openModal=()=>{
    modal.classList.remove("close");
}
const closeModal=()=>{
    modal.classList.add("close");
}

openModalButton.addEventListener("click",()=>{
    openModal();
});

closeModalButton.addEventListener("click",()=>{
    closeModal();
});