
let incomeStatement;
let net_worth;
let job_box;

let salaryInput;
let age_va = 20;







function preload()
{
   question_mark_job = loadImage('data/Question_mark.png');
   cross_job = loadImage('data/cross.png');
   next = loadImage('data/next.png');

}

function setup() 
{
 createCanvas(windowWidth, windowHeight);
 background(74, 91, 62);

 //Net Worth
   net_Worth = new networth();
   
//Income Statement
   incomeStatement = new IncomeStatement();
   incomeStatement.update({
   wage: 0,
   interest: 0,
   dividend: 0,
   rent_income: 0,
   miscellaneous: 0,
   living_cost: 0,
   mortgage: 0,
   income_tax: 0,
   dividend_tax: 0,
   capital_gain_tax: 0
   });



   job_box = new job();

   //input salary
   salaryInput = createInput('');
   salaryInput.position(300, 102);
   salaryInput.size(130,20);
   salaryInput.attribute('placeholder', 'Enter starting salary');
   
   
   salaryInput.elt.addEventListener("keydown", function (e) 
   {
      if (e.key === "Enter") 
      {
        let salaryValue = int(salaryInput.value());
        job_box.wage = isNaN(salaryValue) ? 0 : salaryValue;
        incomeStatement.wage = job_box.wage;
      }
   });

   
}


function draw() 
{
   background(74, 91, 62);
   //Net Worth and Age
   /*if(age_va >= 65)
      {
         age_va = 20;
      }
   */

   net_Worth.update({
      age: age_va,
      net_worth: 0,
      cash_to_invest: 0
   })

  

   incomeStatement.display();

   net_Worth.display();

   job_box.display();

}

function mousePressed()
{
   print("mouseX is: ");
   print(mouseX);
   print(", mouseY is: ");
   print(mouseY);

   if (mouseX >= 163 && mouseX <= 206 && mouseY >= 22 && mouseY <= 53) 
   {
      age_va++;
      job_box.wage =  job_box.wage * 1.06;  // Wage increase because of inflation. 
      incomeStatement.wage = job_box.wage;
   }


   // FOR JOB JS
   if (dist(mouseX , mouseY, 443, 45) <= 20) 
   {
      job_info1 = true;
   }
   else if(dist(mouseX , mouseY, 1250, 215) <= 20)
   {
      job_info1 = false;
      job_info2 = false;
   }

   if (dist(mouseX, mouseY, 1262, 447) <= 20)
   {
      job_info2 = true;
   }
   
}

