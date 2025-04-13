import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [display, setDisplay] = useState('0');   //calculator starts with zero and display the first input number 
    const [prevValue, setPrevValue] = useState(null); //store the entered number
    const [operation, setOperation] = useState(null);
    const [newEnteredNumber, setNewEnteredNumber] = useState(true);
    const [memory, setMemory] = useState(0);

    // handle the number that user click on that after choosen the operation
    const handleNumber = (num) => {
        if (newEnteredNumber) {
            setDisplay(num.toString());
            setNewEnteredNumber(false);
        } else {
            setDisplay(display === '0' ? num.toString() : display + num);
        }
    };

    // handle base operation and store them
    const handleOperation = (op) => {
        setOperation(op);
        setPrevValue(parseFloat(display));
        setNewEnteredNumber(true);
    };
    
    // handle the result of the operation base on the store number and the new number and selected operation
    const calculateResult = () => {
        const newNumber = parseFloat(display);
        const previous = parseFloat(prevValue);
        let result = 0;

        // Check for division by zero error
        if (operation === '÷' && newNumber === 0) {
            setDisplay('Undefined');
            setOperation(null);
            setPrevValue(null);
            setNewEnteredNumber(true);
            return;
        }

        switch (operation) {
            case '+':
                result = previous + newNumber;
                break;
            case '-':
                result = previous - newNumber;
                break;
            case '×':
                result = previous * newNumber;
                break;
            case '÷':
                result = previous / newNumber;
                break;
            default:
                return;
        }
        setDisplay(result.toString());
        setOperation(null);
        setPrevValue(null);
        setNewEnteredNumber(true);
    };

    const handleClear = () => {
        setDisplay('0');
        setNewEnteredNumber(true);
    };

    const handleAllClear = () => {
        setDisplay('0');
        setPrevValue(null);
        setOperation(null);
        setNewEnteredNumber(true);
    };

    const handleMemoryStore = () => {
        setMemory(parseFloat(display));
    };

    const handleMemoryRecall = () => {
        setDisplay(memory.toString());
        setNewEnteredNumber(true);
    };

    const handleMemoryClear = () => {
        setMemory(0);
    };

    const handleMemoryPlus = () => {
        setMemory(memory + parseFloat(display));
    };

    const handleMemoryMinus = () => {
        setMemory(memory - parseFloat(display));
    };

    const handleSignChange = () => {
        if (display !== '0') {
            setDisplay((parseFloat(display) * -1).toString());
        }
    };

    const handleDecimal = () => {
        if (newEnteredNumber) {
            setDisplay('0.');
            setNewEnteredNumber(false);
        } else if (!display.includes('.')) {
            setDisplay(display + '.');
        }
    };

    const handlePercent = () => {
        setDisplay((parseFloat(display) / 100).toString());
    };

    const handleSquareRoot = () => {
        const result = Math.sqrt(parseFloat(display));
        setDisplay(result.toString());
    };

    return (
        <div className="calculator-container">
            <div className="calculator">
                <h1 className="calculator-title">React Calculator</h1>
                <div className="display">
                    <div className="display-text">{display}</div>
                </div>
                <div className="memory-grid">
                    <button onClick={handleMemoryStore} className="button memory-button">MS</button>
                    <button onClick={handleMemoryClear} className="button memory-button">MC</button>
                    <button onClick={handleMemoryRecall} className="button memory-button">MR</button>
                    <button onClick={handleMemoryPlus} className="button memory-button">M+</button>
                    <button onClick={handleMemoryMinus} className="button memory-button">M-</button>
                </div>
                <div className="buttons-grid">
                    <button onClick={handleAllClear} className="button clear-button">AC</button>
                    <button onClick={handleClear} className="button clear-button">C</button>
                    <button onClick={() => handleNumber(7)} className="button number-button">7</button>
                    <button onClick={() => handleNumber(8)} className="button number-button">8</button>
                    <button onClick={() => handleNumber(9)} className="button number-button">9</button>
                    <button onClick={handlePercent} className="button operation-button">%</button>
                    <button onClick={handleSquareRoot} className="button operation-button">√</button>
                    
                    <button onClick={() => handleNumber(4)} className="button number-button">4</button>
                    <button onClick={() => handleNumber(5)} className="button number-button">5</button>
                    <button onClick={() => handleNumber(6)} className="button number-button">6</button>
                    <button onClick={() => handleOperation('×')} className="button operation-button">×</button>
                    <button onClick={() => handleOperation('÷')} className="button operation-button">÷</button>
                    
                    <button onClick={() => handleNumber(1)} className="button number-button">1</button>
                    <button onClick={() => handleNumber(2)} className="button number-button">2</button>
                    <button onClick={() => handleNumber(3)} className="button number-button">3</button>
                    <button onClick={() => handleOperation('+')} className="button operation-button">+</button>
                    <button onClick={() => handleOperation('-')} className="button operation-button">-</button>
                    
                    <button onClick={() => handleNumber(0)} className="button number-button zero-button">0</button>
                    <button onClick={handleDecimal} className="button number-button">.</button>
                    <button onClick={handleSignChange} className="button number-button">+/-</button>
                    <button onClick={calculateResult} className="button equals-button">=</button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;