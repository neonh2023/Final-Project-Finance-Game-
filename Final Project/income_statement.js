class IncomeStatement 
{
    constructor() 
    {
      // Income sources
      this.wage = 0;
      this.interest = 0;
      this.dividend = 0;
      this.rent_income = 0;
      this.miscellaneous = 0;
  
      // Expenses
      this.living_cost = 0;
      this.mortgage = 0;
      this.income_tax = 0;
      this.dividend_tax = 0;
      this.capital_gain_tax = 0;
    }
  
    getIncome() 
    {
      return this.wage + this.interest + this.dividend + this.rent_income + this.miscellaneous;
    }
  
    getExpenses() 
    {
      return this.living_cost + this.mortgage + this.income_tax + this.dividend_tax + this.capital_gain_tax;
    }
  
    getNetIncome()
    {
      return this.getIncome() - this.getExpenses();
    }
  
    update(values) 
    {
      Object.assign(this, values);
    }
  }
  