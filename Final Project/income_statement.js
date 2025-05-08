class IncomeStatement 
{
    constructor() 
    {
      // Income sources
      this.wage;

      this.interest;
      this.dividend;
      this.capital_gain;
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
      return this.wage + this.interest + this.dividend + this.capital_gain + this.miscellaneous;
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
        let x = 270;
        let x2 = 55;
      //Income Statement
        push();
        translate(-10, -50);
        strokeWeight(3);
        fill(241, 227, 176);
        rect(40, 270, 250, 125); // income box x,y,w,h*

       // textStyle(BOLD);
        textSize(18);
        text("Income Statement", 40, 260);
        
        fill(0);
        textSize(15);
        line (40, 360, 290, 360); // Just a line
        textAlign(LEFT);
        
        text("Wage ", x2, 290);
        text("Interest "  , x2, 310);
        text("Dividend  " , x2, 330);
        text("Capital Gain " , x2, 350);
        textStyle(BOLD);
        text("Income :       " , x2, 380);
        textStyle(NORMAL);

        textAlign(RIGHT);
        text(int(this.wage), x, 290);
        text(str(this.interest), x, 310);
        text(str(this.dividend), x, 330);
        text(int(this.capital_gain), x, 350);
        textStyle(BOLD);
        text(int(incomeStatement.getIncome()), x, 380);
        textStyle(NORMAL);
        //text(int(incomeStatement.getExpenses()), x, 440);


        strokeWeight(3);
        fill(241, 227, 176);
        rect(40, 390, 250, 160);  // expense box (x,y*,w,h*)
        fill(0);
        
        translate(0,-20);
        fill(0);
       // text("Expenses " + int(incomeStatement.getExpenses()), x, 440);
        line (40, 540, 290, 540); // Just a line

        textAlign(LEFT);
        text("living cost", x2, 430);
        text("mortgage", x2, 450);
        text("Income tax", x2, 470);
        text("Dividend tax", x2, 490); 
        text("Capital Gain tax", x2, 510);
        text("Credit Card interest", x2, 530); 

        textStyle(BOLD);
        textAlign(LEFT);
        text("Expenses ", x2, 560);
        textAlign(RIGHT);
        text(int(incomeStatement.getExpenses()), x, 560);

        textStyle(NORMAL);
        textAlign(RIGHT);
        text(int(incomeStatement.living_cost), x, 430);
        text(str(incomeStatement.mortgage_interest), x, 450);
        text(int(this.income_tax), x,470);
        text(str(incomeStatement.dividend_tax), x, 490); 
        text(int(incomeStatement.capital_gain_tax), x, 510);
        text(str(incomeStatement.credit_card_interest), x, 530); 

        translate(0,10);
        strokeWeight(3);
        fill(241, 227, 176);
        rect(40, 560 , 250, 30);  // net income box (x,y*,w,h*)
        this.getIncomeTax();

        textAlign(LEFT);
        textStyle(BOLD);
        fill(0);
        text("Net Income: ", x2, 580);
        textAlign(RIGHT);
        text(int(incomeStatement.getNetIncome()), x, 580);

        pop();

        

    }
  
    update(values) 
    {
      Object.assign(this, values);
    }
  }
  