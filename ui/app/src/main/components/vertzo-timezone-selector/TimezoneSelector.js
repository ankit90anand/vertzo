import {html, css, LitElement} from 'lit';
import {Timezones} from "../../data/Timezones";


export class TimezoneSelector extends LitElement {
    static get styles() {
        return css`
        
        `;
    }

    static get properties() {
        return {
            value: {type: String}
        }
    }

    constructor() {
        super();

        this.value = new Date().getTimezoneOffset();
    }

    render() {
        return html`
            <select>
                ${Object.keys(Timezones)
                .map(offset=>Timezones[offset])
                .map(timezone=>
                    html`
                        <option value="${timezone.offset}" ?selected="${timezone.offset == this.value}">
                            ${timezone.name}
                        </option>
                    `
                )}
            </select>
        `;
    }
}

customElements.define('vertzo-timezone-selector', TimezoneSelector);
