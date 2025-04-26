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
        translate (266,40);

        translate(-38, -270);  //**********keep copying this box 
        strokeWeight(3);
        fill(241, 227, 176);
        rect(40, 270, 200, 100); // income box x,y,w,h*
        
        pop();

        text("Job", 350, 30);

        fill(0);
        strokeWeight(3);
        textSize(12);
        
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
        text("  higher amount for your service even in ranpant inflationary environment.", 552, 360);

        text("CON ", 560, 410);
        text("* Income from job get tax more than any other income source.", 552, 450);
        text("* You are tax at higher rates as you work harder.", 552, 480);
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
        

    }

    getTaxBreakdown()
    {
        let income = this.wage;
        let breakdown = [];
      
        let brackets = [
          { min: 0, max: 11600, rate: 0.10 },
          { min: 11600, max: 47150, rate: 0.12 },
          { min: 47150, max: 100525, rate: 0.22 },
          { min: 100525, max: 191950, rate: 0.24 },
          { min: 191950, max: 243725, rate: 0.32 },
          { min: 243725, max: 609350, rate: 0.35 },
          { min: 609350, max: Infinity, rate: 0.37 },
        ];
      
        for (let b of brackets) {
          if (income > b.min) {
            let taxable = Math.min(income, b.max) - b.min;
            let tax = taxable * b.rate;
            breakdown.push({
              range: `$${b.min.toLocaleString()} - ${b.max === Infinity ? "$∞" : "$" + b.max.toLocaleString()}`,
              rate: b.rate,
              taxed: taxable,
              taxOwed: tax
            });
          }
        }
      
        return breakdown;
    }
      


    update(values) 
    {
      Object.assign(this, values);
    }



}