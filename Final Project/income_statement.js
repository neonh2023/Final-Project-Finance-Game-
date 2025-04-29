class IncomeStatement 
{
    constructor() 
    {
      // Income sources
      this.wage;
      this.interest;
      this.dividend;
      this.rent_income;
      this.miscellaneous;
  
      // Expenses
      this.living_cost;
      this.mortgage_interest;
      this.income_tax;
      this.dividend_tax ;
      this.capital_gain_tax;
      this.credit_card_interest;
    }
  
    getIncome() 
    {
      return this.wage + this.interest + this.dividend + this.rent_income + this.miscellaneous;
    }
  
    getExpenses() 
    {
      return int(this.living_cost) + this.mortgage_interest + this.income_tax + this.dividend_tax + this.capital_gain_tax +this.credit_card_interest;
    }
  
    getNetIncome()
    {
      return int(this.getIncome() - this.getExpenses());
    }

    getIncomeTax()
    {
        let tax = 0;
        let income = this.wage;

        if (income > 609350) {
            tax += (income - 609350) * 0.37;
            income = 609350;
        }
        if (income > 243725) {
            tax += (income - 243725) * 0.35;
            income = 243725;
        }
        if (income > 191950) {
            tax += (income - 191950) * 0.32;
            income = 191950;
        }
        if (income > 100525) {
            tax += (income - 100525) * 0.24;
            income = 100525;
        }
        if (income > 47150) {
            tax += (income - 47150) * 0.22;
            income = 47150;
        }
        if (income > 11600) {
            tax += (income - 11600) * 0.12;
            income = 11600; 
        }
        tax += income * 0.10;
        

        this.income_tax = tax;
        return tax;
                
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
        
        text("Income :       " + int(incomeStatement.getIncome()), 50, 290);
        text("Wage ...............  " + int(this.wage), 50, 320);
        text("Interest ...........  " + str(this.interest), 50, 340);
        text("Dividend ...........  " + str(this.dividend), 50, 360);
        text("rent income ........  " + str(this.rent_income), 50, 380);
      

        strokeWeight(3);
        fill(241, 227, 176);
        rect(40, 400, 200, 190);  // expense box (x,y*,w,h*)

        translate(0,-20);
        fill(0);
        text("Expenses " + int(incomeStatement.getExpenses()), 50, 440);
        line (40, 450, 240, 450); // Just a line
        text("living cost ...............  " + int(incomeStatement.living_cost), 50, 470);
        text("mortgage ...............  " + str(incomeStatement.mortgage_interest), 50, 490);
        text("Income tax ........" + int(this.income_tax), 50, 510);
        text("Dividend tax ........" + str(incomeStatement.dividend_tax), 50, 530); 
        text("Capital Gain tax ........" + str(incomeStatement.capital_gain_tax), 50, 550);
        text("Credit Card interest ........" + str(incomeStatement.credit_card_interest), 50, 570); 

        translate(0,15);
        strokeWeight(3);
        fill(241, 227, 176);
        rect(40, 570 , 200, 30);  // net income box (x,y*,w,h*)
        this.getIncomeTax();

        fill(0);
        text("Net Income: " + int(incomeStatement.getNetIncome()), 50, 590);
        

        pop();

        

    }
  
    update(values) 
    {
      Object.assign(this, values);
    }
  }
  