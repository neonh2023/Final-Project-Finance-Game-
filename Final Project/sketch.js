
let incomeStatement;
let net_worth;
let job_box;

let salaryInput;
let age_va = 20;
let age_time = 20;

let incomeTax;



let living_input;
let living_question1;

let balance_sheet;


let greyFill = "197, 192, 171" ;

let yellowFill = "241, 227, 176";

let enter_button; // for Salary

let enter_button1; // for living cost


//BOND
let bond1; //for class
let bond_invest_amount;  // For input
let buy_button_bond;  //for button


//Stock
let investmentValues = [];
let buy_button_stock;
let sell_button_stock;
let buy_sell;


function preload()
{
   question_mark_job = loadImage('data/Question_mark.png');
   cross_job = loadImage('data/cross.png');
   next = loadImage('data/next.png');
   incometax= loadImage('data/income tax rate.png');
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
   mortgage_interest: 0,
   income_tax: 0,
   dividend_tax: 0,
   capital_gain_tax: 0,
   credit_card_interest: 0
   });


//Balance Sheet
  balance_sheet = new balanceSheet();
  balance_sheet.update({
      cash: 0,
      equity: 0,
      bond: 0,
      home: 0,
      
      mortgage: 0,
      car_loan: 0,
      student_loan: 0,
      credit_card: 0
   });


  

   //input salary
   salaryInput = createInput('');
   salaryInput.position(330, 102);
   salaryInput.size(130,20);
   salaryInput.attribute('placeholder', 'Enter starting salary');
   
   
   salaryInput.elt.addEventListener("keydown", function (e) 
   {
      if (e.key === "Enter") 
      {
         processSalaryInput();
      }
   });

     // Press Enter button - For Salary
    enter_button = createButton('Press Enter');
    enter_button.position(360, 130); 
    enter_button.mousePressed(processSalaryInput);


   //Living Cost input
   living_input = createInput('');
   living_input.position(340, 255);
   living_input.size(130,20);
   living_input.attribute('placeholder', 'Enter Living Cost');
   
   
   living_input.elt.addEventListener("keydown", function (e) 
   {
      if (e.key === "Enter") 
      {
         processLivingInput();
      }
   });


   // Press Enter button - For LivingCost
   enter_button1 = createButton('Press Enter');
   enter_button1.position(365, 285); 
   enter_button1.mousePressed(processLivingInput);


   job_box = new job();



   bond1 = new bond();

   bond1.update({
      amount: 0,
      option: 0
   });


    //BOND input 
    bond_invest_amount = createInput('');
    bond_invest_amount.position(600, 220);
    bond_invest_amount.size(150,20);
    bond_invest_amount.attribute('placeholder', 'Enter Amount');
    
    bond_invest_amount.elt.addEventListener("keydown", function (e) 
    {
       if (e.key === "Enter") 
       {
          processBondInput();
       }
    });
 
      // Press Enter button - For Salary
     buy_button_bond = createButton('BUY');
     buy_button_bond.position(650, 260); 
     buy_button_bond.mousePressed(processBondInput);

    




   //STOCKS
     stock_class = new stock();
     stock_invest_amount = createInput('');
     stock_invest_amount.position(900, 100);
     stock_invest_amount.size(150,20);
     stock_invest_amount.attribute('placeholder', 'Enter Amount');

     stock_invest_amount.elt.addEventListener("keydown", function (e) 
    {
       if (e.key === "Enter") 
       {
           // investmentValues.append(stock_invest_amount);
           processStockInput();
       }
    });
    
    buy_button_stock = createButton('BUY');
    buy_button_stock.position(1078, 102); 
    buy_button_stock.mousePressed(()=>
      {
         processStockInput();
         buy_sell = True;  
      });

     /* sell_button_stock = createButton('SELL');
      sell_button_stock.position(1140, 102); 
      sell_button_stock.mousePressed(()=>
        {
           processStockInput();
           buy_sell = False;  
        });*/
   
   

}


function processStockInput()
{
   if (!isNaN(amt) && amt > 0 && buy_sell == True)
   {
      let stockValue = int(stock_invest_amount.value());
      balance_sheet.equity += isNaN(stockValue) ? 0 : stockValue; 
      stock_class.buy(stockValue);
   }

   /*if (!isNaN(amt) && amt > 0 && buy_sell == False)
      {
         let stockValue = int(stock_invest_amount.value());
         balance_sheet.equity -= isNaN(stockValue) ? 0 : stockValue; 
         stock_class.sell(stockValue);
      } */


}




function processSalaryInput() 
{
   let salaryValue = int(salaryInput.value());
   job_box.wage = isNaN(salaryValue) ? 0 : salaryValue;
   incomeStatement.wage = job_box.wage;
}

function processLivingInput()
{
   let living = int(living_input.value());
   incomeStatement.living_cost = isNaN(living) ? 0 : living;
   
}

