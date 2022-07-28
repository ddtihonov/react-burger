const servUrl = 'http://localhost:3000/react-burger/';

describe('BurgerConstructor', () => {
    it('Сервер запускается на localhost:3000/react-burger', function() {
        cy.visit(servUrl);   
    });

    it('открытие модального окна с описанием ингредиента', () => {
        cy.get('[data-test="burger-ingredient"]').eq(1).click();
        cy.get('[data-test="modal"]').contains('Флюоресцентная булка R2-D3');
        cy.get('[data-test="close-button"]').click();
        cy.get('[data-test="burger-ingredient"]').eq(2).click();
        cy.get('[data-test="modal"]').contains('Соус Spicy-X');
        cy.get('[data-test="close-button"]').click();
        cy.get('[data-test="burger-ingredient"]').eq(3).click();
        cy.get('[data-test="modal"]').contains('Соус фирменный Space Sauce');
        cy.get('[data-test="close-button"]').click();
    });

    it('перетаскивание ингредиента в конструктор и оформление заказа', () => {
        cy.get('[data-test="burger-ingredient"]').eq(1).trigger('dragstart');
        cy.get('[data-test="burger-constructor"]').trigger('drop');
        cy.get('[data-test="burger-ingredient"]').eq(2).trigger('dragstart');
        cy.get('[data-test="burger-constructor"]').trigger('drop');
        cy.get('[data-test="burger-ingredient"]').eq(3).trigger('dragstart');
        cy.get('[data-test="burger-constructor"]').trigger('drop');
        cy.get('[ data-test="send-order"]').click('center');
        cy.get('input[name=email]', { timeout: 20000 }).type('ddtihonov@yandex.ru');
        cy.get('input[name=password]', { timeout: 20000 }).type('123456');
        cy.get('[data-test="login-button"]').click('center');
        cy.get('[data-test="send-order"]').click('center');
        //cy.get('[data-test="modal"]', { timeout: 30000 }).should('exist');
        //cy.get('[data-test="close-button"]').click();
    });
});