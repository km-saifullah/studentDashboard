// take inputs
let takeInput = (selectorName) => {
  return document.querySelector(selectorName);
};

// buttons
let submitBtn = takeInput(".submitBtn");

let marks = [];

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let firstName = takeInput(".firstName").value;
  let lastName = takeInput(".lastName").value;
  let studentId = takeInput(".sId").value;
  let className = takeInput(".className").value;
  let session = takeInput(".session").value;
  let bangla = takeInput(".bangla").value;
  let english = takeInput(".english").value;
  let math = takeInput(".math").value;
  let physics = takeInput(".physics").value;
  let chemistry = takeInput(".chemistry").value;
  let biology = takeInput(".biology").value;
  marks.push(bangla);
  marks.push(english);
  marks.push(math);
  marks.push(physics);
  marks.push(chemistry);
  marks.push(biology);
  console.log(typeof bangla);
});
