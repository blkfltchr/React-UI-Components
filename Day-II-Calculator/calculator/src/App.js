import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay'
import NumberButton from './components/ButtonComponents/NumberButton'
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="calculator">
      <CalculatorDisplay />
        <div>
        <ActionButton buttonStyle="action-button-clear" text="clear"/>
        <NumberButton   buttonStyle="number-button-symbol" text="÷"/>
        </div>
        
        <div>
          <NumberButton   buttonStyle="number-button-button" text="7"/>
          <NumberButton buttonStyle="number-button-button" text="8"/>
          <NumberButton buttonStyle="number-button-button" text="9"/>
          <NumberButton buttonStyle="number-button-symbol" text="×"/>
        </div>
        
        <div>
          <NumberButton   buttonStyle="number-button-button" text="4"/>
          <NumberButton buttonStyle="number-button-button" text="5"/>
          <NumberButton buttonStyle="number-button-button" text="6"/>
          <NumberButton buttonStyle="number-button-symbol" text="−"/>
        </div>
        
        <div>
          <NumberButton   buttonStyle="number-button-button" text="1"/>
          <NumberButton buttonStyle="number-button-button" text="2"/>
          <NumberButton buttonStyle="number-button-button" text="3"/>
          <NumberButton buttonStyle="number-button-symbol" text="+"/>
        </div>

        <div>
        <ActionButton buttonStyle="action-button-zero" text="0"/>
        <NumberButton   buttonStyle="number-button-symbol" text="="/>
        </div>
    
    </div>
  );
};

export default App;
