class balanceSheet 
{
    constructor() 
    {
      // Asset
      this.cash;
      this.equity;
      this.bonds;
      this.home;
  
      // Liability
      this.mortgage;
      this.car_loan;
      this.student_loan;
      this.credit_card;
    }
  
    getAsset() 
    {
      return this.cash + this.equity + this.bonds + this.home;
    }
  
    getLiabilities() 
    {
      return this.mortgage + this.car_loan + this.student_loan + this.credit_card;
    }

    getEquity()
    {
        return balance_sheet.getAsset - balance_sheet.getLiabilities;
    }

    display()
    {
                //Income Statement
        push();
        translate(20, 600);

        translate(-30, -250);
        strokeWeight(3);
        fill(241, 227, 176);
        rect(40, 270, 200, 150); // income box x,y,w,h*

       // textStyle(BOLD);
        textSize(18);
        text("Balance Sheet", 40, 260);
        
        fill(0);
        textSize(12);       
        translate(0,-20);
        text("Cash ...............  " + int(this.cash), 50, 320);
        text("Equity ...........  " + str(this.equity), 50, 340);
        text("Bond ...........  " + str(this.bond), 50, 360);
        text("Home ........  " + str(this.home), 50, 380);

        line (40, 400, 240, 400); // Just a line
        text("Asset :       " + int(balance_sheet.getAsset()), 50, 425);

        translate(200,20);
        strokeWeight(3);
        fill(241, 227, 176);
        rect(40, 270, 200, 185); // i box x,y,w,h*
        
        fill(0);
        textSize(12);       
        translate(0,-20);
        text("mortage ...............  " + int(this.mortgage), 50, 320);
        text("car loan ...........  " + str(this.equity), 50, 340);
        text("student loan ...........  " + str(this.bond), 50, 360);
        text("credit card ........  " + str(this.home), 50, 380);

        line (40, 400, 240, 400); // Just a line
        text("Liabilities :       " + int(balance_sheet.getLiabilities()), 50, 425);
        line (40, 440, 240, 440); // Just a line
        text("Equity :       " + int(balance_sheet.getEquity()), 50, 462);

        pop();

    }
  
    update(values) 
    {
      Object.assign(this, values);
    }


  }
  