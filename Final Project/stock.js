class stock
{
    constructor()
    {
        this.invest_amount = [];

        this.year = 0;

        this.current_index = 0;
        
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

    }

    display()
    {
        push();
        translate (860,40);

        translate(-38, -270);  //**********keep copying this box 
        strokeWeight(3);
        fill(241, 227, 176);
        rect(40, 270, 800, 800); // income box x,y,w,h*
    
        pop();

        textSize(20);
        textStyle(BOLD);
        fill(0);
        text("S&P500 Index (STOCK Market INDEX)", 1062, 70);
        textStyle(NORMAL);

        fill(0);
        strokeWeight(3);
        textSize(12);
        
        
        question_mark_job.resize(20,20);   ///Question mark
        image(question_mark_job, 1620, 56);




        


    }


    buy(amt)
    {
        this.invest_amount.append(amt);
        this.currentIndex = 0;
    }

    grow(amt)
    {
        this.currentIndex++;
        let last = this.invest_amount[this.invest_amount.length - 1];
        let newValue = last*(1+ this.stock_returns.rate[this.current_index])/100;
        this.invest_amount.push(newValue);

    }


    
}