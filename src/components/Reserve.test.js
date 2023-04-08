import { render, screen } from "@testing-library/react";
import Form from "./Form";

test('Renders the Reservation heading', () => {
    render(<Form />);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
})