<script>
  import { trackEvent } from '$lib/analytics'

  let homePrice = 500000
  let downPayment = 100000
  let interestRate = 6.5
  let loanTerm = 30
  let monthlyPayment = 0
  let totalInterest = 0
  let totalCost = 0
  let isCalculated = false

  function calculateMortgage() {
    const principal = homePrice - downPayment
    const monthlyRate = interestRate / 100 / 12
    const numPayments = loanTerm * 12

    if (monthlyRate === 0) {
      monthlyPayment = principal / numPayments
    } else {
      monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                      (Math.pow(1 + monthlyRate, numPayments) - 1)
    }

    totalInterest = (monthlyPayment * numPayments) - principal
    totalCost = homePrice + totalInterest
    isCalculated = true

    trackEvent('mortgage_calculator_used', {
      home_price: homePrice,
      down_payment: downPayment,
      interest_rate: interestRate,
      loan_term: loanTerm,
      monthly_payment: Math.round(monthlyPayment)
    })
  }

  function resetCalculator() {
    homePrice = 500000
    downPayment = 100000
    interestRate = 6.5
    loanTerm = 30
    monthlyPayment = 0
    totalInterest = 0
    totalCost = 0
    isCalculated = false
  }

  // Auto-calculate when values change
  $: if (homePrice || downPayment || interestRate || loanTerm) {
    calculateMortgage()
  }
</script>

<div class="mortgage-calculator">
  <h3>🏠 Mortgage Calculator</h3>
  <p>Estimate your monthly payment for any Las Vegas property</p>
  
  <div class="calculator-form">
    <div class="input-group">
      <label for="home-price">Home Price</label>
      <div class="input-wrapper">
        <span class="currency">$</span>
        <input 
          id="home-price"
          type="number" 
          bind:value={homePrice}
          placeholder="500000"
          min="0"
          step="1000"
        />
      </div>
    </div>

    <div class="input-group">
      <label for="down-payment">Down Payment</label>
      <div class="input-wrapper">
        <span class="currency">$</span>
        <input 
          id="down-payment"
          type="number" 
          bind:value={downPayment}
          placeholder="100000"
          min="0"
          step="1000"
        />
      </div>
    </div>

    <div class="input-group">
      <label for="interest-rate">Interest Rate (%)</label>
      <div class="input-wrapper">
        <input 
          id="interest-rate"
          type="number" 
          bind:value={interestRate}
          placeholder="6.5"
          min="0"
          max="20"
          step="0.1"
        />
        <span class="percent">%</span>
      </div>
    </div>

    <div class="input-group">
      <label for="loan-term">Loan Term (years)</label>
      <div class="input-wrapper">
        <input 
          id="loan-term"
          type="number" 
          bind:value={loanTerm}
          placeholder="30"
          min="1"
          max="50"
          step="1"
        />
        <span class="years">years</span>
      </div>
    </div>
  </div>

  {#if isCalculated}
    <div class="calculation-results">
      <div class="result-item">
        <span class="result-label">Monthly Payment</span>
        <span class="result-value">${Math.round(monthlyPayment).toLocaleString()}</span>
      </div>
      <div class="result-item">
        <span class="result-label">Total Interest</span>
        <span class="result-value">${Math.round(totalInterest).toLocaleString()}</span>
      </div>
      <div class="result-item total">
        <span class="result-label">Total Cost</span>
        <span class="result-value">${Math.round(totalCost).toLocaleString()}</span>
      </div>
    </div>

    <div class="calculator-actions">
      <button class="reset-btn" on:click={resetCalculator}>
        Reset Calculator
      </button>
      <a href="tel:+17025001955" class="contact-btn">
        Get Pre-Approved
      </a>
    </div>
  {/if}
</div>

<style>
  .mortgage-calculator {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    margin: 2rem 0;
  }

  .mortgage-calculator h3 {
    color: #0A2540;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  .mortgage-calculator p {
    color: #666;
    margin-bottom: 2rem;
  }

  .calculator-form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .input-group {
    display: flex;
    flex-direction: column;
  }

  .input-group label {
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5rem;
  }

  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .input-wrapper input {
    width: 100%;
    padding: 0.75rem;
    padding-left: 1.5rem;
    border: 2px solid #e9ecef;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }

  .input-wrapper input:focus {
    outline: none;
    border-color: #3A8DDE;
  }

  .currency,
  .percent,
  .years {
    position: absolute;
    color: #666;
    font-weight: 500;
  }

  .currency {
    left: 0.75rem;
  }

  .percent {
    right: 0.75rem;
  }

  .years {
    right: 0.75rem;
  }

  .calculation-results {
    background: #f8fbff;
    padding: 1.5rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    border: 2px solid #e8f4fd;
  }

  .result-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 0;
    border-bottom: 1px solid #e9ecef;
  }

  .result-item:last-child {
    border-bottom: none;
  }

  .result-item.total {
    font-weight: 700;
    font-size: 1.1rem;
    color: #0A2540;
    border-top: 2px solid #3A8DDE;
    margin-top: 0.5rem;
    padding-top: 1rem;
  }

  .result-label {
    color: #666;
  }

  .result-value {
    color: #0A2540;
    font-weight: 600;
  }

  .calculator-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .reset-btn {
    background: #6c757d;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 500;
    transition: background 0.3s ease;
  }

  .reset-btn:hover {
    background: #5a6268;
  }

  .contact-btn {
    background: #16B286;
    color: white;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 500;
    transition: background 0.3s ease;
  }

  .contact-btn:hover {
    background: #0D8A5B;
  }

  @media (max-width: 768px) {
    .calculator-form {
      grid-template-columns: 1fr;
    }

    .calculator-actions {
      flex-direction: column;
    }
  }
</style>
