let question_mark_job;
let cross_job;
let next;
let job_info1;
let job_info2;


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
        translate(35,0);
        push();
        translate (266,40);

        translate(-38, -270);  //**********keep copying this box 
        strokeWeight(3);
        fill(241, 227, 176);
        rect(40, 270, 200, 118); // income box x,y,w,h*
        
        pop();

        text("Job", 350, 30);

        fill(0);
        strokeWeight(3);
        textSize(15);
        
        text("Salary: " + int(this.new_wage()), 280, 70);
        text("Income tax: "+ int(incomeStatement.income_tax), 280, 90);
        
        question_mark_job.resize(20,20);   ///Question mark
        image(question_mark_job, 443, 45);


        if (job_info1 == true)
        {
            this.job_info1();

            if (job_info2 == true)
            {
                this.job_info2();
            }
        }

        pop();
        

    }

    new_wage()
    {
        return this.wage + this.wage_increase;
    }

    job_info1()    ////POP UP TAB
    {
        fill(166, 166, 166, 150);
        rect(0, 0, windowWidth, windowHeight);    ///Make the background grey

        push();
        translate(0,0);

        fill(58, 65, 53);
        
        rect(541,204, 740,500 );

        cross_job.resize(20,20);   ///Cross Mark
        image(cross_job, 1250, 215);

        next.resize(20,20);
        image(next, 1253,439);

        textSize(30);
        fill(241, 227, 176);
        text("Job", 870, 245);

        translate(0, 20)
        textSize(20);
        text ("PRO", 560, 260);
        text("* This is the best way to protect yourself from inflation. If you are the best doctor", 550, 300);
        text("  in the country. Your skill will be valueable to society forever. Society will pay", 552, 330);
        text("  higher amount for your service even in rampant inflationary environment.", 552, 360);

        text("CON ", 560, 410);
        text("* Income from job get tax more than any other income sources.", 552, 450);
        text("* You get taxed at higher rates as you work harder.", 552, 480);
        pop();
    }

    job_info2()    ////POP UP TAB
    {
        fill(166, 166, 166, 150);
        rect(0, 0, windowWidth, windowHeight);    ///Make the background grey

        push();
        translate(0,0);
        fill(58, 65, 53);
        rect(541,204, 740,500 );

        cross_job.resize(20,20);   ///Cross Mark
        image(cross_job, 1250, 215);

        incometax.resize(500, 480);
        image(incometax, 650, 210 );
        

    };
        

    

  
    update(values) 
    {
      Object.assign(this, values);
    }



}