import { useState } from 'react';

export default function MorgageCalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [error, setError] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMonthlyPayment = () => {
    if (!loanAmount || !interestRate || !loanTerm) {
      setError('All input fields are required');
      return;
    }

    const principal = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const years = parseFloat(loanTerm);

    if (
      isNaN(principal) ||
      isNaN(annualRate) ||
      isNaN(years) ||
      principal <= 0 ||
      annualRate <= 0 ||
      years <= 0
    ) {
      setError('please input numeric values');
      return;
    }

    const monthlyRate = annualRate / 100 / 12;
    const numberOfPayments = years * 12;
    //M = P(i(1+i)n)/((1+i)n - 1)
    const numerator =
      principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyRate, numberOfPayments) - 1;

    if (denominator === 0) {
      setError('please input a correct number');
    }

    const calculatedPayment = (numerator / denominator).toFixed(2);
    setMonthlyPayment(calculatedPayment);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateMonthlyPayment();
  };

  const handleReset = () => {
    setLoanAmount('');
    setInterestRate('');
    setLoanTerm('');
  };

  return (
    <div>
      <form>
        Loan:{' '}
        <input
          type="text"
          name="loanAmount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
        Rate:{' '}
        <input
          type="text"
          name="interestRate"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
        Term(year):{' '}
        <input
          type="text"
          name="loanTerm"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {monthlyPayment && !error && (
        <div>
          <h3>Your Estimated Monthly Payment:</h3>
          <p>${monthlyPayment}</p>
        </div>
      )}
    </div>
  );
}

//submit button no server, onClick={handleSubmit} ()=> handleSubmit
//if number or not isNaN
