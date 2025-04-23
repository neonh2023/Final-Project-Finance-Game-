class networth
{
    constructor() 
    {
      this.year = 0;
      this.net_worth = 0;
      this.cash_to_invest = 0; 
    }
  
    getNetWorth() 
    {
      return this.net_worth;
    }
  
    getCashToInvest() 
    {
      return this.cash_to_invest;
    }

    getYear()
    {
        return this.year;
    }
  

    display()
    {
        //Year
        fill(248, 230, 181);
        textSize(32);
        text("Year " + str(net_Worth.getYear()) , 30, 50);

        //Net Worth
        textSize(18);
        text("NET WORTH: " + str(net_Worth.getNetWorth()), 30, 120);
        text("Cash to invest: " + str(net_Worth.getCashToInvest()), 30, 160);

        textSize(20);
        push();
        translate(130, -25);
        scale(.5);
        triangle(130, 100, 130, 150, 170, 125);
        triangle(170, 100, 170, 150, 210, 125);
        pop();

    }
  
    update(values) 
    {
      Object.assign(this, values);
    }
  }
  