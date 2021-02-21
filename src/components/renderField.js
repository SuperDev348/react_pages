import React from 'react';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <input {...input} placeholder={label} type={type}/>
    {touched ? 
      ((error && <div style={{color: "red", fontSize: 12}}>{error}</div>) || 
      (warning && <div style={{color: "yellow", fontSize: 12}}>{warning}</div>)) : <div style={{marginBottom: 18}}></div>}
  </div>
);

export default renderField