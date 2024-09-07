import React, { useState } from 'react';

const PaymeCheckoutForm = () => {
  const [amount, setAmount] = useState(0);
  const [account, setAccount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Отправляем данные на сервер для обработки платежа
    const response = await fetch('/payme', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, account }),
    });

    const result = await response.json();

    if (response.ok) {
      // Успешная оплата
      console.log('Оплата прошла успешно:', result);
      // Здесь можно добавить редирект на страницу успешной оплаты
    } else {
      // Ошибка оплаты
      console.error('Ошибка оплаты:', result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Сумма:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </label>
      <label>
        Аккаунт:
        <input
          type="text"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
          required
        />
      </label>
      <button type="submit">Оплатить через Payme</button>
    </form>
  );
};

export default PaymeCheckoutForm;
