/**
 * Dropdown Widget
 *
 * @export
 * @class Dropdown
 */
export class Dropdown {
    constructor() {
        /**
         * Array of options to display in the dropdown
         *
         * @type {string[]}
         * @memberof Dropdown
         */
        this.options = [];
        /**
         * Default text to show when no option is selected
         *
         * @type {string}
         * @memberof Dropdown
         */
        this.defaultText = '';
        /**
         * Allow the user to clear selected option
         *
         * @type {string}
         * @memberof Dropdown
         */
        this.showClearButton = false;
        this.isOpen = false;
        this.selectedOptionObject = {};
    }
    onSelectionChanged() {
        const selectedOption = this.options.find((option) => option.value === this.selectedOption);
        if (selectedOption) {
            this.selectedOptionObject = selectedOption;
        }
    }
    render() {
        const allowRemoveSelectedOption = this.showClearButton && Boolean(this.selectedOption);
        const controlClasses = {
            'as-dropdown': true,
            'as-dropdown--clear': allowRemoveSelectedOption,
            'as-dropdown--open': this.isOpen
        };
        return (h("div", { class: controlClasses },
            h("button", { class: 'as-dropdown__control as-body', "aria-haspopup": 'true', "aria-expanded": this.isOpen, onClick: () => this.toggleList() },
                this.selectedOptionObject.text || this.selectedOptionObject.value || this.defaultText,
                h("div", { class: 'as-dropdown__arrow' },
                    h("svg", { viewBox: '2 6 12 6', xmlns: 'http://www.w3.org/2000/svg' },
                        h("path", { d: 'M8.30988427,11.1237193 L7.69011573,11.1237193 L15.2195214,4.12372525 C15.415115,3.94188438 15.7124148,3.96294311 15.8835591,4.17076125 C16.0547035,4.37857939 16.0348835,4.69446043 15.83929,4.8763013 L8.30988427,11.8762953 C8.13246042,12.041244 7.86753958,12.041244 7.69011573,11.8762953 L0.160710032,4.8763013 C-0.034883519,4.69446043 -0.0547035068,4.37857939 0.116440851,4.17076125 C0.287585208,3.96294311 0.584885024,3.94188438 0.780478575,4.12372525 L8.30988427,11.1237193 Z' })))),
            h("ul", { tabindex: '-1', class: 'as-dropdown__list' }, this.renderOptions(this.options)),
            allowRemoveSelectedOption ?
                h("button", { class: 'as-dropdown__clear', onClick: () => this.clearOption() },
                    h("svg", { viewBox: '2 2 12 12', xmlns: 'http://www.w3.org/2000/svg' },
                        h("path", { d: 'M8,8.58232323 L1.70292632,14.8793969 C1.5421222,15.040201 1.28140721,15.040201 1.12060309,14.8793969 C0.95979897,14.7185928 0.95979897,14.4578778 1.12060309,14.2970737 L7.41767677,8 L1.12060309,1.70292632 C0.95979897,1.5421222 0.95979897,1.28140721 1.12060309,1.12060309 C1.28140721,0.95979897 1.5421222,0.95979897 1.70292632,1.12060309 L8,7.41767677 L14.2970737,1.12060309 C14.4578778,0.95979897 14.7185928,0.95979897 14.8793969,1.12060309 C15.040201,1.28140721 15.040201,1.5421222 14.8793969,1.70292632 L8.58232323,8 L14.8793969,14.2970737 C15.040201,14.4578778 15.040201,14.7185928 14.8793969,14.8793969 C14.7185928,15.040201 14.4578778,15.040201 14.2970737,14.8793969 L8,8.58232323 Z' }))) : ''));
    }
    /**
     * Get current selected option
     *
     * @returns {string}
     * @memberof Dropdown
     */
    getSelectedOption() {
        return this.selectedOption;
    }
    renderOptions(options) {
        return options.map((option) => {
            const buttonClasses = {
                'as-body': true,
                'is-selected': this.isSelected(option)
            };
            return (h("li", { class: 'as-dropdown__list-item', "data-value": option.value },
                h("button", { class: buttonClasses, onClick: () => this.select(option) }, option.text || option.value)));
        });
    }
    isSelected(option) {
        return option === this.selectedOptionObject;
    }
    select(option) {
        if (this.selectedOption === option) {
            return;
        }
        this.selectedOption = option.value;
        this.selectedOptionObject = option;
        this.closeList();
        this.emitOption();
    }
    toggleList() {
        this.isOpen = !this.isOpen;
    }
    closeList() {
        this.isOpen = false;
    }
    clearOption() {
        this.selectedOption = undefined;
        this.emitOption();
    }
    emitOption() {
        this.optionChanged.emit(this.selectedOption);
    }
    static get is() { return "as-dropdown"; }
    static get properties() { return {
        "defaultText": {
            "type": String,
            "attr": "default-text"
        },
        "getSelectedOption": {
            "method": true
        },
        "isOpen": {
            "state": true
        },
        "options": {
            "type": "Any",
            "attr": "options"
        },
        "selectedOption": {
            "type": String,
            "attr": "selected-option",
            "mutable": true,
            "watchCallbacks": ["onSelectionChanged"]
        },
        "selectedOptionObject": {
            "state": true
        },
        "showClearButton": {
            "type": Boolean,
            "attr": "show-clear-button"
        }
    }; }
    static get events() { return [{
            "name": "optionChanged",
            "method": "optionChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:as-dropdown:**/"; }
}
