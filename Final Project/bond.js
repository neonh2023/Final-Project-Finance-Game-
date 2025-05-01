
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
        
        pop();
    }

    

    update(values) 
    {
      Object.assign(this, values);
    }

}