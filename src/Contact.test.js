import { render, screen } from '@testing-library/react';
import Contact from './Contact';
import { shallow, mount } from 'enzyme';


// test('renders learn react link', () => {
//   // render(<App />);
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
//   const wrapper = shallow(<Contact />)
//   expect(wrapper).toMatchSnapshot()
// });

// test('Using snapshot', () => {

//   const wrapper = render(<Contact />)
//   expect(wrapper).toMatchSnapshot()
// });


test('using Mount', () => {

    const wrapper = mount(<Contact />)
    expect(wrapper).toMatchSnapshot()
});