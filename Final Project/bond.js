
class bond
{
    constructor()
    {
        this.amount = 0;
        this.option = 0;
        this.maturity = 0;

        this.buy_amount = [];
        this.maturity_age = [];
        this.bond_rate=[];



        //1 year interest rate button
        this.buttonX = 580;
        this.buttonY = 175;
        this.buttonSize = 60;
        this.oney_interest = 0;  // 1962 Age 20

        //10 year interest rate button
        this.buttonX10 = this.buttonX + 100;
        this.buttonY10 = this.buttonY;
        this.buttonSize10 = 60;
        this.ten_y_interest = 0;  // 1962 Age 20


        this.OneYearInterest = [
            { age: "20", rate: "3.29" }, // 1962
            { age: "21", rate: "3.02" }, // 1963
            { age: "22", rate: "3.76" }, // 1964
            { age: "23", rate: "3.96" }, // 1965
            { age: "24", rate: "4.89" }, // 1966
            { age: "25", rate: "4.62" }, // 1967
            { age: "26", rate: "5.36" }, // 1968
            { age: "27", rate: "6.41" }, // 1969
            { age: "28", rate: "8.28" }, // 1970
            { age: "29", rate: "5.00" }, // 1971
            { age: "30", rate: "4.30" }, // 1972
            { age: "31", rate: "5.74" }, // 1973
            { age: "32", rate: "7.38" }, // 1974
            { age: "33", rate: "7.27" }, // 1975
            { age: "34", rate: "6.23" }, // 1976
            { age: "35", rate: "4.89" }, // 1977
            { age: "36", rate: "7.00" }, // 1978
            { age: "37", rate: "10.50" }, // 1979
            { age: "38", rate: "11.89" }, // 1980
            { age: "39", rate: "14.00" }, // 1981
            { age: "40", rate: "14.00" }, // 1982
            { age: "41", rate: "8.70" }, // 1983
            { age: "42", rate: "10.00" }, // 1984
            { age: "43", rate: "9.00" }, // 1985
            { age: "44", rate: "7.80" }, // 1986
            { age: "45", rate: "6.00" }, // 1987
            { age: "46", rate: "7.20" }, // 1988
            { age: "47", rate: "9.00" }, // 1989
            { age: "48", rate: "7.80" }, // 1990
            { age: "49", rate: "6.80" }, // 1991
            { age: "50", rate: "4.90" }, // 1992
            { age: "51", rate: "4.10" }, // 1993
            { age: "52", rate: "3.50" }, // 1994
            { age: "53", rate: "7.20" }, // 1995
            { age: "54", rate: "5.20" }, // 1996
            { age: "55", rate: "5.60" }, // 1997
            { age: "56", rate: "5.20" }, // 1998
            { age: "57", rate: "4.60" }, // 1999
            { age: "58", rate: "6.20" }, // 2000
            { age: "59", rate: "4.60" }, // 2001
            { age: "60", rate: "2.24" }, // 2002
            { age: "61", rate: "1.41" }, // 2003
            { age: "62", rate: "1.35" }, // 2004
            { age: "63", rate: "2.79" }, // 2005
            { age: "64", rate: "4.35" }, // 2006
            { age: "65", rate: "5.00" }, // 2007
            { age: "66", rate: "3.20" }, // 2008
            { age: "67", rate: "0.40" }, // 2009
            { age: "68", rate: "0.40" }, // 2010
            { age: "69", rate: "0.29" }, // 2011
            { age: "70", rate: "0.18" }, // 2012
            { age: "71", rate: "0.13" }, // 2013
            { age: "72", rate: "0.11" }, // 2014
            { age: "73", rate: "0.25" }, // 2015
            { age: "74", rate: "0.59" }, // 2016
            { age: "75", rate: "1.20" }, // 2017
            { age: "76", rate: "2.00" }, // 2018
            { age: "77", rate: "2.00" }, // 2019
            { age: "78", rate: "0.37" }, // 2020
            { age: "79", rate: "0.10" }, // 2021
            { age: "80", rate: "2.80" }, // 2022
            { age: "81", rate: "5.08" }, // 2023
            { age: "82", rate: "4.69" }  // 2024
          ];
          

        
        
        
    }

