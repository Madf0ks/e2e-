describe('1. Проверить функциональность сущности "Корзина"', () => {
    beforeEach(() => {
        cy.visit('https://flowers-18.ru/')
        cy.viewport(1920, 1080)
    })
    it('1.1. Наличие корзины', () => {
        cy.get('.basket-thumbnail').should('exist')
    })
    it('1.2. Добавление товаров', () => {
        const product = cy.get('.product-item-container').first().click()
        const buttonAdd = cy.get('#bx_117848907_1088_add_basket_link').click()
        const goToCart = cy.get('.popup-window-buttons').find('button').eq(0).wait(2000).click()
        const items = cy.get('.basket-items').should('have.length', '1')

    })
    it('1.3. Удаление товаров', () => {
        const product = cy.get('.product-item-container').first().click()
        const buttonAdd = cy.get('#bx_117848907_1088_add_basket_link').click()
        const goToCart = cy.get('.popup-window-buttons').find('button').eq(0).wait(2000).click()
        const countItems = cy.get('.basket-item-amount-filed ').should('have.value', '1')
        const addAction = cy.get('.basket-item-amount-btn-plus').click()
        const countItemsEnd = cy.get('.basket-item-amount-filed ').should('have.value', '2')
    })
    it('1.4. Удаление товаров', () => {
        const product = cy.get('.product-item-container').first().click()
        const buttonAdd = cy.get('#bx_117848907_1088_add_basket_link').click()
        const goToCart = cy.get('.popup-window-buttons').find('button').eq(0).wait(2000).click()
        const itemsStart = cy.get('.basket-items').should('have.length', '1')
        const deleteItem = cy.get('div.basket-item-actions-remove').click()
        const clearItem = cy.get('div.basket-items-list-item-clear-btn').click()
        const itemsEnd = cy.get('.basket-items').should('have.length', '0')
    })

})

describe('2. Проверить наличие и функциональность каталога', () => {
    beforeEach(() => {
        cy.visit('https://flowers-18.ru/')
        cy.viewport(1920, 1080)
    })
    it('2.1. Наличие каталога товаров', () => {
        const catalog = cy.get('.catalog-section-wp')

    })
    it('2.2. Перейти на на страницу товара', () => {
        const product = cy.get('.product-item').first().click()
    })
    it('2.3. Возможность добавить товар в корзину', ()=> {
        const product = cy.get('.product-item').first().click()
        const addCartAction = cy.get('#bx_117848907_1088_add_basket_link').click()
        const closePopup = cy.get('.popup-window-buttons').find('button').eq(1).wait(2000).click()
    })
})

describe('3. Проверить наличие и функциональность категорий', () => {
    beforeEach(() => {
        cy.visit('https://flowers-18.ru/')
        cy.viewport(1920, 1080)
    })
    it('3.1. Должен быть подраздел с категориями товаров',()=> {
        const categoriesContainer = cy.get('.categories-wrapper-outer').should('exist')
        const categories = cy.get('.category-item').should('exist')

    })

})

describe('4. Проверить функциональность поиска', () => {
    beforeEach(() => {
        cy.visit('https://flowers-18.ru/')
        cy.viewport(1920, 1080)
    })
    it(' 4.1. Наличие элемента поиска', () => {
        const searchElement = cy.get('#title-search-input').should('exist')
    })
    it('4.2. Любой запрос должен отдавать запрашиваемую информацию', () => {
        const searchElement = cy.get('#title-search-input').type('Розы{enter}')
        const catalogSectionResult = cy.get('.catalog-section').should('exist')
        const cards = cy.get('.product-item-big-card').should('exist')
    })

})

describe('5. Карточки товаров', () => {
    beforeEach(() => {
        cy.visit('https://flowers-18.ru/')
        cy.viewport(1920, 1080)
    })
    it('5.1. Содержание карточки: картинка, заголовок, цена, кнопка купить, баллы', () => {
        const getProductContent = () => cy.get('.product-item').first()
        const getCardActions =()=>  cy.get('.product-item-info-container').first()
        getProductContent().find('.product-item-image-original').should('exist')
        getProductContent().find('#bx_3966226736_1088_362ce596257894d11ab5c1d73d13c755_price').should('exist')
        getProductContent().find('.product-item-title').should('exist')
        getCardActions().get('.basket-buy').should('exist')
    })
    it('5.2. Правильная (  не битая ) ссылка, которая ведет на страницу товара', () => {
       const product = cy.get('.product-item').first().click()
    })

})