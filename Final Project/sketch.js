
let year = 1941;
let net_worth = 0;
let cash_to_invest = 0;

let incomeStatement;
//Income Statement Math
let income = 0;
let wage = 0;
let interest = 0;
let dividend = 0;
let rent_income = 0;
let Miscellenous = 0;

let expense = 0;
let living_cost = 0;
let mortage = 0;
let income_tax = 0;
let dividend_tax = 0;
let Capital_gain_tax = 0;


let net_income = 0;


function setup() 
{
 createCanvas(windowWidth, windowHeight);
 background(74, 91, 62);
 
 //Year
    fill(248, 230, 181);
    textSize(32);
    text("Year " + str(year) , 30, 50)

 //Net Worth
  textSize(18);
  text("NET WORTH: " + str(net_worth), 30, 120);
  text("Cash to invest: " + str(cash_to_invest), 30, 160);

  textSize(20);
  push();
  translate(130, -25);
  scale(.5);
  triangle(130, 100, 130, 150, 170, 125);
  triangle(170, 100, 170, 150, 210, 125);
  pop();

//Income Statement
   incomeStatement = new IncomeStatement();
   incomeStatement.update({
   wage: 40000,
   interest: 2000,
   dividend: 1000,
   rent_income: 1500,
   miscellaneous: 500,
   living_cost: 25000,
   mortgage: 8000,
   income_tax: 5000,
   dividend_tax: 0,
   capital_gain_tax: 0
   });


}

function draw() 
{
   //income statement
    //Income Statement
  push();
  translate(-10, -50);
  strokeWeight(3);
  fill(241, 227, 176);
  rect(40, 270, 200, 150); // income box x,y,w,h*

  textStyle(BOLD);
  textSize(20);
  text("Income Statement", 40, 260);
  
  fill(0);
  textSize(12);
  line (40, 300, 240, 300); // Just a line
   
   text("Income :       " + str(incomeStatement.getIncome()), 50, 290);
   text("Wage ...............  " + str(incomeStatement.wage), 50, 320);
   text("Interest ...........  " + str(incomeStatement.interest), 50, 340);
   text("Dividend ...........  " + str(incomeStatement.dividend), 50, 360);
   text("rent income ........  " + str(incomeStatement.rent_income), 50, 380);
   text("Miscellenous .......  " + str(incomeStatement.miscellaneous), 50, 400);

  strokeWeight(3);
  fill(241, 227, 176);
  rect(40, 420, 200, 150);  // expense box (x,y*,w,h*)

  fill(0);
  text("Expenses " + str(incomeStatement.getExpenses()), 50, 440);
  line (40, 450, 240, 450); // Just a line
  text("living cost ...............  " + str(incomeStatement.living_cost), 50, 470);
  text("mortgage ...............  " + str(incomeStatement.mortgage), 50, 490);
  text("Income tax ........" + str(incomeStatement.income_tax), 50, 510);
  text("Dividend tax ........" + str(incomeStatement.dividend_tax), 50, 530); 
  text("Capital Gain tax ........" + str(incomeStatement.capital_gain_tax), 50, 550); 


  strokeWeight(3);
  fill(241, 227, 176);
  rect(40, 570 , 200, 30);  // net income box (x,y*,w,h*)

  fill(0);
  text("Net Income: " + str(net_income), 50, 590);

  pop();

  



}
