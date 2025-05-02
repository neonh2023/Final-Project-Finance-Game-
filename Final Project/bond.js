
class bond
{
    constructor()
    {
        this.amount = 0;
        this.option = 0;

        //1 year interest rate button
        this.buttonX = 550;
        this.buttonY = 135;
        this.buttonSize = 60;
        this.oney_interest = 0;  // 1962 Age 20

        //10 year interest rate button
        this.buttonX10 = 650;
        this.buttonY10 = 135;
        this.buttonSize10 = 60;
        this.ten_y_interest = 0;  // 1962 Age 20

        this.OneYearInterest = [
            {age: "20", rate: "3.29"}, //1962
            {age: "21", rate: "3.02"}, //1963
            {age: "22", rate: "3.76"}, //1964
            {age: "23", rate: "3.96"}, //1965
            {age: "24", rate: "4.89"}, //1966
            {age: "25", rate: "4.62"}, //1967
            {age: "26", rate: "5.36"}, //1968
            {age: "27", rate: "6.41"}, //1969
            {age: "28", rate: "8.28"}, //1970
            {age: "29", rate: "5.0"}, //1971
            {age: "30", rate: "4.3"}, //1972

            {age: "31", rate: "5.74"}, //1973
            {age: "32", rate: "7.38"}, //1974
            {age: "33", rate: "7.27"}, //1975
            {age: "34", rate: "6.23"}, //1976
            {age: "35", rate: "4.89"}, //1977
            {age: "36", rate: "7"}, //1978
            {age: "37", rate: "10.5"}, //1979
            {age: "38", rate: "11.89"}, //1980
            {age: "39", rate: "14"}, //1981
            
            {age: "40", rate: "14"}, //1982
            {age: "41", rate: "8.7"}, //1983
            {age: "42", rate: "10"}, //1984
            {age: "43", rate: "9"}, //1985
            {age: "44", rate: "7.8"}, //1986
            {age: "45", rate: "6"}, //1987
            {age: "46", rate: "7.2"}, //1988
            {age: "47", rate: "9"}, //1989
            {age: "48", rate: "7.8"}, //1990
            {age: "49", rate: "6.8"}, //1991

            {age: "50", rate: "4.9"}, //1992
            {age: "51", rate: "4.1"}, //1993
            {age: "52", rate: "3.5"}, //1994
            {age: "53", rate: "7.2"}, //1995
            {age: "54", rate: "5.2"}, //1996
            {age: "55", rate: "5.6"}, //1997
            {age: "56", rate: "5.2"}, //1998
            {age: "57", rate: "4.6"}, //1999
            {age: "58", rate: "6.2"}, //2000
            {age: "59", rate: "4.6"}, //2001

            {age: "60", rate: "2.24"}, //2002
            {age: "61", rate: "1.41"}, //2003
            {age: "62", rate: "1.35"}, //2004
            {age: "63", rate: "2.79"}, //2005
            {age: "64", rate: "4.35"}, //2006
            {age: "65", rate: "5.0"}, //2007
            {age: "66", rate: "3.2"}, //2008
            {age: "67", rate: ".4"}, //2009
            {age: "68", rate: ".4"}, //2010
            {age: "69", rate: ".29"}, //2011

        ];

        this.TenYearInterest = [
            { age: "20", rate: "4.06" }, // 1962
            { age: "21", rate: "4.17" }, // 1963
            { age: "22", rate: "4.20" }, // 1964
            { age: "23", rate: "4.29" }, // 1965
            { age: "24", rate: "4.61" }, // 1966
            { age: "25", rate: "4.74" }, // 1967
            { age: "26", rate: "5.37" }, // 1968
            { age: "27", rate: "6.04" }, // 1969
            { age: "28", rate: "7.79" }, // 1970
            { age: "29", rate: "6.24" }, // 1971
            { age: "30", rate: "6.21" }, // 1972
            { age: "31", rate: "6.58" }, // 1973
            { age: "32", rate: "7.27" }, // 1974
            { age: "33", rate: "7.86" }, // 1975
            { age: "34", rate: "7.30" }, // 1976
            { age: "35", rate: "7.42" }, // 1977
            { age: "36", rate: "8.40" }, // 1978
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
            { age: "47", rate: "8.49" }, // 1989
            { age: "48", rate: "8.55" }, // 1990
            { age: "49", rate: "7.86" }, // 1991
            { age: "50", rate: "7.01" }, // 1992
            { age: "51", rate: "5.87" }, // 1993
            { age: "52", rate: "7.09" }, // 1994
            { age: "53", rate: "6.57" }, // 1995
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
            { age: "69", rate: "2.78" }  // 2011
        ];

        this.ThirtyYearInterest = [
            { age: "20", rate: "4.06" }, // 1962
            { age: "21", rate: "4.17" }, // 1963
            { age: "22", rate: "4.20" }, // 1964
            { age: "23", rate: "4.29" }, // 1965
            { age: "24", rate: "4.61" }, // 1966
            { age: "25", rate: "4.74" }, // 1967
            { age: "26", rate: "5.37" }, // 1968
            { age: "27", rate: "6.04" }, // 1969
            { age: "28", rate: "7.79" }, // 1970
            { age: "29", rate: "6.24" }, // 1971
            { age: "30", rate: "6.21" }, // 1972
            { age: "31", rate: "6.58" }, // 1973
            { age: "32", rate: "7.27" }, // 1974
            { age: "33", rate: "7.86" }, // 1975
            { age: "34", rate: "7.30" }, // 1976
            { age: "35", rate: "7.42" }, // 1977
            { age: "36", rate: "8.40" }, // 1978
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
            { age: "47", rate: "8.49" }, // 1989
            { age: "48", rate: "8.55" }, // 1990
            { age: "49", rate: "7.86" }, // 1991
            { age: "50", rate: "7.01" }, // 1992
            { age: "51", rate: "5.87" }, // 1993
            { age: "52", rate: "7.09" }, // 1994
            { age: "53", rate: "6.57" }, // 1995
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
            { age: "69", rate: "2.78" }  // 2011
        ];
        
        
    }

