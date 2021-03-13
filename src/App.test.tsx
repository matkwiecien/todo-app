import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

test('should create task when user click save and clear task input', () => {
  //GIVEN
  render(<App />);
  const taskInput = screen.getByRole('textbox', {
    name: /task:/i
  })

  //WHEN
  userEvent.type(taskInput, "new task");
  userEvent.click(screen.getByRole("button", { name: 'Save'}));

  //THEN
  expect(screen.getByText("new task")).toBeInTheDocument();
  expect(taskInput).toHaveValue("")
});
