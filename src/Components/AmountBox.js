import React from 'react';

//ES6 语法格式 { text, type, amount }
//className={`card-header bg-${type} text-white`}    使用大括号来定义js表达式为值的JSX属性
const AmountBox = ({ text, type, amount }) => {
  return (
    <div className="col">
      <div className="card">
        <div className={`card-header bg-${type} text-white`}>
          {text}
        </div>
        <div className="card-body">
          {amount}
        </div>
      </div>
    </div>
  );
}

export default AmountBox