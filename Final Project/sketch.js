
let year = 1941;
let net_worth = 0;
let cash_to_invest = 0;

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
  text("Income :       " + str(net_income), 50, 290);
  line (40, 300, 240, 300); // Just a line

  text("Wage ...............  " + str(wage), 50, 320); 
  text("Interest ...........  " + str(interest), 50, 340); 
  text("Dividend ...........  " + str(dividend), 50, 360); 
  text("rent income ........  " + str(rent_income), 50, 380); 
  text("Miscellenous .......  " + str(Miscellenous), 50, 400); 

  strokeWeight(3);
  fill(241, 227, 176);
  rect(40, 420, 200, 150);  // expense box (x,y*,w,h*)

  fill(0);
  text("Expenses " + str(expense), 50, 440);
  line (40, 450, 240, 450); // Just a line
  text("living cost ...............  " + str(living_cost), 50, 470);
  text("mortgage ...............  " + str(mortage), 50, 490); 

  text("Income tax ........" + str(income_tax), 50, 510); 


  strokeWeight(3);
  fill(241, 227, 176);
  rect(40, 570 , 200, 30);  // net income box (x,y*,w,h*)

  fill(0);
  text("Net Income: " + str(net_income), 50, 590);

  pop();

}

function draw() {
  



}
