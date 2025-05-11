class balanceSheet 
{
    constructor() 
    {
        // Asset
        this.cash = 0;
        this.equity = 0;
        this.bond = 0;
        this.home = 0;
        this.gold = 0;

        // Liability
        this.mortgage = 0;
        this.car_loan = 0;
        this.student_loan = 0;
        this.credit_card = 0;
    }
  

    display()
    {
        //Balance Sheet
        let x = 55;
        let x2 = 230;

        let x3 = 55;
        let x4 = 230;
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
        textSize(18);       
        translate(0,-20);
        textAlign(LEFT);
        text("Cash ", x, 310);
        text("Equity ", x, 330);
        text("Bond ", x, 350);
        text("Home", x, 370);
        text("Gold", x, 390);

        textAlign(RIGHT);
        text(int(this.cash), x2, 310);
        text(str(this.equity), x2, 330);
        text(str(this.bond), x2, 350);
        text(int(this.home), x2, 370);
        text(str(this.gold), x2, 390);


        


        line (40, 400, 240, 400); // Just a line
        textStyle(BOLD);
        textAlign(LEFT);
        text("Asset", x, 425);

        textAlign(RIGHT);
        text(int(balance_sheet.getAsset()), x2, 425);

        translate(200,20);
        strokeWeight(3);
        fill(241, 227, 176);
        rect(40, 270, 210, 185); // i box x,y,w,h*
        
        fill(0);
        textSize(18);       
        translate(0,-20);
        textStyle(NORMAL);
        textAlign(LEFT);
        text("mortage ", x3, 320);
        text("car loan ", x3, 340);
        text("student loan ",x3, 360);
        text("credit card ", x3, 380);

        textAlign(RIGHT);
        text(int(this.mortgage), x4, 320);
        text(str(this.car_loan), x4, 340);
        text(str(this.student_loan),x4, 360);
        text(str(this.credit_card), x4, 380);

        textStyle(BOLD);
        textAlign(LEFT);
        line (40, 400, 250, 400); // Just a line
        text("Liabilities", x3, 425);
        line (40, 440, 250, 440); // Just a line
        text("Equity", x3, 462);

        //textStyle(NORMAL);
        textAlign(RIGHT);
        line (40, 400, 250, 400); // Just a line
        text(int(balance_sheet.getLiabilities()), x4, 425);
        line (40, 440, 250, 440); // Just a line
        text(int(balance_sheet.getEquity()), x4, 462);

        pop();

    }

    getAsset() 
    {
      return (this.cash + this.equity + this.bond + this.home + this.gold);
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
  