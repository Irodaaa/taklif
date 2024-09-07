import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate(); // Инициализируем navigate

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '' }); // Сбрасываем данные формы при переключении
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isLogin ? 'http://localhost:5001/api/login' : 'http://localhost:5001/api/register'; // Измените URL на правильный порт
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };

    try {
      const response = await fetch(endpoint, requestOptions);
      const data = await response.json();

      if (response.ok) {
        // Обработка успешного ответа
        console.log('Success:', data);

        // Сохранение токена или другой логики по необходимости
        // Например, сохранение токена в локальное хранилище:
        // localStorage.setItem('token', data.token);

        // Перенаправление на страницу CreateInvitation
        navigate('/create'); // Перенаправляем пользователя на страницу создания приглашений
      } else {
        // Обработка ошибок
        console.error('Error:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-toggle">
        <button onClick={toggleForm} className={isLogin ? 'active' : ''}>
          Akkauntga kirish
        </button>
        <button onClick={toggleForm} className={!isLogin ? 'active' : ''}>
          Akkaunt yaratish
        </button>
      </div>

      {isLogin ? (
        <div className="login-form">
          <h2>Akkauntga kirish</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
              Parol:
              <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>
            <button type="submit">Kirish</button>
          </form>
        </div>
      ) : (
        <div className="register-form">
          <h2>Akkaunt yaratish</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Ism:
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
              Parol:
              <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>
            <button type="submit">Registratsiya qilish</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
