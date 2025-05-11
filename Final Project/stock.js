class stock
{
    constructor()
    {
        this.stock_returns = [
            { age: "20", rate: "-11.82" }, // 1962
            { age: "21", rate: "18.89" }, // 1963
            { age: "22", rate: "12.97" }, // 1964
            { age: "23", rate: "9.06" }, // 1965
            { age: "24", rate: "-13.09" }, // 1966
            { age: "25", rate: "20.09" }, // 1967
            { age: "26", rate: "7.66" }, // 1968
            { age: "27", rate: "-11.36" }, // 1969
            { age: "28", rate: ".10" }, // 1970
            { age: "29", rate: "10.79" }, // 1971
            { age: "30", rate: "15.63" }, // 1972
            { age: "31", rate: "-17.37" }, // 1973
            { age: "32", rate: "-29.72" }, // 1974
            { age: "33", rate: "31.55" }, // 1975
            { age: "34", rate: "19.15" }, // 1976
            { age: "35", rate: "-11.5" }, // 1977
            { age: "36", rate: "1.06" }, // 1978
            { age: "37", rate: "12.31" }, // 1979
            { age: "38", rate: "25.77" }, // 1980
            { age: "39", rate: "-9.73" }, // 1981

            { age: "40", rate: "14.76" }, // 1982
            { age: "41", rate: "17.27" }, // 1983
            { age: "42", rate: "1.4" }, // 1984
            { age: "43", rate: "26.33" }, // 1985
            { age: "44", rate: "14.62" }, // 1986
            { age: "45", rate: "2.03" }, // 1987
            { age: "46", rate: "12.4" }, // 1988
            { age: "47", rate: "27.25" }, // 1989
            { age: "48", rate: "-6.56" }, // 1990
            { age: "49", rate: "26.31" }, // 1991
            { age: "50", rate: "4.46" }, // 1992
            { age: "51", rate: "7.06" }, // 1993
            { age: "52", rate: "-1.54" }, // 1994
            { age: "53", rate: "34.11" }, // 1995
            { age: "54", rate: "20.26" }, // 1996
            { age: "55", rate: "31.01" }, // 1997
            { age: "56", rate: "26.67" }, // 1998
            { age: "57", rate: "19.53" }, // 1999
            { age: "58", rate: "-10.14" }, // 2000
            { age: "59", rate: "-13.04" }, // 2001
            { age: "60", rate: "-23.37" }, // 2002
            { age: "61", rate: "26.38" }, // 2003
            { age: "62", rate: "8.99" }, // 2004
            { age: "63", rate: "3.00" }, // 2005
            { age: "64", rate: "13.62" }, // 2006
            { age: "65", rate: "3.53" }, // 2007
            { age: "66", rate: "-38.49" }, // 2008
            { age: "67", rate: "23.45" }, // 2009
            { age: "68", rate: "12.78" }, // 2010
            { age: "69", rate: "0.0" }, // 2011
            { age: "70", rate: "13.41" }, // 2012
            { age: "71", rate: "29.6" }, // 2013
            { age: "72", rate: "11.39" }, // 2014
            { age: "73", rate: "-0.73" }, // 2015
            { age: "74", rate: "9.54" }, // 2016
            { age: "75", rate: "19.42" }, // 2017
            { age: "76", rate: "-6.24" }, // 2018
            { age: "77", rate: "28.88" }, // 2019
            { age: "78", rate: "16.26" }, // 2020
            { age: "79", rate: "26.89" }, // 2021
            { age: "80", rate: "-19.44" }, // 2022
            { age: "81", rate: "24.23" }, // 2023
            { age: "82", rate: "23.31" }  // 2024
        ];

        this.stock_value = [0]; // Value change of each year get push to this array
        this.stock_graph_y = [10000];

        this.inital_investment = []; // to calculate the tax
        this.ave_price;
        this.sum = 0;

        this.age_graph = [age_va];

        //FOR TAX PURPOSE
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
        translate (860,40);

        translate(-38, -270);  //**********keep copying this box 
        strokeWeight(3);
        fill(241, 227, 176);
        rect(40, 260, 500, 440); // income box x,y,w,h*
    
        pop();

        textSize(20);
        textStyle(BOLD);
        fill(0);
        text("S&P500", 1070, 60);
        
        textStyle(NORMAL);

        text("Stock Value: $" + nf(this.stock_value[this.stock_value.length-1], 1, 2), 900, 85);
        fill(0);
        strokeWeight(3);
        textSize(12);
        
        
        question_mark_job.resize(20,20);   ///Question mark
        image(question_mark_job, 1330, 40);

        //balance sheet
        balance_sheet.equity = round(this.stock_value[this.stock_value.length-1],1);
        
    }


    buy(amt)
    {
        let last = this.stock_value[this.stock_value.length - 1] || 0;
        this.inital_investment.push(amt);
        this.stock_value.push(amt+last);
        this.stock_graph_y.push(this.stock_value[this.stock_value.length - 1]);
        balance_sheet.cash -= amt;
        this.sum += amt;
        
        this.ave_price = (this.sum / this.inital_investment.length);
    }

    grow()
    {
        
        let last = this.stock_value[this.stock_value.length - 1] || 0;
        let rate = parseFloat(this.stock_returns[age_va - 20].rate) / 100;
        let newVal = last * (1 + rate);
        this.stock_value.push(newVal);
        this.age_graph.push(age_va);
        
        
    }       


    sell(amt)
    {
        let last = this.stock_value[this.stock_value.length - 1];
        let gain = (last - this.ave_price) * (amt/this.ave_price);
        this.capital_gain.push(gain);

        if (gain > 0)
        {
            this.tax.push(gain * .20);
            this.sold = true;
        }

        this.sold_amount.push(amt);

        this.cash.push(amt - this.tax[this.tax.length-1]);

        this.stock_value.push(last - amt);

        //balance Sheet
       // balance_sheet.cash += this.cash[this.cash.length-1];

        //income Statement
        incomeStatement.capital_gain = gain;
        incomeStatement.capital_gain_tax = this.tax[this.tax.length-1]; 

        this.afterTAX_income.push(gain-this.tax[this.tax.length-1]);

        
    }


    drawGraph()
    {
        push();
        let maxValue = max(this.stock_value);
        let yStep = 10000;
        while (maxValue / yStep > 10) yStep *= 2;

        //line(875, 427, 1246, 427); // x-axis  371
        line(950, 427, 1321 , 427);
        line(950, 427, 950, 141);   // y-axis

        // x label
        textAlign(CENTER);
       // fill(0);
        textSize(15);
        for (let i = 0; i < this.age_graph.length; i += 5) 
        {
            let x = map(i, 0, this.stock_returns.length - 1, 950 , 1321);
            text(this.age_graph[i], x,  427 + 20);
        }

        // y label
        textAlign(RIGHT);

        for (let i = 0; i <= maxValue; i += yStep) 
        {
            let y = map(i, 0, maxValue, 427, 141);
            text("$" + nf(i, 1, 0), 950 - 10, y + 5);
            //stroke(230);
            strokeWeight(.5);
            line(950, y, 1321, y);
        }

        //graph
        strokeWeight(2);
        noFill();
        stroke(50, 150, 50);
        beginShape();
        for (let i = 0; i < this.stock_value.length; i++) {
        let x = map(i, 0, this.stock_returns.length - 1, 950, 1321);
        let y = map(this.stock_value[i], 0, maxValue, 427, 141);
        vertex(x, y);
        }
        endShape();
        pop();

        if (this.sold) {
      
            textSize(25);
            textStyle(BOLD);
            text("Sold Amount: $" + nf(this.sold_amount[this.sold_amount.length-1], 1, 2), 880 , 210);
            text("Capital Gains: $" + nf(this.capital_gain[this.capital_gain.length-1], 1, 2), 880, 250);
            text("Capital Gains Tax: - $" + nf(this.tax[this.tax.length-1], 1, 2), 880, 290);
            text("After Tax income: $" + nf(this.afterTAX_income[this.afterTAX_income.length-1], 1, 2), 880, 330);

            

            textStyle(NORMAL);

          }
        
        textSize(15);
        textAlign(LEFT);
    }

 
}
