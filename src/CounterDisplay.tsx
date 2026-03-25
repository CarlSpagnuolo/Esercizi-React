export function CounterDisplay({ count }) {
  const CounterStyle = {
    backgroundColor: "#333",
    color: "yellow",
    textAlign: "center" as const,
  };

  return <h2 style={CounterStyle}>{count}</h2>;
}
