import React from 'react';
import { render } from '@testing-library/react';

import Index from '../pages/index';
import List from '@/components/Flashcard/List/Index';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });

  it('should render List component', () => {
    const { baseElement } = render(<List />);
    expect(baseElement).toBeTruthy();
  })
});
