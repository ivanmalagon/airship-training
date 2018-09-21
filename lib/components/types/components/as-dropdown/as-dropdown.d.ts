import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
/**
 * Dropdown Widget
 *
 * @export
 * @class Dropdown
 */
export declare class Dropdown {
    /**
     * Array of options to display in the dropdown
     *
     * @type {string[]}
     * @memberof Dropdown
     */
    options: object[];
    /**
     * Selected option to show in the dropdown
     *
     * @type {string}
     * @memberof Dropdown
     */
    selectedOption: string;
    /**
     * Default text to show when no option is selected
     *
     * @type {string}
     * @memberof Dropdown
     */
    defaultText: string;
    /**
     * Allow the user to clear selected option
     *
     * @type {string}
     * @memberof Dropdown
     */
    showClearButton: boolean;
    /**
     * Fired when selected option changes or option is cleared
     *
     * @type {string}
     * @memberof Dropdown
     */
    optionChanged: EventEmitter<string>;
    private isOpen;
    private selectedOptionObject;
    onSelectionChanged(): void;
    render(): JSX.Element;
    /**
     * Get current selected option
     *
     * @returns {string}
     * @memberof Dropdown
     */
    getSelectedOption(): string;
    private renderOptions;
    private isSelected;
    private select;
    private toggleList;
    private closeList;
    private clearOption;
    private emitOption;
}
