class balanceSheet 
{
    constructor() 
    {
        // Asset
        this.cash = 0;
        this.equity = 0;
        this.bond = 0;
        this.home = 0;

        // Liability
        this.mortgage = 0;
        this.car_loan = 0;
        this.student_loan = 0;
        this.credit_card = 0;
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
        text("car loan ...........  " + str(this.car_loan), 50, 340);
        text("student loan ...........  " + str(this.student_loan), 50, 360);
        text("credit card ........  " + str(this.credit_card), 50, 380);

        line (40, 400, 240, 400); // Just a line
        text("Liabilities :       " + int(balance_sheet.getLiabilities()), 50, 425);
        line (40, 440, 240, 440); // Just a line
        text("Equity :       " + int(balance_sheet.getEquity()), 50, 462);

        pop();

    }

    getAsset() 
    {
      return (this.cash + this.equity + this.bond + this.home);
    }
  
    getLiabilities() 
    {
      return (this.mortgage + this.car_loan + this.student_loan + this.credit_card);
    }

    getEquity()
    {
        return (this.getAsset() - this.getLiabilities());
    }
  
    update(values) 
    {
      Object.assign(this, values);
    }


  }
  