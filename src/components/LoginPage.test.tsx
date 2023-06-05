import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
  test('successful login', async () => {
    // Render the login page
    const { getByTestId } = render(<LoginPage />);

    // Get the email and password input fields
    const emailInput = getByTestId('emailInput');
    const passwordInput = getByTestId('passwordInput');

    // Fill in the email and password fields
    fireEvent.change(emailInput, { target: { value: 'adrian12345@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'adrian12345' } });

    // Get the login button and submit the form
    const loginButton = getByTestId('loginButton');
    fireEvent.click(loginButton);

    // Wait for the login process to finish
    await waitFor(() => {
      // Check if the user is redirected to the home page
      expect(window.location.pathname).toBe('/');

      // Check if the user's username and email are stored in local storage
      expect(localStorage.getItem('token')).not.toBeNull();
      expect(localStorage.getItem('username')).toBe('adrian12300');
      expect(localStorage.getItem('email')).toBe('adrian12345@gmail.com');
    });
  });

  test('failed login', async () => {
    // Render the login page
    const { getByTestId } = render(<LoginPage />);

    // Get the email and password input fields
    const emailInput = getByTestId('emailInput');
    const passwordInput = getByTestId('passwordInput');

    // Fill in the email and password fields with incorrect credentials
    fireEvent.change(emailInput, { target: { value: 'incorrect@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'incorrect123' } });

    // Get the login button and submit the form
    const loginButton = getByTestId('loginButton');
    fireEvent.click(loginButton);

    // Wait for the login process to finish
    await waitFor(() => {
      // Check if the error message is displayed
      expect(screen.getByText('Invalid email or password')).toBeInTheDocument();

      // Check if the user is not redirected and local storage is empty
      expect(window.location.pathname).toBe('/login');
      expect(localStorage.getItem('token')).toBeNull();
      expect(localStorage.getItem('username')).toBeNull();
      expect(localStorage.getItem('email')).toBeNull();
    });
  });
});
