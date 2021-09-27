/// <reference types="cypress" />

describe('TodoApp', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo#/');
  });

  it('Add new task to the list', () => {
    cy.get('[data-test=new-todo]')
      .type('Make a coffee {enter}')
      .type('Make a tea {enter}');
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Finish task', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.contains('Walk the dog').parent().find('input').check();
    /* ==== End Cypress Studio ==== */
  });
});
