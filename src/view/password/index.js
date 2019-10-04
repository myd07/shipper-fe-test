import React from 'react';

const generate = () => {
  const constant = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@~!@#$%^&*()-_=+';
  const constArr = constant.split('');
  let output = '';
  for (let index = 0; index < 12; index++) {
    const random = Math.floor(Math.random() * ((constArr.length - 1) - 0 + 1)) + 0;
    output += constArr[random];
  }
  return output
}

const GeneratePassword = () => {
  const [password, setPassword] = React.useState('');
  return (
    <React.Fragment>
      <div className="input-password">
        <input type="text" value={password} />
        <button className="main-btn" onClick={() => setPassword(generate())}>Generate Password</button>
      </div>
    </React.Fragment>
  )
}

export default GeneratePassword