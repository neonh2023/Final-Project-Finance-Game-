class gold
{
    constructor()
    {
        this.goldPrices = [
        35.35, // 1962
        35.25, // 1963
        35.35, // 1964
        35.50, // 1965
        35.40, // 1966
        35.50, // 1967
        43.50, // 1968
        41.00, // 1969
        38.90, // 1970
        44.60, // 1971
        63.84, // 1972
        106.48, // 1973
        183.77, // 1974
        139.29, // 1975
        133.77, // 1976
        161.10, // 1977
        208.10, // 1978
        459.00, // 1979
        594.90, // 1980
        400.00, // 1981
        447.00, // 1982
        380.00, // 1983
        308.00, // 1984
        327.00, // 1985
        390.90, // 1986
        486.50, // 1987
        410.15, // 1988
        401.00, // 1989
        386.20, // 1990
        353.15, // 1991
        333.00, // 1992
        391.75, // 1993
        383.25, // 1994
        387.00, // 1995
        369.00, // 1996
        287.05, // 1997
        288.70, // 1998
        290.25, // 1999
        272.65, // 2000
        276.50, // 2001
        342.75, // 2002
        417.25, // 2003
        435.60, // 2004
        513.00, // 2005
        635.70, // 2006
        836.50, // 2007
        869.75, // 2008
        1087.50, // 2009
        1420.25, // 2010
        1531.00, // 2011
        1664.00, // 2012
        1204.50, // 2013
        1199.25, // 2014
        1060.00, // 2015
        1250.74, // 2016
        1257.12, // 2017
        1268.49, // 2018
        1392.60, // 2019
        1773.73, // 2020
        1798.89, // 2021
        1801.87, // 2022
        1943.00, // 2023
        2388.98, // 2024
        2981.56  // 2025
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
        let current_price = this.goldPrices[age_va - 20];
        let ounce_sell = amt / current_price;
        let total_ounce = this.ounce_total[this.ounce_total.length - 1];

        if (ounce_sell > total_ounce) {
            alert("Not enough gold to sell!");
            return;
        }

        let avg_cost_per_oz = this.inital_investment_gold_dollar / total_ounce;
        let cost_basis = ounce_sell * avg_cost_per_oz;
        let gain = amt - cost_basis;

        this.capital_gain.push(gain);

        let tax_paid = 0;
        if (gain > 0) {
            tax_paid = gain * 0.2;
            this.tax.push(tax_paid);
            this.sold = true;
        } else {
            this.tax.push(0);
        }

        this.sold_amount.push(amt);
        this.cash.push(amt - tax_paid);

        let new_ounce = total_ounce - ounce_sell;
        if (new_ounce < 0) new_ounce = 0;
        this.ounce_total.push(new_ounce);
        this.gold_value.push(new_ounce * current_price);

        incomeStatement.capital_gain += gain;
        incomeStatement.capital_gain_tax += tax_paid;
        this.afterTAX_income.push(gain - tax_paid);

        this.inital_investment_gold_dollar -= cost_basis;
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