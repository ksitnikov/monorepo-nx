import { getGreeting } from '../support/app.po';

describe('components', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to components!');
  });
});
