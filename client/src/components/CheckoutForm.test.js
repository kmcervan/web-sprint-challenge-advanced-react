import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { act } from "react-dom/test-utils";

import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    const header = screen.findByText(/react plants/i);

    expect(header).toMatchObject(/react plants/i);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const button = screen.getByRole('button');

    act(()=>{
        userEvent.type(firstName, 'karla');
        userEvent.type(lastName, 'Cervantes');
        userEvent.type(addressInput, 'city drive boo');
        userEvent.type(cityInput, 'karla');

        userEvent.click(button);
    });

    const newMessage = screen.findByText(/you have ordered/i);
    expect(newMessage).toMatchObject(/you have ordered/i);
    
});
