describe('Burger Constructor', () => {

    it('Сервер запускается по адресу localhost:3000', () => {
        cy.visit('http://localhost:3000/');
    })

    it('открытие модального окна ингредиента', () => {
        cy.get('[data-test="60d3b41abdacab0026a733cd"]').click('center');
        cy.get('[data-test="modal"]').should('exist');
    });

    it('закрытие модальных окон.', () => {
        cy.get('[data-test="modal-close"]').click('center');
    });
});