    display()
    {   
        
        push();
        translate (530,40);

        translate(-38, -270);  //**********keep copying this box 
        strokeWeight(3);
        fill(241, 227, 176);
        rect(40, 270, 300, 250); // income box x,y,w,h*
        
        pop();

        textSize(20);
        textStyle(BOLD);
        fill(0);
        text("Goverenment Bond", 585, 70);
        textSize(15);
        text("(CHOOSE MATURITY LENGTH)", 570, 105);
        textStyle(NORMAL);

        fill(0);
        strokeWeight(3);
        textSize(12);
        
        
        question_mark_job.resize(20,20);   ///Question mark
        image(question_mark_job, 805, 45);


        // 1 Year interest rate
        textSize(15);
        text("1Y", this.buttonX-9, this.buttonY-35);

        strokeWeight(2);
        let distToCenter = dist(mouseX, mouseY, this.buttonX, this.buttonY);

        if (distToCenter <= this.buttonSize/2) 
        {
            fill(255, 255, 0);
            if(mousePressed)
            {
                this.option = parseFloat(this.OneYearInterest[age_va - 20].rate);

                this.maturity = 1;
            }
        }
        else
        {
            fill(255);
        }

        circle(this.buttonX, this.buttonY, this.buttonSize);

        
        if (this.OneYearInterest.age = age_va)
            {
                fill(0); // Show the interest rate on 1 year bond 
                text(this.OneYearInterest[age_va-20].rate+ "%", this.buttonX-20, this.buttonY+4);  
            }


        for(let i = 0; i < this.maturity_age.length; i++)
        {
            if (this.maturity_age[i] == age_va) 
            {
                let principal = this.buy_amount[i];
                let rate = this.bond_rate[i];
                let interest = principal * (rate / 100); // convert percentage string to decimal
        
                balance_sheet.cash += principal + round(interest,2);
                incomeStatement.interest += round(interest,2);
                balance_sheet.bond -= principal;
        
                // Remove matured bond from all arrays
                this.buy_amount.splice(i, 1);
                this.maturity_age.splice(i, 1);
                this.bond_rate.splice(i, 1);
                i--; // Adjust index after splice
            }
        }   
    }

    buyBond()
    {
        //incomeStatement.interest = this.amount * this.option;
        balance_sheet.cash =  balance_sheet.cash - this.amount;
        balance_sheet.bond = this.amount; 
        
        append(this.buy_amount,this.amount);
        append(this.maturity_age, age_va + this.maturity);
        append(this.bond_rate, this.option);
    }
    

