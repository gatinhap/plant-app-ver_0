import { expect, vi } from 'vitest';
import { fireEvent } from '@testing-library/react';
import CallToActionButton from './CallToActionButton.tsx';
import { render } from '../../../tests/test-utlis.tsx';

const onClickMock = vi.fn();
const mockCTAText = 'click me';

test('CTA button onClick event calls function when button is clicked', () => {
  const { getByText } = render(
    <CallToActionButton handleClick={onClickMock}>
      {mockCTAText}
    </CallToActionButton>,
  );

  const CTA = getByText('click me');

  fireEvent.click(CTA);

  expect(onClickMock).toHaveBeenCalledTimes(1);
});
