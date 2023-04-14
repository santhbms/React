import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Demo from './Components/Demo';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('Test-#01',()=>{
  render(<Demo/>);
  const msgText=screen.getByText('Welcome');
  expect(msgText).toBeInTheDocument();
})

test('Test-#02',()=>{
  render(<Demo name="John"/>)
  const msgText=screen.getByText('Name:John');
  expect(msgText).toBeInTheDocument();
})

test('Test-#03',()=>{
  render(<Demo name="John"/>)
  const btn=screen.getByRole('button')
  for(var i=1;i<=2;i++)
  {
  fireEvent.click(btn)
  }
  const msgText=screen.getByText('Count:2');
  expect(msgText).toBeInTheDocument();
})