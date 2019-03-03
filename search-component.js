import { html, LitElement } from 'lit-element';
import style from './search-component-styles.js';
import './data-component.js';
import '@polymer/paper-input/paper-input.js';

class SearchComponent extends LitElement {
  static get properties() {
    return {
      labelButton : String,
      searchTerm : String,
      filteredData : {type : Array},
      fullData : {type : Array}
    };
  }

  static get styles() {
    return style;
  }

  filterData(val){
    var myArr = [];
    if(val){
      Object.keys(this.fullData).forEach(property =>{
        if(this.fullData[property].name.toLowerCase().includes(val.toLowerCase())){
          //console.log("mñe " +this.fullData[property].name);
        }
       // console.log(this.fullData[property].name);
      });
    }
  }

  dataReciever(data){
    this.fullData = data.detail;
    console.log(data.detail);
  }

  constructor() {
    super();
    this.searchTerm = '';
    this.labelButton = "Busca Producto";
  }

  render() {
    return html`
      <data-component @market-data-loader="${this.dataReciever}"></data-component>
      <paper-input 
        always-float-label 
        label="${this.labelButton}"
        value="${this.searchTerm}"
        @keyup=${e => this.filterData(e.target.value)}>
         
        </paper-input>
      `;
    }
}

window.customElements.define("search-component", SearchComponent);