    update(values) 
    {
      Object.assign(this, values);
    }

}







  /*// 10 Year interest rate
        textSize(15);
        text("10Y", this.buttonX10-9, this.buttonY10-35);

        strokeWeight(2);
        let distToCenter10 = dist(mouseX, mouseY, this.buttonX10, this.buttonY10);

        if (distToCenter10 < this.buttonSize10/2) 
        {
            fill(255, 255, 0);
            if(mousePressed)
                {
                    this.option = this.TenYearInterest[age_va-20].rate;
                    this.maturity = 10;
                }
        }
        else
        {
            fill(255);
        }

        circle(this.buttonX10, this.buttonY10, this.buttonSize10);

        
        if (this.OneYearInterest.age = age_va)
            {
                fill(0);
                text(this.TenYearInterest[age_va-20].rate+ "%", this.buttonX10-20, this.buttonY10+4);  // interest rate on 10 year bond  
            }
          
*/

 /* this.TenYearInterest = [
            { age: "20", rate: "4.06" }, // 1962
            { age: "21", rate: "4.17" }, // 1963
            { age: "22", rate: "4.29" }, // 1964
            { age: "23", rate: "4.17" }, // 1965
            { age: "24", rate: "4.64" }, // 1966
            { age: "25", rate: "4.74" }, // 1967
            { age: "26", rate: "5.37" }, // 1968
            { age: "27", rate: "6.04" }, // 1969
            { age: "28", rate: "7.79" }, // 1970
            { age: "29", rate: "6.27" }, // 1971
            { age: "30", rate: "6.21" }, // 1972
            { age: "31", rate: "6.73" }, // 1973
            { age: "32", rate: "7.46" }, // 1974
            { age: "33", rate: "7.86" }, // 1975
            { age: "34", rate: "7.30" }, // 1976
            { age: "35", rate: "7.44" }, // 1977
            { age: "36", rate: "8.43" }, // 1978
            { age: "37", rate: "9.43" }, // 1979
            { age: "38", rate: "11.43" }, // 1980
            { age: "39", rate: "13.92" }, // 1981
            { age: "40", rate: "13.01" }, // 1982
            { age: "41", rate: "11.10" }, // 1983
            { age: "42", rate: "12.46" }, // 1984
            { age: "43", rate: "10.62" }, // 1985
            { age: "44", rate: "7.67" }, // 1986
            { age: "45", rate: "8.39" }, // 1987
            { age: "46", rate: "8.85" }, // 1988
            { age: "47", rate: "8.55" }, // 1989
            { age: "48", rate: "8.55" }, // 1990
            { age: "49", rate: "7.86" }, // 1991
            { age: "50", rate: "7.01" }, // 1992
            { age: "51", rate: "5.87" }, // 1993
            { age: "52", rate: "7.09" }, // 1994
            { age: "53", rate: "6.58" }, // 1995
            { age: "54", rate: "6.44" }, // 1996
            { age: "55", rate: "6.35" }, // 1997
            { age: "56", rate: "5.26" }, // 1998
            { age: "57", rate: "5.65" }, // 1999
            { age: "58", rate: "6.03" }, // 2000
            { age: "59", rate: "5.02" }, // 2001
            { age: "60", rate: "4.61" }, // 2002
            { age: "61", rate: "4.01" }, // 2003
            { age: "62", rate: "4.27" }, // 2004
            { age: "63", rate: "4.29" }, // 2005
            { age: "64", rate: "4.80" }, // 2006
            { age: "65", rate: "4.63" }, // 2007
            { age: "66", rate: "3.66" }, // 2008
            { age: "67", rate: "3.26" }, // 2009
            { age: "68", rate: "3.22" }, // 2010
            { age: "69", rate: "2.78" }, // 2011
            { age: "70", rate: "1.80" }, // 2012
            { age: "71", rate: "2.35" }, // 2013
            { age: "72", rate: "2.54" }, // 2014
            { age: "73", rate: "2.14" }, // 2015
            { age: "74", rate: "1.84" }, // 2016
            { age: "75", rate: "2.33" }, // 2017
            { age: "76", rate: "2.91" }, // 2018
            { age: "77", rate: "2.14" }, // 2019
            { age: "78", rate: "0.89" }, // 2020
            { age: "79", rate: "1.45" }, // 2021
            { age: "80", rate: "2.94" }, // 2022
            { age: "81", rate: "3.95" }, // 2023
            { age: "82", rate: "4.25" }  // 2024
          ];
          
          this.ThirtyYearInterest = [
            { age: "35", rate: "7.89" }, // 1977
            { age: "36", rate: "8.49" }, // 1978
            { age: "37", rate: "9.28" }, // 1979
            { age: "38", rate: "11.27" }, // 1980
            { age: "39", rate: "13.45" }, // 1981
            { age: "40", rate: "12.76" }, // 1982
            { age: "41", rate: "11.18" }, // 1983
            { age: "42", rate: "12.41" }, // 1984
            { age: "43", rate: "10.79" }, // 1985
            { age: "44", rate: "7.78" }, // 1986
            { age: "45", rate: "8.59" }, // 1987
            { age: "46", rate: "8.96" }, // 1988
            { age: "47", rate: "8.45" }, // 1989
            { age: "48", rate: "8.61" }, // 1990
            { age: "49", rate: "8.14" }, // 1991
            { age: "50", rate: "7.67" }, // 1992
            { age: "51", rate: "6.59" }, // 1993
            { age: "52", rate: "7.37" }, // 1994
            { age: "53", rate: "6.88" }, // 1995
            { age: "54", rate: "6.71" }, // 1996
            { age: "55", rate: "6.61" }, // 1997
            { age: "56", rate: "5.58" }, // 1998
            { age: "57", rate: "5.87" }, // 1999
            { age: "58", rate: "5.94" }, // 2000
            { age: "59", rate: "5.49" }, // 2001
            { age: "60", rate: "5.43" }, // 2002
            { age: "61", rate: "5.0" }, // 2003
            { age: "62", rate: "5.3" }, // 2004
            { age: "63", rate: "4.86" }, // 2005
            { age: "64", rate: "4.91" }, // 2006
            { age: "65", rate: "4.84" }, // 2007
            { age: "66", rate: "4.28" }, // 2008
            { age: "67", rate: "4.08" }, // 2009
            { age: "68", rate: "4.25" }, // 2010
            { age: "69", rate: "3.91" }, // 2011
            { age: "70", rate: "2.92" }, // 2012
            { age: "71", rate: "3.45" }, // 2013
            { age: "72", rate: "3.34" }, // 2014
            { age: "73", rate: "2.84" }, // 2015
            { age: "74", rate: "2.60" }, // 2016
            { age: "75", rate: "2.89" }, // 2017
            { age: "76", rate: "3.11" }, // 2018
            { age: "77", rate: "2.58" }, // 2019
            { age: "78", rate: "1.56" }, // 2020
            { age: "79", rate: "2.06" }, // 2021
            { age: "80", rate: "3.11" }, // 2022
            { age: "81", rate: "4.09" }, // 2023
            { age: "82", rate: "4.41" }  // 2024
          ];
          
*/