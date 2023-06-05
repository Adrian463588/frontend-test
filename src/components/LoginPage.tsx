import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import { AuthProvider } from '../utils/AuthContext';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {login, logout } = useContext(AuthContext);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://readify-seven.vercel.app/api/v1/register/user', {
        email,
        password,
      });
      console.log(response.data); // Response dari server setelah login berhasil
      // Lakukan penanganan setelah login berhasil, misalnya menyimpan token ke local storage dan mengarahkan pengguna ke halaman lain
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (axiosError.response) {
          console.log(axiosError.response.data); // Response dari server jika login gagal
          // Lakukan penanganan kesalahan berdasarkan respon dari server
        } else {
          console.log(axiosError.message); // Pesan kesalahan jika tidak ada respon dari server
          // Lakukan penanganan kesalahan jika tidak ada respon dari server
        }
      } else {
        console.log(error); // Penanganan kesalahan umum jika bukan AxiosError
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full">
        <div className="text-3xl font-bold mb-4">Login</div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-center items-center"
                type="submit"
                style={{ height: '40px' }}
              >
                Login
              </button>

              <button
                className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Github Signin
              </button>

              <p className="text-gray-600 text-sm">
                Don't have an account? <Link to="/signup" className="text-blue-500">Sign up here.</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
