import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import 'jest-styled-components'

import { Route, Router } from 'react-router-dom'
import { createMemoryHistory } from 'history';

import { PageHeader } from './index';

const goBackText = '돌아가기';
describe('<PageHeader />', () => {
    it('renders component correctly', () => {
        const history = createMemoryHistory();
        history.push('/');

        const { container } = render(
            <Router history={history}>
                <PageHeader />
            </Router>
        );
        
        const label = screen.getByText('할 일 목록');
        expect(label).toBeInTheDocument()
        const goBack = screen.queryByText(goBackText);
        expect(goBack).not.toBeInTheDocument();

        expect(container).toMatchSnapshot();
    })
    it('renders component correctly with /add URL', () => {
        const history = createMemoryHistory();
        history.push('/add');
        render (
            <Router history={history}>
                <PageHeader />
            </Router>
        );
        
        const label = screen.getByText('할 일 추가');
        expect(label).toBeInTheDocument();
        const goBack = screen.getByText(goBackText);
        expect(goBack).toBeInTheDocument();
        expect(goBack.getAttribute('href')).toBe('/');
    })
    it('renders component correctly with NotFound', () => {
        const history = createMemoryHistory();
        history.push('/not_found');

        render(
            <Router history={history}>
                <PageHeader />
            </Router>
        )

        const label = screen.getByText('에러');
        expect(label).toBeInTheDocument();
        const goBack = screen.getByText(goBackText);
        expect(goBack).toBeInTheDocument();
        expect(goBack.getAttribute('href')).toBe('/');
    });
    it('renders component correctly with goBack link', () => {
        const history = createMemoryHistory();
        history.push('/not_found');

        render(
            <Router history={history}>
                <PageHeader />
            </Router>
        );

        const goBack = screen.getByText(goBackText);
        fireEvent.click(goBack);

        const label = screen.getByText('할 일 목록');
        expect(label).toBeInTheDocument();
        expect(goBack).not.toBeInTheDocument();
    });
});

