class networth
{
    constructor() 
    {
      this.age = 20;
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

    getAge()
    {
        return this.age;
    }
  

    display()
    {
        //Year
        fill(248, 230, 181);
        textSize(30);
        text("Age " + this.age , 30, 50);

        //Net Worth
        textSize(20);
        text("NET WORTH: " + str(net_Worth.getNetWorth()), 30, 120);
        text("Cash to invest: " + str(net_Worth.getCashToInvest()), 30, 160);

        // forward sign
        textSize(20);
        push();
        translate(100, -25);
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
  