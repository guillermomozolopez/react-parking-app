function FloatSpan({
  value,
  decimalScale = 2
}: {
  value: number;
  decimalScale: number;
}): JSX.Element {
  const newValue = value.toFixed(decimalScale);
  return <span>{newValue}</span>;
}

export default FloatSpan;
