const link=document.querySelector("a");
link.textContent="Mozilla Developer Network";
link.href="https://developer.mozilla.org";

//there is document.getElementById() which
//is deprecated but is a type of specific query
//selector

//also is Document.getElementsByTagName()
//which returns an array of all the items
//with that tag name ex: <p>


//create a new paragraph
const sect=document.querySelector("section");
const para=document.createElement("p");
para.textContent="We hope you enjoyed the ride.";
sect.appendChild(para);

//create some more text to go inside the paragraph
const text=document.createTextNode(`
     - the pr temier source for web development knowledge.`,);
const linkPara=document.querySelector("p");
linkPara.appendChild(text);

//manipulating styles inline with js
// para.style.color="white";
// para.style.backgroundColor="black";
// para.style.padding='10px';
// para.style.width="250px";
// para.style.textAlign='center';

//better practice setting styles using css 
//selectors and classes
para.setAttribute("class","highlight");