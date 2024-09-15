const InputField = ({label,type,placeholder,readonly=false}) => {
  return (
    <div className="form-controller">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} readOnly={readonly}/>
    </div>
  );
};

export default InputField;
