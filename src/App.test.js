import { render, screen, fireEvent } from '@testing-library/react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import Filter from './components/Filter';


test('adds a task', () => {
  const onAdd = jest.fn();
  render(<AddTask onAdd={onAdd} />);
  const input = screen.getByPlaceholderText('Add a new task');
  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.click(screen.getByText('Add Task'));
  expect(onAdd).toHaveBeenCalledWith('New Task');
});


const tasks = [{ id: 1, text: 'Task 1', completed: false }];

test('toggles task completion', () => {
  const onToggle = jest.fn();
  render(<TaskList tasks={tasks} onToggle={onToggle} />);
  fireEvent.click(screen.getByRole('checkbox'));
  expect(onToggle).toHaveBeenCalledWith(1);
});


test('filters tasks by status', () => {
  const setFilter = jest.fn();
  render(<Filter filter="all" setFilter={setFilter} />);
  fireEvent.click(screen.getByText('Completed'));
  expect(setFilter).toHaveBeenCalledWith('completed');
});
