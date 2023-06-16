# Calculadora React

A calculadora React é uma aplicação web desenvolvida usando a biblioteca React. Ela permite que os usuários realizem operações matemáticas básicas, como adição, subtração, multiplicação e divisão. Esta documentação fornecerá uma visão geral dos componentes e funcionalidades da calculadora, bem como instruções para executar e personalizar a aplicação.

## 🚀 Começando

A calculadora React consiste em dois componentes principais: Calculator e Button. O componente Calculator representa a calculadora como um todo e é responsável pela lógica de cálculo e exibição dos resultados. O componente Button representa cada botão da calculadora.

### 🛠️Componentes

#### 🔧Calculator

O componente Calculator é o componente principal da calculadora. Ele possui o estado interno para armazenar os valores e operações, além de manipular as interações do usuário. A estrutura básica do componente Calculator é a seguinte:

    import React, { useState } from 'react';

    const Calculator = () => {
    // Estado interno
    const [displayValue, setDisplayValue] = useState('0');
    const [firstOperand, setFirstOperand] = useState(null);
    const [operator, setOperator] = useState(null);
    const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

    // Lógica de cálculo e manipulação de eventos

    return (
        <div className="calculator">
        {/* Visor */}
        {/* Botões */}
        </div>
    );
    };

    export default Calculator;


#### 🔧Button
O componente Button representa cada botão da calculadora. Ele recebe uma propriedade onClick para manipular o evento de clique do botão. Aqui está um exemplo básico da estrutura do componente Button:

    import React from 'react';

    const Button = ({ onClick, label }) => {
    return (
        <button className="button" onClick={onClick}>
        {label}
        </button>
    );
    };

    export default Button;

## ⚙️Funcionalidades
A calculadora React suporta as seguintes funcionalidades:

* Exibir números no visor da calculadora.

* Realizar operações de adição, subtração, multiplicação e divisão.

* Limpar o visor e redefinir os valores.
* Exibir o resultado da operação.

## 🛠️ Construído com

* [React](https://react.dev/) - Biblioteca utilizada
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Como linguagem
* [Yarn](https://yarnpkg.com/) - Gerenciador de pacotes

## Conclusão
Esta documentação forneceu uma visão geral dos componentes, funcionalidades e instruções de execução da calculadora React.
 

## ✒️ Autor

* **Dante** - *Desenvolvedor Web* - [Pefil GitHub](https://github.com/IgDante)

## 📄 Licença

Este projeto está sob a licença (MIT)