import 'jest-styled-components';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { theme } from '../styles/theme.js';

const Wrapper = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

const renderWithStyledComponent = (ui, options) => render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';

export { renderWithStyledComponent as render };
