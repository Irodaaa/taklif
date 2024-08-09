import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Логика регистрации пользователя
    // Пример: сохранение данных пользователя в localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    navigate('/create'); // Перенаправление на страницу создания пригласительного
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Создать аккаунт</h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="form-group">
            <label htmlFor="username" className="block text-gray-700">Имя пользователя</label>
            <input
              id="username"
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="block text-gray-700">Пароль</label>
            <input
              id="password"
              type="password"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
