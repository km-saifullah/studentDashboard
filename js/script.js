// take inputs
let takeInput = (selectorName) => {
  return document.querySelector(selectorName);
};

// button, sections, student info
let submitBtn = takeInput(".submitBtn");
let studentForm = takeInput(".students_form");
let dashboardDetils = takeInput(".dashboard_details");
let studentName = takeInput(".studentName");
let idNumber = takeInput(".idNumber");
let studnetClass = takeInput(".studnetClass");
let studentSession = takeInput(".studentSession");
let totalMark = takeInput(".totalMark");
let marksInfo = takeInput(".markChart");

dashboardDetils.style.display = "none";

// array for marks
let marks = [];
let totalScore = 0;

// clear input fields
let clearInputs = (inputValue) => {
  takeInput(".firstName").value = "";
  takeInput(".lastName").value = "";
  takeInput(".sId").value = "";
  takeInput(".className").value = "";
  takeInput(".session").value = "";
  takeInput(".bangla").value = "";
  takeInput(".english").value = "";
  takeInput(".math").value = "";
  takeInput(".physics").value = "";
  takeInput(".chemistry").value = "";
  takeInput(".biology").value = "";
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let firstName = takeInput(".firstName").value;
  let lastName = takeInput(".lastName").value;
  let studentId = takeInput(".sId").value;
  let className = takeInput(".className").value;
  let session = takeInput(".session").value;
  let bangla = Number(takeInput(".bangla").value);
  let english = Number(takeInput(".english").value);
  let math = Number(takeInput(".math").value);
  let physics = Number(takeInput(".physics").value);
  let chemistry = Number(takeInput(".chemistry").value);
  let biology = Number(takeInput(".biology").value);
  marks.push(bangla);
  marks.push(english);
  marks.push(math);
  marks.push(physics);
  marks.push(chemistry);
  marks.push(biology);

  if (!firstName && !lastName && !studentId && !className) {
    alert("Please fill up all input felds!");
  } else {
    studentForm.style.display = "none";
    dashboardDetils.style.display = "block";
    studentName.innerHTML = `Student Name: ${firstName} ${lastName}`;
    idNumber.innerHTML = `Student Id: ${studentId}`;
    studnetClass.innerHTML = `Class: ${className}`;
    studentSession.innerHTML = `Session: ${session}`;
    marks.map((mark) => {
      totalScore += mark;
      totalMark.innerHTML = `Total Mark: <span class="score">${totalScore}</span>/600`;
    });

    // Chart
    new Chart(marksInfo, {
      type: "bar",
      data: {
        labels: [
          "Bangla",
          "English",
          "Mathematics",
          "Physics",
          "Chemistry",
          "Biology",
        ],
        datasets: [
          {
            label: "Subject Marks",
            data: marks,
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
  clearInputs();
});
