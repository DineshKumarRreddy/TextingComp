import { TextBox } from ".";
import { render, screen } from "@testing-library/react";
const users = [
    { "id": 1, "first_name": "Merell", "last_name": "Covert", "email": "mcovert0@hibu.com", "gender": "Male" },
    { "id": 2, "first_name": "Sandy", "last_name": "Maunton", "email": "smaunton1@mtv.com", "gender": "Female" },
    { "id": 3, "first_name": "Dix", "last_name": "Lunney", "email": "dlunney2@vimeo.com", "gender": "Female" },
    {
        "id": 4, "first_name": "Sammie", "last_name": "Longworthy", "email": "slongworthy3@gizmodo.com", "gender": "Male"
    }];
const mountApp = (users) => {
    return render(<TextBox users={users}/>);
};

describe('TextBox Component', () => {
    beforeEach(() => {
        mountApp(users);
    });
    it('component shoud render with InputText COmponent', () => {
        const TextBox = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
    });
    it('component should render wuth listitmes with four users', () => {
        const listItems = screen.getByRole('role');
        expect(listItems.length).toBe(users.length);
    });
});