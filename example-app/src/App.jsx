import { create } from "react-state";

const useStore = create((set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 })),
  decrement: () => set((s) => ({ count: s.count - 1 })),
  reset: () => set({ count: 0 }),
}));

function App() {
  const count = useStore((s) => s.count);
  const increment = useStore((s) => s.increment);
  const decrement = useStore((s) => s.decrement);
  const reset = useStore((s) => s.reset);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Count: {count}</h1>
        <div style={styles.buttonGroup}>
          <button style={styles.button} onClick={increment}>
            +1
          </button>
          <button style={styles.button} onClick={decrement}>
            -1
          </button>
          <button style={styles.resetButton} onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f0f2f5",
    color: "#000",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    width: "300px",
  },
  title: {
    marginBottom: "20px",
    fontSize: "24px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  button: {
    flex: 1,
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    backgroundColor: "#e6f7ff",
    cursor: "pointer",
  },
  resetButton: {
    flex: 1,
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    backgroundColor: "#fff1f0",
    cursor: "pointer",
  },
};

export default App;
