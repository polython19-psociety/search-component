import { html, LitElement } from 'lit-element';

class MarketDataComponent extends LitElement {
    static get properties() {
        return {
          marketData : {type : Array}
        };
    }
    
    constructor() {
        super();
        this.getMarketData("wallmart");
    }

    getMarketData(tienda){
        let baseURL = 'https://paylesly-ac089.firebaseio.com/wallmart.json';
        baseURL = baseURL.concat(tienda, ".json");
        fetch(baseURL).then(response => response.json()).then(data => {
            this.dispatchEvent(new CustomEvent('market-data-loader', {detail:data, bubbles:true, composed : true}));
        }).catch(error => console.error("Error : " + error))
    }

    render() {
        return html`
        `;
    }
}

customElements.define("data-component", MarketDataComponent);