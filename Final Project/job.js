class job
{
    constructor()
    {
        this.wage = 0;
        this.wage_increase = 0;
    }


    display()
    {
       
        push();
        translate (266,40);

        translate(-38, -270);  //**********keep copying this box 
        strokeWeight(3);
        fill(241, 227, 176);
        rect(40, 270, 200, 50); // income box x,y,w,h*
        
        pop();

        text("Job", 350, 30);

        fill(0);
        strokeWeight(3);
        textSize(12);
        
        text("Salary: ", 280, 70);
        

    }

    new_wage()
    {
        return this.wage + this.wage_increase;
    }

    update(values) 
    {
      Object.assign(this, values);
    }
}