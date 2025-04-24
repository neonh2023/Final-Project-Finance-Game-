class IncomeStatement 
{
    constructor() 
    {
      // Income sources
      this.wage = 0;
      this.interest = 0;
      this.dividend = 0;
      this.rent_income = 0;
      this.miscellaneous = 0;
  
      // Expenses
      this.living_cost = 0;
      this.mortgage = 0;
      this.income_tax = 0;
      this.dividend_tax = 0;
      this.capital_gain_tax = 0;
    }
  
    getIncome() 
    {
      return this.wage + this.interest + this.dividend + this.rent_income + this.miscellaneous;
    }
  
    getExpenses() 
    {
      return this.living_cost + this.mortgage + this.income_tax + this.dividend_tax + this.capital_gain_tax;
    }
  
    getNetIncome()
    {
      return this.getIncome() - this.getExpenses();
    }

    display()
    {
                //Income Statement
        push();
        translate(-10, -50);
        strokeWeight(3);
        fill(241, 227, 176);
        rect(40, 270, 200, 150); // income box x,y,w,h*

       // textStyle(BOLD);
        textSize(18);
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
        text("Net Income: " + str(incomeStatement.getNetIncome()), 50, 590);

        pop();
    }
  
    update(values) 
    {
      Object.assign(this, values);
    }
  }
  