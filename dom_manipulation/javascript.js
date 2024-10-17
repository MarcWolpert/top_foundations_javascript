// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p=document.createElement("p");
p.textContent="Hey I'm red!";
p.style.color="red";
container.appendChild(p);

const h3=document.createElement("h3");
h3.textContent="I'm a blue h3!";
h3.style.color="blue";
container.appendChild(h3);

const div=document.createElement("div");
div.classList.add("innerDiv");
div.style.borderColor="black"
div.style.borderWidth="10px";
div.style.borderStyle="solid";
div.style.backgroundColor="pink";
container.appendChild(div);

const h1=document.createElement("h1");
h1.textContent="I'm in a div";
const p2=document.createElement("p");
p2.textContent="ME TOO!";
div.appendChild(h1);
div.appendChild(p2);

//make button
const button=document.querySelector("#btn");
// button.addEventListener("click",()=>{
//     alert("Hello World");
// });
//button.addEventListener()
// button.onclick=alertFunction;

// function alertFunction(){
//     alert("Alerted!");
// }

//This displays in console the target element
// button.addEventListener("click",function(e){
//     console.log(e.target);
// });

button.addEventListener("click",function(e){
    e.target.style.background=['blue','black','red'][Math.floor(Math.random()*3)]
})


//add a div to the container
const div2=document.createElement("div");
div2.classList.add("div2");



// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

