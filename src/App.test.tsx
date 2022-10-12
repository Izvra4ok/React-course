import {render, screen} from '@testing-library/react';
import SocialNetworkApp from "./components/App/App";

test('renders learn react link', async () => {
    render(<SocialNetworkApp/>);
    // const linkElement = screen.getByText(/learn react/i);
    const div = screen.getByRole(/main/i)
    expect(div).toBeInTheDocument();
});
