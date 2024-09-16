//Selectores
const todoBtn = document.querySelector('.todo-button');
const todoInput = document.querySelector('.todo-input');
const todolistul = document.querySelector(".todo-list")
// enent Listeners 
todoBtn.addEventListener("click", addTask);

todolistul.addEventListener("click", checAlldelet );

//Functions 
function addTask(event){
    event.preventDefault(); // prevent form from submitting
    // عايز لما ادوس علي الظرار يطبعلي القيمه الي موجوده في ال انبت 
   console.log(todoInput.value);

   // creat li 
///كداانا عملت li
   const todoLi = document.createElement("li");
   // هضيف كلاس الي ال li
   todoLi.classList.add("todo");

   // create div index li 
   const toDoDiv= document.createElement("div");
   toDoDiv.classList.add("todo-item");
   
   //add input value to div 
   toDoDiv.innerText = todoInput.value;

   // creat button complete 
   const completeBtn =  document.createElement("button");
   completeBtn.classList.add("complete-button");
   completeBtn.innerHTML = '<i class="fa-solid fa-check"></i>';

   //creat trash button
   const trachBtn =  document.createElement("button");
   trachBtn.classList.add("trash-bt");
   trachBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';


   //add  div + button 1 + button 2 => li
todoLi.appendChild(toDoDiv);
todoLi.appendChild(completeBtn);
todoLi.appendChild(trachBtn);


   //add li to ul 
   todolistul.appendChild(todoLi);


   // remove input value 
   todoInput.value  =  "";
   
   
}

function checAlldelet(event){
console.log(event.target)

const item = event.target;

if(item.classList[0] === 'complete-button' ){
 const todo = item.parentElement;

 todo.classList.toggle("completed")

}

if(item.classList[0] === 'trash-bt' ){
    const todo = item.parentElement;

    todo.classList.toggle("fall");
    
    todo.addEventListener("transitionend", ()=>{
        todo.remove();
    })
  
}

}