function processBondInput()
{
   let bondValue =  int(bond_invest_amount.value());
   bond1.amount = isNaN(bondValue) ? 0: bondValue;
   if (bond1.amount <= balance_sheet.cash && bond1.maturity > 0) 
   {
      bond1.buyBond();
   } 
   else 
   {
      alert("Not Enough Cash! Please press next year button. Or Please Choose a bond first.");
   }
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

   incomeStatement.display();

   net_Worth.display();

   job_box.display();

   living_cost();

   balance_sheet.display();

   bond1.display();
   
   stock_class.display();

   if(age_va == 82)
      {
         fill(0);
         rect(0,0, windowWidth, windowHeight);
         textSize(150);
         fill(255);
         text('Game is over', windowWidth/4, windowHeight/4);
         
         salaryInput.remove();
         living_input.remove();
         enter_button.remove();
         enter_button1.remove();
         bond_invest_amount.remove();
         buy_button_bond.remove();
         stop(secondsFromNow);
      }
      age_va = 65;
      if(age_va >= 65)
         {
            salaryInput.remove();
            enter_button.remove();
            incomeStatement.wage = 0;
            text(BOLD);
            textSize(12);
            text("(ENJOY YOUR RETIREMENT)", 321, 125);
            text(NORMAL);
         }

   
   if (job_info1 == true)
      {
            job_box.job_info1();
            salaryInput.hide();
            living_input.hide();
            enter_button.hide();
            enter_button1.hide();
            bond_invest_amount.hide();
            buy_button_bond.hide();

            if (job_info2 == true)
            {
               job_box.job_info2();
               
            }
      }

   else if (living_question1 == true)
      {
         living_cost_info();
         salaryInput.hide();
         living_input.hide();
         enter_button.hide();
         enter_button1.hide();
         bond_invest_amount.hide();
         buy_button_bond.hide();
      }

   else
   {
      salaryInput.show();
      living_input.show();
      enter_button.show();
      enter_button1.show();
      bond_invest_amount.show();
      buy_button_bond.show();
   }

}

function living_cost()
{
   push();
   translate(40,20);
   push();
   translate (266,190);

   textSize(20);
   strokeWeight(3);
   fill(241, 227, 176);
   text("Living Cost", 50, -12);

   translate(-38, -270);  //**********keep copying this box 
   strokeWeight(3);
  
   rect(40, 270, 200, 100); // income box x,y,w,h*

   pop();
   fill(0);
   strokeWeight(3);
   textSize(15);
   text("Living Cost: "+ int(incomeStatement.living_cost), 280, 220);

   

   question_mark_job.resize(20,20);   ///Question mark
   image(question_mark_job, 443, 195);

   pop();

   

}

function living_cost_info()
{
   push();
        translate(0,0);
        fill(58, 65, 53);
        rect(541,204, 740,500 );

        cross_job.resize(20,20);   ///Cross Mark
        image(cross_job, 1250, 215);

       // next.resize(20,20);
       // image(next, 1253,439);

        textSize(30);
        fill(241, 227, 176);
        text("Living Cost", 830, 245);

        translate(0, 25);
        textSize(20);
        text ("* Each year living cost increases because of inflation.", 560, 260);

        text("* Inflation increase in prices and fall in the purchasing value of money.", 560, 300);

        translate(0, -30);
        text("* The Federal Reserve has a target annual inflation rate of 2%, and", 560, 365);
        text("  it uses monetary policy to keep inflation in check and stabilize the", 560, 390);
        text("  economy when inflation rises above that benchmark", 560, 415);

        text("* Since it is governments promise to inflate the economy at 2%, ", 560, 455);
        text("  it make cash a very bad and dangerous investment. Cash is sure to ", 560, 480);
        text("  lose value over the long term.", 560, 505);

        pop();

}

function mousePressed()
{
  print("mouseX is: ");
   print(mouseX);
   print(", mouseY is: ");
   print(mouseY);

   if (mouseX >= 163 && mouseX <= 206 && mouseY >= 22 && mouseY <= 53)  // Forward Sign
   {
      if(age_va = age_time)  // after i click move to the next year. net income get added to balance sheet cash
         {
            balance_sheet.cash = balance_sheet.cash + int(incomeStatement.getNetIncome());
            age_time++;
            age_va++;

         }

      net_Worth.age = age_va;
      job_box.wage =  job_box.wage * 1.06;  // Wage increase because of inflation. 
      incomeStatement.wage = job_box.wage;

      incomeStatement.living_cost = incomeStatement.living_cost *1.0245;

      incomeStatement.interest = 0;  // Clear interest income for the new year
      bond1.maturity = 0;

   }


   // FOR JOB JS
   if (dist(mouseX , mouseY, 486, 52) <= 20) 
   {
      job_info1 = true;
   }
   else if(dist(mouseX , mouseY, 1250, 215) <= 20)
   {
      job_info1 = false;
      job_info2 = false;
      living_question1 = false;
   }

   if (dist(mouseX, mouseY, 1262, 446) <= 20)
   {
      job_info2 = true;  
     
   }

   if (dist(mouseX , mouseY, 493, 222) <= 20) 
      {
         living_question1 = true;
      }
           
}

