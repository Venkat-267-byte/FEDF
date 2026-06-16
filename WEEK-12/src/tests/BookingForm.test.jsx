import { render, screen } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

describe('BookingForm', () => {
  it('renders the booking form fields', () => {
    render(<BookingForm />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/guests/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit booking/i })).toBeInTheDocument();
  });
});
