class house
{
    constructor()
    {
        this.house_cost = 0;  //value of the house

        this.mortgage_true = false; // if the house is mortgaged

        this.mortgage_rate = 
            [
                {"age": 20, "rate": 7.54},
                {"age": 21, "rate": 7.38},
                {"age": 22, "rate": 8.04},
                {"age": 23, "rate": 4.19},
                {"age": 24, "rate": 9.05},
                {"age": 25, "rate": 5.87},
                {"age": 26, "rate": 8.85},
                {"age": 27, "rate": 6.64},
                {"age": 28, "rate": 7.54},
                {"age": 29, "rate": 7.38},
                {"age": 30, "rate": 8.04},
                {"age": 31, "rate": 9.19},
                {"age": 32, "rate": 9.05},
                {"age": 33, "rate": 8.87},
                {"age": 34, "rate": 8.85},
                {"age": 35, "rate": 9.64},
                {"age": 36, "rate": 11.20},
                {"age": 37, "rate": 13.74},
                {"age": 38, "rate": 16.63},
                {"age": 39, "rate": 16.04},
                {"age": 40, "rate": 13.24},
                {"age": 41, "rate": 13.88},
                {"age": 42, "rate": 12.43},
                {"age": 43, "rate": 10.19},
                {"age": 44, "rate": 10.21},
                {"age": 45, "rate": 10.34},
                {"age": 46, "rate": 10.32},
                {"age": 47, "rate": 10.13},
                {"age": 48, "rate": 9.25},
                {"age": 49, "rate": 8.39},
                {"age": 50, "rate": 7.31},
                {"age": 51, "rate": 8.38},
                {"age": 52, "rate": 7.93},
                {"age": 53, "rate": 7.81},
                {"age": 54, "rate": 7.60},
                {"age": 55, "rate": 6.94},
                {"age": 56, "rate": 7.44},
                {"age": 57, "rate": 8.05},
                {"age": 58, "rate": 6.97},
                {"age": 59, "rate": 6.54},
                {"age": 60, "rate": 5.83},
                {"age": 61, "rate": 5.84},
                {"age": 62, "rate": 5.87},
                {"age": 63, "rate": 6.41},
                {"age": 64, "rate": 6.34},
                {"age": 65, "rate": 6.03},
                {"age": 66, "rate": 5.04},
                {"age": 67, "rate": 4.69},
                {"age": 68, "rate": 4.45},
                {"age": 69, "rate": 3.66},
                {"age": 70, "rate": 3.98},
                {"age": 71, "rate": 4.17},
                {"age": 72, "rate": 3.85},
                {"age": 73, "rate": 3.65},
                {"age": 74, "rate": 3.99},
                {"age": 75, "rate": 4.54},
                {"age": 76, "rate": 3.94},
                {"age": 77, "rate": 3.10},
                {"age": 78, "rate": 2.96},
                {"age": 79, "rate": 5.34},
                {"age": 80, "rate": 6.81},
                {"age": 81, "rate": 6.72},
                {"age": 82, "rate": 6.91}
            ]

        this.mortgage_payment = 0;

        this.mortgage_left = 0; // amount of mortgage left

        
    }

     display()
    {
        push();
        translate (860,480);
        
        //**********keep copying this box 
        strokeWeight(3);
        fill(241, 227, 176);
        rect(0, 0, 500, 460); // income box x,y,w,h*

        textSize(20);
        textStyle(BOLD);
        fill(0);
        text("HOUSE VALUE:    $" + int(this.house_cost), 100, 30);
        
        textStyle(NORMAL);

       // text("House Cost: $" + int(this.house_cost), 30, 65);
        text("Mort. pay.: $" + int(this.mortgage_payment), 250, 65);
        text("Mort. inter. rate:" + int(this.mortgage_rate[age_va-20].rate) + "%", 30, 90);
        text("Mortgage: $" + int(this.mortgage_left), 250, 90);
        
        fill(0);
        strokeWeight(3);
        textSize(12);
        
        
        question_mark_job.resize(20,20);   ///Question mark
        image(question_mark_job, 470, 10);

        home_image.resize(450,300);   ///Question mark
        image(home_image, 25, 140);
        
        pop();

        //balance sheet
    //    balance_sheet.gold = round(this.gold_value[this.gold_value.length-1],1);

    }


    buy(amt)
    {
        balance_sheet.cash -= amt;
        balance_sheet.home = amt;
        buy_button_home.remove();
    }

    mortgage(amt)
    {
        balance_sheet.home = amt;

        this.mortgage_payment = (amt * this.mortgage_rate[age_va-20].rate) / (100*12);
        incomeStatement.mortgage_interest = this.mortgage_payment;

        this.mortgage_left = amt;
        balance_sheet.mortgage = this.mortgage_left;
        buy_button_home.remove();
        mortgage_button_home.remove();
        
    }

    pay_mortgage()
    {
        if (this.mortgage_left > 0) 
        {
            this.mortgage_left -= this.mortgage_payment;
            balance_sheet.cash -= this.mortgage_payment;
            balance_sheet.mortgage = this.mortgage_left;
            incomeStatement.mortgage_interest = this.mortgage_payment;
        }
        else
        {
            this.mortgage_left = 0;
        }
    }

    update(values) 
    {
      Object.assign(this, values);
    }
}