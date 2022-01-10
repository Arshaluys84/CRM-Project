import React from 'react';

const Input =({value,onChange,type,placeholder,name,id}) => {
  return < >
      <input className='input' id={id} value={value} name={name} onChange={onChange} type={type} placeholder={placeholder} />
  </>
}
export default Input