import { render, screen, waitFor, act, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import { AvailabilityProvider } from '../context/AvailabilityContext';
import Form from "./Form";
import Reserve from "./Reserve";
import user from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import { FormInput, FormSelect } from "./form-components";

describe(Form, () => {
    const onSubmit = jest.fn();

    beforeEach(() => {
        onSubmit.mockClear();
        act(() => render(
            <BrowserRouter>
                <AvailabilityProvider>
                    <Reserve  onSubmit={onSubmit}>
                        <Form>
                            <FormInput />
                            <FormSelect />
                        </Form>
                    </Reserve>
                </AvailabilityProvider>
            </BrowserRouter>)
        );
    });

    it('no error message when all fields pass validation', async () => {
        user.type(getFirstName(), 'Mai')
        user.type(getEmail(), 'mai@email.com')
        user.type(getNumPeople(), "3")

        userEvent.selectOptions(selectDate(), 'Sun Apr 30 2023')
        userEvent.selectOptions(selectTime(), '17:00')

        fireEvent.click(screen.getByRole('button', { name: /confirm reservation/i }));

        expect(getFirstName()).toHaveValue('Mai')
        expect(getEmail()).toHaveValue('mai@email.com')
        expect(getNumPeople().value).toBe("3")
        expect(selectDate()).toHaveValue('Sun Apr 30 2023')
        expect(selectTime()).toHaveValue('17:00')

        // test that error codes are not in doc when required values are placed
        expect(screen.queryByText(/please choose a time/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/please choose a date/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/please enter a valid email/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/required/i)).not.toBeInTheDocument();
    })

})

function getFirstName() {
    return screen.getByRole('textbox', {
        name: /first/i
    });
};

function getEmail() {
    return screen.getByRole('textbox', {
        name: /email address/i
    })
}

function getNumPeople() {
    return screen.getByRole('spinbutton', {
        name: /no\. of people/i
    })
}

function selectDate() {
    return screen.getByRole('combobox', {
        name: /date/i
    })
}

function selectTime() {
    return screen.getByRole('combobox', {
        name: /Time/i
    })
}