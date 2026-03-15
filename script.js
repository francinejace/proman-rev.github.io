const questions = [

{
type:"single",
q:"What is a deliverable?",
choices:[
"A unique output of a project",
"A resource allocated to the project",
"A checkpoint in the timeline",
"A team member"
],
answer:[0]
},

{
type:"single",
q:"What should a project manager do when packaging is not easy for everyone to open?",
choices:[
"Request a team meeting to decide corrective action",
"Inform the sponsor the project failed",
"Change the test results",
"Tell the customer 60% is acceptable"
],
answer:[0]
},

{
type:"single",
q:"What is a project life cycle?",
choices:[
"Shortest path activities",
"Tasks to deliver product features",
"Series of phases from start to completion",
"Steps to solve a problem"
],
answer:[2]
},

{
type:"single",
q:"Benefit of lessons learned documentation?",
choices:[
"Share best practices",
"Create marketing materials",
"Close the project",
"Punish mistakes"
],
answer:[0]
},

{
type:"single",
q:"Key characteristic of adaptive project management?",
choices:[
"Continuous stakeholder feedback",
"Minimal changes",
"Sequential work only",
"Final delivery at end only"
],
answer:[0]
},

{
type:"single",
q:"If a feature is out of scope what should you do?",
choices:[
"Decline the feature",
"Develop it anyway",
"Mark as dependency",
"Add to scope statement"
],
answer:[0]
},

{
type:"single",
q:"Role of quality assurance?",
choices:[
"Control budget",
"Ensure procedures meet standards",
"Ensure staff qualification",
"Ensure project finishes on time"
],
answer:[1]
},

{
type:"single",
q:"Which scenario demonstrates schedule dependency?",
choices:[
"Working during business hours",
"Waiting for another task to finish",
"Independent work",
"Estimating minimum time"
],
answer:[1]
},

{
type:"single",
q:"What should you do if party date change increases cost?",
choices:[
"Determine cost difference and discuss with customer",
"Cancel venue",
"Remove menu items",
"Invoice customer immediately"
],
answer:[0]
},

{
type:"single",
q:"Which action signifies formal acceptance of the final product?",
choices:[
"Closing vendor contracts",
"Final budget approval",
"Completing paperwork",
"Approval by sponsor and customer"
],
answer:[3]
},

{
type:"single",
q:"Who approves major scope or budget changes?",
choices:[
"Business analyst",
"Project manager",
"Project sponsor",
"Resource manager"
],
answer:[2]
},

{
type:"single",
q:"Which approach fits well-defined tasks and stable requirements?",
choices:[
"Scrum",
"Adaptive",
"Predictive",
"Incremental"
],
answer:[2]
},

{
type:"single",
q:"Which document authorizes the project manager to start the project?",
choices:[
"Project management plan",
"Scope statement",
"Project charter",
"Communication plan"
],
answer:[2]
},

{
type:"single",
q:"What impact does gold plating have?",
choices:[
"Scope increases, cost same",
"Scope increases and cost increases",
"Scope same cost decreases",
"Scope same cost increases"
],
answer:[1]
},

{
type:"single",
q:"Which plan defines team roles and skills?",
choices:[
"Cost management",
"Scope management",
"Schedule management",
"Resource management"
],
answer:[3]
},

{
type:"single",
q:"Which plan outlines work needed to meet objectives?",
choices:[
"Cost plan",
"Scope management plan",
"Resource plan",
"Schedule plan"
],
answer:[1]
},

{
type:"single",
q:"What is project procurement?",
choices:[
"Buying external goods or services",
"Analyzing requirements",
"Identifying funding",
"Planning communications"
],
answer:[0]
},

{
type:"single",
q:"Which document defines what work is included or excluded?",
choices:[
"Baseline",
"Scope statement",
"Business case",
"WBS"
],
answer:[1]
},

{
type:"single",
q:"Using budget from a similar project is which estimate?",
choices:[
"Expert judgement",
"Three point",
"Bottom up",
"Analogous"
],
answer:[3]
},

{
type:"single",
q:"Who oversees daily project activities?",
choices:[
"Project manager",
"Client",
"Vendor",
"Sponsor"
],
answer:[0]
},

{
type:"single",
q:"Which agile artifact is the prioritized list of work?",
choices:[
"Kanban board",
"Backlog",
"User story",
"WBS"
],
answer:[1]
},

{
type:"single",
q:"What is the goal of a Work Breakdown Structure?",
choices:[
"Create org chart",
"Describe stakeholders",
"Break project work into smaller tasks",
"Assign team members"
],
answer:[2]
},

{
type:"single",
q:"What is a vendor?",
choices:[
"Business analyst",
"External supplier",
"Procurement negotiator",
"Sales professional"
],
answer:[1]
},

{
type:"single",
q:"Which communication includes work completed and budget status?",
choices:[
"Contingency plan",
"Business plan",
"Project charter",
"Status update"
],
answer:[3]
},

{
type:"multi",
q:"Characteristics of adaptive project management include:",
choices:[
"Continuous customer feedback",
"Flexible adjustments",
"Strict adherence to original plan"
],
answer:[0,1]
}

];

let score=0;
let answered=0;

const quiz=document.getElementById("quiz");
const scoreBox=document.getElementById("score");
const progress=document.getElementById("progress");

questions.forEach((q,index)=>{

const div=document.createElement("div");
div.className="question";

const title=document.createElement("h3");
title.innerText=(index+1)+". "+q.q;
div.appendChild(title);

q.choices.forEach((choice,i)=>{

const btn=document.createElement("button");
btn.innerText=choice;

btn.onclick=()=>{

if(btn.disabled) return;

btn.disabled=true;

if(q.answer.includes(i)){
btn.classList.add("correct");
score++;
}else{
btn.classList.add("wrong");
}

answered++;

scoreBox.innerText="Score: "+score;

progress.style.width=(answered/questions.length*100)+"%";
};

div.appendChild(btn);

});

quiz.appendChild(div);

});
