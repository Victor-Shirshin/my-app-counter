import { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь", price: "200" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((item) => item.id !== id);
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id) => {
    const newCounterValue = counters.map((item) => {
      return item.id !== id ? { ...item } : { ...item, value: item.value + 1 };
    });
    setCounters(newCounterValue);
  };

  const handleDecrement = (id) => {
    const newCounterValue = counters.map((item) => {
      return item.id !== id ? { ...item } : { ...item, value: item.value - 1 };
    });
    setCounters(newCounterValue);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          {...count}
          onIncriment={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};
export default CountersList;
