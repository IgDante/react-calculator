import Input from './components/Input';
import NumberButton from './components/Button/NumberButton';
import OperatorButton from './components/Button/OperatorButton';
import SpecialButton from './components/Button/SpecialButton';
import ZeroButton from './components/Button/ZeroButton';

import {Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  };

  const handleSumNumber = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum));
      setOperation('')
    }

  };

  const handleSubtractNumber = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-')
    }else {
      const subtract = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(subtract));
      setOperation('')
    }

  };

  const handleMultplyNumber = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*')
    }else {
      const multply = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(multply));
      setOperation('')
    }

  };

  const handleDivideNumber = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/')
    }else {
      const divide = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(divide));
      setOperation('')
    }

  };

  const handlePercentNumber = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setOperation('%')
    }else {
      const percent = Number(firstNumber) / 100 
      setCurrentNumber(String(percent));
      setOperation('');
    }

  };

  const handleSwitchSignNumber = () => {

    if(firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setOperation('Sw')
    }else {
      const switchSign = Number(firstNumber) * (-1) || Number(currentNumber) * (-1);
      setCurrentNumber(String(switchSign));
      setOperation('');
    }

  };

  const handleEquals = () => {

    if(firstNumber !== 0 && operation !== '' && currentNumber !== 0) {
      switch(operation) {
        case '+':
          handleSumNumber();
          break;

        case '-':
          handleSubtractNumber();
          break;

        case '*':
          handleMultplyNumber();
        break;
        
        case '/':
          handleDivideNumber();
        break;

        case '%':
          handlePercentNumber();
        break;

        case 'Sw':
          handleSwitchSignNumber();
        break;

        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <SpecialButton Label='AC'onClick={() => {handleClear()}}/>
          <SpecialButton Label='+/-' onClick={() => handleSwitchSignNumber()}/>
          <SpecialButton Label='%' onClick={()=> handlePercentNumber()}/>
          <OperatorButton Label='÷' onClick={() => handleDivideNumber()}/>
        </Row>
        <Row>
          <NumberButton Label='7' onClick={() => {handleAddNumber('7')}}/>
          <NumberButton Label='8' onClick={() => {handleAddNumber('8')}}/>
          <NumberButton Label='9' onClick={() => {handleAddNumber('9')}}/>
          <OperatorButton Label='×' onClick={() => handleMultplyNumber()}/>
        </Row>
        <Row>
          <NumberButton Label='4' onClick={() => {handleAddNumber('4')}}/>
          <NumberButton Label='5' onClick={() => {handleAddNumber('5')}}/>
          <NumberButton Label='6' onClick={() => {handleAddNumber('6')}}/>
          <OperatorButton Label='-' onClick={() => {handleSubtractNumber()}}/>
        </Row>
        <Row>
          <NumberButton Label='1' onClick={() => {handleAddNumber('1')}}/>
          <NumberButton Label='2' onClick={() => {handleAddNumber('2')}}/>
          <NumberButton Label='3' onClick={() => {handleAddNumber('3')}}/>
          <OperatorButton Label='+' onClick={() => {handleSumNumber()}}/>
        </Row>
        <Row>
          <ZeroButton Label='0' onClick={() => {handleAddNumber('0')}}/>
          <NumberButton Label='.' onClick={() => {handleAddNumber('.')}}/>
          <OperatorButton Label='=' onClick={() => {handleEquals()}}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
