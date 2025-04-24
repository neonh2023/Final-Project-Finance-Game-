
let incomeStatement;
let net_worth;
let job_box;



function setup() 
{
 createCanvas(windowWidth, windowHeight);
 background(74, 91, 62);
 
 //Net Worth
   net_Worth = new networth();
   net_Worth.update({
      year: 1941,
      net_worth: 0,
      cash_to_invest: 0
   })

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



   job_box = new job();
   job_box.update({
   wage: 0,
   wage_increase: 25000
   });
}


function draw() 
{
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
}
