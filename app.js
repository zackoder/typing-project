const timerElement = document.getElementsByClassName(".time")
const textSEl = document.querySelector("#textS")
const textareaEl = document.querySelector("#textarea")
const quEl = document.querySelector("#qu")
const headerE = document.querySelector(".header")
const submitEl = document.querySelector("#submit")
const resetbtn = document.querySelector("#reset")

resetbtn.addEventListener('click', () =>{
   textSEl.innerHTML = null
   headerE.appendChild(quEl)
   textareaEl.value = null
   document.getElementById('textarea').focus()
})

function desplayText() {
   if (textareaEl !== '') {
      submitEl.addEventListener('click', () => {
         const inptTexterea = textareaEl.value;
         inptTexterea.split('').forEach(Character => {
            const charspan = document.createElement("span")
            charspan.innerText = Character
            textSEl.appendChild(charspan)
         });
         quEl.remove("#qu")
         textareaEl.value = ''
         document.getElementById('textarea').focus()
      })
   }
}
desplayText();


function comparing() {
   textareaEl.addEventListener('input', () =>{
      const arrspans = textSEl.querySelectorAll('span')
      const arrinput = textareaEl.value.split('')
      let correct = true
      arrspans.forEach((charspan, index) => {
         const Character = arrinput[index]
         if (Character == null) {
            charspan.classList.remove('correct')
            charspan.classList.remove('incorrect')
            correct = false
         } else if (Character == charspan.innerText) {
            charspan.classList.add('correct')
            charspan.classList.remove('incorrect')
         } else {
            charspan.classList.remove('correct')
            charspan.classList.add('incorrect')
         }
      });
   })
}
comparing();

