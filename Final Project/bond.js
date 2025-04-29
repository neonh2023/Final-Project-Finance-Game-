
class bond
{
    constructor()
    {
        this.amount = 0;
        this.option = 0;
        this.buttonX = 550;
        this.buttonY = 110;
        this.buttonSize = 50;
    }

    display()
    {   
        
        push();
        translate (500,40);

        translate(-38, -270);  //**********keep copying this box 
        strokeWeight(3);
        fill(241, 227, 176);
        rect(40, 270, 300, 130); // income box x,y,w,h*
        
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

        

    }

    update(values) 
    {
      Object.assign(this, values);
    }

}