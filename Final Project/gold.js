class gold
{
    constructor()
    {
        this.goldPrices = [
        35.35, 35.25, 35.35, 35.50, 35.40, 35.50, 43.50, 41.00, 38.90, 44.60,
        63.84, 106.48, 183.77, 139.29, 133.77, 161.10, 208.10, 459.00, 594.90, 400.00,
        447.00, 380.00, 308.00, 327.00, 390.90, 486.50, 410.15, 436.94, 384.00, 362.11,
        343.82, 279.11, 309.73, 384.16, 444.74, 603.46, 695.39, 872.37, 972.35, 1224.53,
        1571.52, 1668.98, 1411.23, 1266.40, 1158.86, 1251.92, 1257.12, 1258.86, 1257.12, 1393.34,
        1393.34, 1393.34, 1393.34, 1393.34, 1393.34, 1393.34, 1393.34, 1393.34, 1393.34, 1393.34,
        1393.34, 1393.34, 1393.34
        ];

        this.margin = 0;

        this.gold_value = [0]; // Value change of each year get push to this array
        this.gold_graph_y = [10000]; //in DOLLARS

        this.ounce = 0;
        this.ounce_total=[0]; // amount of gold have
        this.inital_investment_gold = 0;
         
 

        this.age_graph = [age_va];

        
        //FOR TAX PURPOSE
        this.inital_investment_gold_dollar = 0; 

        this.sold = false;
        this.sold_amount = [];
        this.capital_gain = [];
        this.tax = [];
        this.cash = [];
        this.afterTAX_income = [];

    }

    display()
    {
        push();
        translate (1390,30);
        
        //**********keep copying this box 
        strokeWeight(3);
        fill(241, 227, 176);
        rect(0, 0, 500, 460); // income box x,y,w,h*
        

        textSize(20);
        textStyle(BOLD);
        fill(0);
        text("GOLD", 210, 30);
        
        textStyle(NORMAL);

        text("Gold Value: $" + nf(this.gold_value[this.gold_value.length-1], 1, 2), 30, 65);

        text("Gold Amount: " + nf(this.ounce_total[this.ounce_total.length-1], 1, 2) + "  oz", 30, 95 );
        fill(0);
        strokeWeight(3);
        textSize(12);
        
        
        question_mark_job.resize(20,20);   ///Question mark
        image(question_mark_job, 470, 10);
        
        pop();

        //balance sheet
        balance_sheet.gold = round(this.gold_value[this.gold_value.length-1],1);

    }

    buy(amt)
    {
        this.ounce = amt/this.goldPrices[age_va-20];  //Calculate how many ounces user brought

        let last_gold_ounce = this.ounce_total[this.ounce_total.length-1] ||0; //find how many ounces alread owns

        this.inital_investment_gold += this.ounce; // adding to initial purchase ounce  

        this.inital_investment_gold_dollar += (this.ounce * this.goldPrices[age_va-20]);

        this.ounce_total.push(this.ounce + last_gold_ounce); // adding to most upto date gold amount

        this.gold_value.push(this.ounce_total[this.ounce_total.length - 1] * this.goldPrices[age_va - 20]);    // in DOLLARS

        this.gold_graph_y.push(this.gold_value[this.gold_value.length - 1]);   // IN DOLLARS to make the graph

        balance_sheet.cash -= amt;
    }

    grow()
    {
        let last = this.ounce_total[this.ounce_total.length - 1] || 0;
        let price = this.goldPrices[age_va - 20];

        let newVal = last * price;  //new price of gold

        this.gold_value.push(newVal); // dollars
        this.age_graph.push(age_va);
           
    }

    sell(amt)
    {
        let last = this.ounce_total[this.ounce_total.length - 1] || 0;
        
        let last_dollar = last * this.goldPrices[age_va-1];

        let ounce_sell = amt / this.goldPrices[age_va-1];

        this.ounce_total.push(this.ounce_total[this.ounce_total.length-1] - ounce_sell);

        let gain = (last_dollar - this.inital_investment_gold_dollar) * (amt/this.inital_investment_gold_dollar);

        this.capital_gain.push(gain);

        if (gain > 0)
        {
            this.tax.push(gain * .20);
            this.sold = true;
        }

        this.sold_amount.push(amt);

        this.cash.push(amt - this.tax[this.tax.length-1]);

        this.gold_value.push(last_dollar - amt);

        //income Statement
        incomeStatement.capital_gain = gain;
        incomeStatement.capital_gain_tax = this.tax[this.tax.length-1]; 

        this.afterTAX_income.push(gain-this.tax[this.tax.length-1]);

        this.inital_investment_gold_dollar -= amt;

    }

    drawGraph()
    {
        push();
        translate(0,20);
        let maxValue = max(this.gold_value);
        let yStep = 10000;
        while (maxValue / yStep > 10) yStep *= 2;

        //line(875, 427, 1246, 427); // x-axis  371
        line(1470, 435, 1850 , 435);
        line(1470, 435, 1470, 150 );   // y-axis

        // x label
        textAlign(CENTER);
       // fill(0);
        textSize(15);
        for (let i = 0; i < this.age_graph.length; i += 5) 
        {
            let x = map(i, 0, this.goldPrices.length - 1, 1470 , 1850);
            text(this.age_graph[i], x,  435 + 20);
        }

        // y label
        textAlign(RIGHT);

        for (let i = 0; i <= maxValue; i += yStep) 
        {
            let y = map(i, 0, maxValue, 435, 150);
            text("$" + nf(i, 1, 0), 1470 - 10, y + 5);
            //stroke(230);
            strokeWeight(.5);
            line(1470, y, 1850, y);
        }

        //graph
        strokeWeight(2);
        noFill();
        stroke(50, 150, 50);
        beginShape();
        for (let i = 0; i < this.gold_value.length; i++) {
        let x = map(i, 0, this.goldPrices.length - 1, 1470, 1850);
        let y = map(this.gold_value[i], 0, maxValue, 435, 150);
        vertex(x, y);
        }
        endShape();
        pop();

        if (this.sold) {
      
            textSize(25);
            textStyle(BOLD);
            text("Sold Amount: $" + nf(this.sold_amount[this.sold_amount.length-1], 1, 2), 1470 , 210+20);
            text("Capital Gains: $" + nf(this.capital_gain[this.capital_gain.length-1], 1, 2),1470, 250+20);
            text("Capital Gains Tax: - $" + nf(this.tax[this.tax.length-1], 1, 2), 1470, 290+20);
            text("After Tax income: $" + nf(this.afterTAX_income[this.afterTAX_income.length-1], 1, 2), 1470, 330+20);

            

            textStyle(NORMAL);

          }
        
        textSize(15);
        textAlign(LEFT);
    }

}