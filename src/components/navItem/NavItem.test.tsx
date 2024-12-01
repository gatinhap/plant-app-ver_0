import { fireEvent, screen } from '@testing-library/react';
import { render } from '../../../tests/test-utlis.tsx';
import NavItem from './NavItem.tsx';

const mockLinkPath = '/test-page';
const mockLinkText = 'link';

test('path of the current page should match link path', () => {
  render(<NavItem linkTo={mockLinkPath}>{mockLinkText}</NavItem>);

  const linkElement = screen.getByText('link');

  fireEvent.click(linkElement);

  expect(window.location.pathname).toBe('/test-page');
});
