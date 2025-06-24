function Field({ type = 'text', label, value, onChange }) {
  return (
    <>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </>
  );
}

export default Field;
