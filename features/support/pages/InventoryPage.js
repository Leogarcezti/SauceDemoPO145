export default class InventoryPage {
    constructor(page) {
        this.page = page;
        this.title = '.title'
    }    

    async verificarPaginaInventario() {
        await this.page.waitForSelector(this.title)
        const tituloSecao = await this.page.textContent(this.title)
        if (!tituloSecao.includes('Products')) {
            throw new Error('Login Falhou: Não está na página de inventário')            
    }
}    
}