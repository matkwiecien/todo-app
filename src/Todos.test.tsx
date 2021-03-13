import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Todos from './Todos';

test('should create task when user click save and clear task input', () => {
    //GIVEN
    render(<Todos />);
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

test('should remove task when user click delete button', () => {
    //GIVEN
    render(<Todos />);
    const taskInput = screen.getByRole('textbox', {
        name: /task:/i
    })

    //WHEN
    userEvent.type(taskInput, "new task");
    userEvent.click(screen.getByRole("button", { name: 'Save'}));
    userEvent.click(screen.getByRole("button", { name: 'Delete'}));

    //THEN
    expect(screen.queryByText("new task")).not.toBeInTheDocument();

});
