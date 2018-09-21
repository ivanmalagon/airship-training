export class Switch {
    /**
     * When the component is attached to the DOM bind the onClick function
     */
    componentDidLoad() {
        this.el.addEventListener('click', this._onClick.bind(this));
    }
    /**
     * Fire a 'change' event with a boolean parameter if the user clicks on an enabled component
     */
    _onClick() {
        const input = this.el.querySelector('input');
        if (!this.disabled) {
            input.checked = !input.checked;
            this.checked = input.checked;
            this.change.emit(input.checked);
        }
    }
    render() {
        return [
            h("input", { class: 'as-switch__input', checked: this.checked, disabled: this.disabled, role: 'switch', id: this.el.id, name: this.name, type: 'checkbox', title: this.el.title }),
            h("label", { class: 'as-switch__toggle', htmlFor: 'switch_0' }),
            h("svg", { class: 'as-switch__thumb', width: '10', height: '8', xmlns: 'http://www.w3.org/2000/svg' },
                h("path", { fill: 'currentColor', 
                    // tslint:disable-next-line
                    d: 'M3.315 7.858L.133 4.441a.506.506 0 0 1 0-.683l.643-.684a.437.437 0 0 1 .642 0l2.219 2.393L8.58.141a.437.437 0 0 1 .643 0l.643.683a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0' }))
        ];
    }
    static get is() { return "as-switch"; }
    static get properties() { return {
        "checked": {
            "type": Boolean,
            "attr": "checked",
            "reflectToAttr": true,
            "mutable": true
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "reflectToAttr": true
        },
        "el": {
            "elementRef": true
        },
        "name": {
            "type": String,
            "attr": "name",
            "reflectToAttr": true
        }
    }; }
    static get events() { return [{
            "name": "change",
            "method": "change",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:as-switch:**/"; }
}
