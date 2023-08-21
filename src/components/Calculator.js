import React, { useState } from 'react';
import './calculator.css';
import Button from './Button.js';
import Input from './Input.js';
import * as math from 'mathjs';

function Calculator() {
    const [input, setInput] = useState('');
    const addToInput = (value) => {
        setInput(input + value);
    };
    const clearInput = () => {
        setInput('');
    };
    const calculateResult = () => {
        try {
            const result = math.evaluate(input);
            setInput(result);
        } catch (error) {
            setInput('Error');
        }
    };

    return (
        <div className="calc-wrapper">
            <div className="calc-input">
                <Input value={input} />
            </div>
            <div className="calc-row">
                <Button value="7" handleClick={addToInput} />
                <Button value="8" handleClick={addToInput} />
                <Button value="9" handleClick={addToInput} />
                <Button value="*" handleClick={addToInput} />
            </div>
            <div className="calc-row">
                <Button value="4" handleClick={addToInput} />
                <Button value="5" handleClick={addToInput} />
                <Button value="6" handleClick={addToInput} />
                <Button value="-" handleClick={addToInput} />
            </div>
            <div className="calc-row">
                <Button value="1" handleClick={addToInput} />
                <Button value="2" handleClick={addToInput} />
                <Button value="3" handleClick={addToInput} />
                <Button value="+" handleClick={addToInput} />
            </div>
            <div className="calc-row">
                <Button value="C" handleClick={clearInput} />
                <Button value="0" handleClick={addToInput} />
                <Button value="." handleClick={addToInput} />
                <Button value="=" handleClick={calculateResult} />
            </div>
        </div>
    );
}

export default Calculator;
