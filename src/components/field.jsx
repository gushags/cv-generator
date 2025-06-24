function Field({ type = 'text', label, value, onChange }) {
  return (
    <>
      <label>
        {label}
        <input type={type} name={label} value={value} onChange={onChange} />
      </label>
    </>
  );
}

export default Field;
