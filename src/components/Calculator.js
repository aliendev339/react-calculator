import React, { Component } from 'react'
import styled from 'styled-components';

const Calc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 380px;
  width: 250px;
  background: #222;
  padding: 20px;
  margin: 40px auto;
  color: white;
`;

const Display = styled.div`
  width: 100%;
  text-align: right;
  font-size: 3em;
`;

const DisplayOutput = styled.p`
  margin: 20px 0 5px;
  padding-right: 10px;
  font-weight: 300;
`;
const Keypad = styled.div`
  display: grid;
  grid-template-areas: "AC pm per div"
                       "sev eig nin mul"
                       "fou fiv six min"
                       "one two thr add"
                       "zer zer dec equ";
  width: 100%;
  height: 300px;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
`;

const Key = styled.button`
  display: block;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 1.3em;
  text-align: center;
  grid-area: ${props => props.gridArea || 'auto'};
  padding: auto;
`;
const FunctionKey = styled(Key)`
  background-color: lightgray;
  color: #222;
`;
const DigitKey = styled(Key)`
  background-color: grey;
  color: white;
`;
const OperatorKey = styled(Key)`
  background-color: orange;
  color: white;
`;

class Calculator extends Component {
  state = { 
    displayOutput: '0',
    isReset: true
  }

  appendDigit(digit) {
    const { displayOutput, isReset } = this.state;
    if (!isReset) {
      this.setState({
        displayOutput: displayOutput + digit,
        isReset: false
      });
    } else {
      this.setState({
        displayOutput: digit,
        isReset: false
      });
    }
  }

  resetDigits = () => {
    this.setState({
      displayOutput: '0',
      isReset: true
    })
  }

  changeSign = () => {
    const { isReset, displayOutput } = this.state;

    if (!isReset) {
      this.setState({
        displayOutput: displayOutput * -1
      })
    }
  }

  toPercent = () => {
    const { isReset, displayOutput } = this.state;

    if (!isReset) {
      this.setState({
        displayOutput: displayOutput * .01
      })
    }
  }

  render() {

    const { displayOutput } = this.state;
    return (
      <Calc>
        <Display>
          <DisplayOutput>{displayOutput}</DisplayOutput>
        </Display>
        <Keypad>
          
            <FunctionKey onClick={this.resetDigits}>AC</FunctionKey>
            <FunctionKey onClick={this.changeSign}>±</FunctionKey>
            <FunctionKey onClick={this.toPercent}>%</FunctionKey>
          
            <DigitKey onClick={() => this.appendDigit('0')} gridArea="zer">0</DigitKey>
            <DigitKey onClick={() => this.appendDigit('1')} gridArea="one">1</DigitKey>
            <DigitKey onClick={() => this.appendDigit('2')} gridArea="two">2</DigitKey>
            <DigitKey onClick={() => this.appendDigit('3')} gridArea="thr">3</DigitKey>
            <DigitKey onClick={() => this.appendDigit('4')} gridArea="fou">4</DigitKey>
            <DigitKey onClick={() => this.appendDigit('5')} gridArea="fiv">5</DigitKey>
            <DigitKey onClick={() => this.appendDigit('6')} gridArea="six">6</DigitKey>
            <DigitKey onClick={() => this.appendDigit('7')} gridArea="sev">7</DigitKey>
            <DigitKey onClick={() => this.appendDigit('8')} gridArea="eig">8</DigitKey>
            <DigitKey onClick={() => this.appendDigit('9')} gridArea="nin">9</DigitKey>
            <DigitKey onClick={() => this.appendDigit('.')} gridArea="dec">.</DigitKey>

            <OperatorKey>÷</OperatorKey>
            <OperatorKey>×</OperatorKey>
            <OperatorKey>-</OperatorKey>
            <OperatorKey>+</OperatorKey>
            <OperatorKey>=</OperatorKey>

        </Keypad>
      </Calc>
    );
  }
}

export default Calculator;