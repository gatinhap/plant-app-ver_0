import { describe } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import InputField from './InputField.tsx';
import { render } from '../../../tests/test-utlis.tsx';

const mockInputPlaceholder = 'placeholder text';
const mockDataTestId = 'input';
const mockInputType = 'file';

describe('Input field attributes are accepted', () => {
  it('renders placeholder text', () => {
    render(<InputField placeholder={mockInputPlaceholder} />);

    const inputElement: HTMLInputElement =
      screen.getByPlaceholderText('placeholder text');

    expect(inputElement.placeholder).toBe('placeholder text');
  });

  it('allows adding type attribute', () => {
    render(<InputField data-testid={mockDataTestId} type={mockInputType} />);
    screen.debug();

    const inputElement: HTMLInputElement = screen.getByTestId(mockDataTestId);

    expect(inputElement.type).toBe('file');
  });

  it('allows to upload image file', async () => {
    render(<InputField data-testid={mockDataTestId} type={mockInputType} />);

    const imageFile = new File(['image'], 'image.png', {
      type: 'image/png',
    });
    const inputElement = screen.getByTestId<HTMLInputElement>(mockDataTestId);

    fireEvent.change(inputElement, {
      target: { files: [imageFile] },
    });

    expect(inputElement.files?.[0].name).toBe('image.png');
    expect(inputElement.files?.length).toBe(1);
  });
});
