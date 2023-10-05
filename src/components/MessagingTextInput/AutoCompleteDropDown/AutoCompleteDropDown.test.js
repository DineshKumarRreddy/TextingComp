import { render, screen, fireEvent } from "@testing-library/react";
import { AutoCompleteDropDown } from ".";
import userEvent from '@testing-library/user-event'

const user = userEvent.setup()
const users = [
    { "id": 1, "first_name": "Merell", "last_name": "Covert", "email": "mcovert0@hibu.com", "gender": "Male" },
    { "id": 2, "first_name": "Sandy", "last_name": "Maunton", "email": "smaunton1@mtv.com", "gender": "Female" },
    { "id": 3, "first_name": "Dix", "last_name": "Lunney", "email": "dlunney2@vimeo.com", "gender": "Female" },
    {
        "id": 4, "first_name": "Sammie", "last_name": "Longworthy", "email": "slongworthy3@gizmodo.com", "gender": "Male"
    }];
const args = {
    showDropDown: true,
    users,
    onClick: jest.fn(),
};
const mountApp = (props = args) => {
    render(<AutoCompleteDropDown {...props} />);
};
describe('AutoComplete component', () => {
    it('should render the component on showDropDown is true', () => {
        mountApp();
        const autoDropDown = screen.getByRole('region', { hidden: true });
        expect(autoDropDown).toBeInTheDocument();
    });
    it('should render the component on showDropDown is true', () => {
        mountApp({ ...args, showDropDown: false });
        const autoDropDown = screen.queryByRole('region', { hidden: true });
        expect(autoDropDown).not.toBeInTheDocument();
    });
    it(`shouldn't load ul if no users are present`, () => {
        mountApp({...args, users: undefined});
        const ulEle = screen.queryByRole('list');
        expect(ulEle).not.toBeInTheDocument();
    })
    it('should render four list itme elements on passing 4 users', () => {
        mountApp();
        const liEle = screen.getAllByRole('list-item');
        expect(liEle.length).toBe(args.users.length);
    })
    it('should selecting of item should make onClick call', async() => {
        mountApp();
        const liEle = screen.getAllByRole('list-item')[0];
        await user.click(liEle);
        expect(args.onClick).toBeCalledTimes(1);
    })
});