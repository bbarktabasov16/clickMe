// let elem = document.getElementById('names')

// let test = () => {
//     elem.innerHTML = "Salam"
//     document.body.style.color="pink"
//     document.body.style.backgroundImage='url(https://media.istockphoto.com/id/1792829188/photo/sparkler-happy-new-year-2024-with-fireworks.jpg?s=1024x1024&w=is&k=20&c=bn1jDgyHTHO5lU-KslMdgb_LcQWf3rzrrq6eUIY4zz4=)'
// }



// let img = document.getElementById('cat')

// let hideCat = () =>{
//     /* if (img.hidden){
//         img.hidden = false
//     }else{
//         img.hidden = true
//     } */

//     img.hidden ? 
//     img.hidden = false :
//     img.hidden = true
// }

// let switchCat = () => {
//     let linkOne = 'https://images.unsplash.com/photo-1547178270-177ae603f6e2?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//     let linkTwo = 'https://media.istockphoto.com/id/1695728684/photo/new-year-with-pets-2024-christmas-background.jpg?s=1024x1024&w=is&k=20&c=9YUDr4-JQ-rvFeHBZHq3s-zYRTKxUtu25W6GV6Q_C5g='

//     img.src === linkOne ?
//     img.src = linkTwo :
//     img.src = linkOne
// }


let switchInput = () => {
    let inputOne = document.getElementById('textOne')
    let inputTwo = document.getElementById('textTwo')
    let text1value = textOne.value;
    textOne.value = textTwo.value;
    textTwo.value = text1value;
}