    display()
    {   
        push();
        translate(30, 0);
        
        push();
        translate (500,40);

        translate(-38, -270);  //**********keep copying this box 
        strokeWeight(3);
        fill(241, 227, 176);
        rect(40, 270, 300, 160); // income box x,y,w,h*
        
        pop();

        textSize(20);
        textStyle(BOLD);
        fill(0);
        text("Goverenment Bond", 555, 70);
        textStyle(NORMAL);

        fill(0);
        strokeWeight(3);
        textSize(12);
        
        
        question_mark_job.resize(20,20);   ///Question mark
        image(question_mark_job, 777, 45);


        // 1 Year interest rate
        textSize(15);
        text("1Y", this.buttonX-7, this.buttonY-35);

        strokeWeight(2);
        let distToCenter = dist(mouseX, mouseY, this.buttonX, this.buttonY);

        if (distToCenter < this.buttonSize/2) 
        {
            fill(255, 255, 0);
        }
        else
        {
            fill(255);
        }

        circle(this.buttonX, this.buttonY, this.buttonSize);

        
        if (this.OneYearInterest.age = age_va)
            {
                fill(0);
                text(this.OneYearInterest[age_va-20].rate+ "%", this.buttonX-20, this.buttonY+4);  // interest rate on 1 year bond  
            }



        // 10 Year interest rate
        textSize(15);
        text("10Y", this.buttonX10-7, this.buttonY10-35);

        strokeWeight(2);
        let distToCenter10 = dist(mouseX, mouseY, this.buttonX10, this.buttonY10);

        if (distToCenter10 < this.buttonSize10/2) 
        {
            fill(255, 255, 0);
        }
        else
        {
            fill(255);
        }

        circle(this.buttonX10, this.buttonY10, this.buttonSize10);

        
        if (this.OneYearInterest.age = age_va)
            {
                fill(0);
                text(this.TenYearInterest[age_va-20].rate+ "%", this.buttonX10-20, this.buttonY10+4);  // interest rate on 1 year bond  
            }
                 
        pop();
    }

    

    update(values) 
    {
      Object.assign(this, values);
    }

}