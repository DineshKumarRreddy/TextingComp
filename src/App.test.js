import { findAllByRole, fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'

const user = userEvent.setup()
const mountApp = async() => {
  render(<App />);
  await screen.findAllByRole('section');
};
describe('App Component', () => {
  beforeEach(() => {
    mountApp();
  });
  it('should render the App component', () => {
    const appComp = screen.getByRole('main');
    expect(appComp).toBeInTheDocument();
  })
  it('input @ and auto drop down should display with list of 10 items', async () => {
    const input = screen.getByPlaceholderText('Mention');
    await user.type(input, '@')
    const autoEle = screen.getAllByRole('list-item');
    expect(autoEle.length).toBe(10);
  });
  it('on Inputing @ay should render with 2 list items', async () => {
    const input = screen.getByPlaceholderText('Mention');
    await user.type(input, '@ay')
    const autoEle = screen.getAllByRole('list-item');
    expect(autoEle.length).toBe(2);
  });
  it('select a value from the auto dropdown, text input should update with seleted name and drop down should be hide', async () => {
    const input = screen.getByPlaceholderText('Mention');
    await user.type(input, '@')
    const autoEle = screen.getAllByRole('list-item')[0];
    await user.click(autoEle);
    expect(input.value.trim()).toBe('@Merell Covert');
  });
  it('enter random text and validate ex: @Merell Covert GoodMorning and expect', async () => {
    const input = screen.getByPlaceholderText('Mention');
    await user.type(input, '@')
    const autoEle = screen.getAllByRole('list-item')[0];
    await user.click(autoEle);
    await user.type(input, 'GoodMorning')
    expect(input.value).toBe('@Merell Covert GoodMorning');
  });
});

