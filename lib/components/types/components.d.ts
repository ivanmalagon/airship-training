import './stencil.core';
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import './stencil.core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import {
  HistogramColorRange,
  HistogramData,
} from './components/as-histogram-widget/as-histogram-widget';

declare global {

  namespace StencilComponents {
    interface AsCategoryWidget {
      /**
       * Array of categories to display in the widget. Each category should include a `name` and a `value`. You can also override the bar color for each category with `color`.
       */
      'categories': object[];
      /**
       * Clear current selected categories
       */
      'clearSelection': () => void;
      /**
       * Default color to draw the bars. Default value is `#47DB99`.
       */
      'defaultBarColor': string;
      /**
       * Description text of the widget
       */
      'description': string;
      /**
       * Disable category selection in Widget
       */
      'disableInteractivity': boolean;
      /**
       * Get current selected categories
       */
      'getSelectedCategories': () => string[];
      /**
       * Heading text of the widget
       */
      'heading': string;
      /**
       * If truthy, it'll show a button to clear selected categories when there are any. Default value is `false`.
       */
      'showClearButton': boolean;
      /**
       * If truthy, it'll render the heading and component's description. Default value is `true`.
       */
      'showHeader': boolean;
      /**
       * If truthy, we'll use the sum of all categories' value to render the bar percentage. By default, we use the maximum category value to render the bar percentage.
       */
      'useTotalPercentage': boolean;
      /**
       * The number of visible categories without aggregation.
       */
      'visibleCategories': number;
    }
  }

  interface HTMLAsCategoryWidgetElement extends StencilComponents.AsCategoryWidget, HTMLStencilElement {}

  var HTMLAsCategoryWidgetElement: {
    prototype: HTMLAsCategoryWidgetElement;
    new (): HTMLAsCategoryWidgetElement;
  };
  interface HTMLElementTagNameMap {
    'as-category-widget': HTMLAsCategoryWidgetElement;
  }
  interface ElementTagNameMap {
    'as-category-widget': HTMLAsCategoryWidgetElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'as-category-widget': JSXElements.AsCategoryWidgetAttributes;
    }
  }
  namespace JSXElements {
    export interface AsCategoryWidgetAttributes extends HTMLAttributes {
      /**
       * Array of categories to display in the widget. Each category should include a `name` and a `value`. You can also override the bar color for each category with `color`.
       */
      'categories'?: object[];
      /**
       * Default color to draw the bars. Default value is `#47DB99`.
       */
      'defaultBarColor'?: string;
      /**
       * Description text of the widget
       */
      'description'?: string;
      /**
       * Disable category selection in Widget
       */
      'disableInteractivity'?: boolean;
      /**
       * Heading text of the widget
       */
      'heading'?: string;
      /**
       * Fired when selected categories changed or selected categories are cleared.
       */
      'onCategoriesSelected'?: (event: CustomEvent<string[]>) => void;
      /**
       * If truthy, it'll show a button to clear selected categories when there are any. Default value is `false`.
       */
      'showClearButton'?: boolean;
      /**
       * If truthy, it'll render the heading and component's description. Default value is `true`.
       */
      'showHeader'?: boolean;
      /**
       * If truthy, we'll use the sum of all categories' value to render the bar percentage. By default, we use the maximum category value to render the bar percentage.
       */
      'useTotalPercentage'?: boolean;
      /**
       * The number of visible categories without aggregation.
       */
      'visibleCategories'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AsDropdown {
      /**
       * Default text to show when no option is selected
       */
      'defaultText': string;
      /**
       * Get current selected option
       */
      'getSelectedOption': () => string;
      /**
       * Array of options to display in the dropdown
       */
      'options': object[];
      /**
       * Selected option to show in the dropdown
       */
      'selectedOption': string;
      /**
       * Allow the user to clear selected option
       */
      'showClearButton': boolean;
    }
  }

  interface HTMLAsDropdownElement extends StencilComponents.AsDropdown, HTMLStencilElement {}

  var HTMLAsDropdownElement: {
    prototype: HTMLAsDropdownElement;
    new (): HTMLAsDropdownElement;
  };
  interface HTMLElementTagNameMap {
    'as-dropdown': HTMLAsDropdownElement;
  }
  interface ElementTagNameMap {
    'as-dropdown': HTMLAsDropdownElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'as-dropdown': JSXElements.AsDropdownAttributes;
    }
  }
  namespace JSXElements {
    export interface AsDropdownAttributes extends HTMLAttributes {
      /**
       * Default text to show when no option is selected
       */
      'defaultText'?: string;
      /**
       * Fired when selected option changes or option is cleared
       */
      'onOptionChanged'?: (event: CustomEvent<string>) => void;
      /**
       * Array of options to display in the dropdown
       */
      'options'?: object[];
      /**
       * Selected option to show in the dropdown
       */
      'selectedOption'?: string;
      /**
       * Allow the user to clear selected option
       */
      'showClearButton'?: boolean;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AsHistogramWidget {
      /**
       * Clears the Histogram selection
       */
      'clearSelection': () => void;
      /**
       * Override color for the histogram bars
       */
      'color': string;
      /**
       * Color range for histogram data
       */
      'colorRange': HistogramColorRange[];
      /**
       * Histogram data to be displayed
       */
      'data': HistogramData[];
      /**
       * Default formatting function. Makes the value a readable number and converts it into a string. Useful to compose with your own formatting function.
       */
      'defaultFormatter': (data: HistogramData) => string;
      /**
       * Description of the widget to be displayed
       */
      'description': string;
      /**
       * Disables selection brushes and events for the widget
       */
      'disableInteractivity': boolean;
      /**
       * Returns the current selection
       */
      'getSelection': () => number[];
      /**
       * Title of the widget to be displayed
       */
      'heading': string;
      /**
       * Override color for the selected histogram bars
       */
      'selectedColor': string;
      /**
       * Programmatically set the selection. It will be adjusted to the buckets present in {@link data}. To clear see {@link clearSelection} or call with null
       */
      'setSelection': (values: number[]) => void;
      /**
       * Display a clear button that clears the histogram selection.
       */
      'showClear': boolean;
      /**
       * Toggles displaying title and description
       */
      'showHeader': boolean;
      /**
       * Function that formats the tooltip. Receives HistogramData and outputs a string
       */
      'tooltipFormatter': (value: HistogramData) => string;
    }
  }

  interface HTMLAsHistogramWidgetElement extends StencilComponents.AsHistogramWidget, HTMLStencilElement {}

  var HTMLAsHistogramWidgetElement: {
    prototype: HTMLAsHistogramWidgetElement;
    new (): HTMLAsHistogramWidgetElement;
  };
  interface HTMLElementTagNameMap {
    'as-histogram-widget': HTMLAsHistogramWidgetElement;
  }
  interface ElementTagNameMap {
    'as-histogram-widget': HTMLAsHistogramWidgetElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'as-histogram-widget': JSXElements.AsHistogramWidgetAttributes;
    }
  }
  namespace JSXElements {
    export interface AsHistogramWidgetAttributes extends HTMLAttributes {
      /**
       * Override color for the histogram bars
       */
      'color'?: string;
      /**
       * Color range for histogram data
       */
      'colorRange'?: HistogramColorRange[];
      /**
       * Histogram data to be displayed
       */
      'data'?: HistogramData[];
      /**
       * Description of the widget to be displayed
       */
      'description'?: string;
      /**
       * Disables selection brushes and events for the widget
       */
      'disableInteractivity'?: boolean;
      /**
       * Title of the widget to be displayed
       */
      'heading'?: string;
      /**
       * Fired when user update or clear the widget selection.
       */
      'onSelectionChanged'?: (event: CustomEvent<number[]>) => void;
      /**
       * Override color for the selected histogram bars
       */
      'selectedColor'?: string;
      /**
       * Display a clear button that clears the histogram selection.
       */
      'showClear'?: boolean;
      /**
       * Toggles displaying title and description
       */
      'showHeader'?: boolean;
      /**
       * Function that formats the tooltip. Receives HistogramData and outputs a string
       */
      'tooltipFormatter'?: (value: HistogramData) => string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AsInfowindow {
      'src': string;
    }
  }

  interface HTMLAsInfowindowElement extends StencilComponents.AsInfowindow, HTMLStencilElement {}

  var HTMLAsInfowindowElement: {
    prototype: HTMLAsInfowindowElement;
    new (): HTMLAsInfowindowElement;
  };
  interface HTMLElementTagNameMap {
    'as-infowindow': HTMLAsInfowindowElement;
  }
  interface ElementTagNameMap {
    'as-infowindow': HTMLAsInfowindowElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'as-infowindow': JSXElements.AsInfowindowAttributes;
    }
  }
  namespace JSXElements {
    export interface AsInfowindowAttributes extends HTMLAttributes {
      'src'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AsRangeSlider {
      /**
       * Disables component if truthy
       */
      'disabled': boolean;
      /**
       * If this property is set to true, and it has multiple value, you can drag the entire track.
       */
      'draggable': boolean;
      /**
       * If this property receives a function, it will be used to format the numbers (eg. for adding $ or €).
       */
      'formatValue': (value: number) => void;
      /**
       * Top limit of the range. You cannot drag your slider beyond this value. By default the value is 10.
       */
      'maxValue': number;
      /**
       * Bottom limit of the range. You cannot drag your slider below this value. By default the value is 0.
       */
      'minValue': number;
      /**
       * Initial range.
       */
      'range': number[];
      /**
       * Increment/decrement step of the slider. You can change the step setting a different number to this property. Defaults to 1.
       */
      'step': number;
      /**
       * Initial value.
       */
      'value': number;
    }
  }

  interface HTMLAsRangeSliderElement extends StencilComponents.AsRangeSlider, HTMLStencilElement {}

  var HTMLAsRangeSliderElement: {
    prototype: HTMLAsRangeSliderElement;
    new (): HTMLAsRangeSliderElement;
  };
  interface HTMLElementTagNameMap {
    'as-range-slider': HTMLAsRangeSliderElement;
  }
  interface ElementTagNameMap {
    'as-range-slider': HTMLAsRangeSliderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'as-range-slider': JSXElements.AsRangeSliderAttributes;
    }
  }
  namespace JSXElements {
    export interface AsRangeSliderAttributes extends HTMLAttributes {
      /**
       * Disables component if truthy
       */
      'disabled'?: boolean;
      /**
       * If this property is set to true, and it has multiple value, you can drag the entire track.
       */
      'draggable'?: boolean;
      /**
       * If this property receives a function, it will be used to format the numbers (eg. for adding $ or €).
       */
      'formatValue'?: (value: number) => void;
      /**
       * Top limit of the range. You cannot drag your slider beyond this value. By default the value is 10.
       */
      'maxValue'?: number;
      /**
       * Bottom limit of the range. You cannot drag your slider below this value. By default the value is 0.
       */
      'minValue'?: number;
      'onChange'?: (event: CustomEvent<number[]>) => void;
      'onChangeEnd'?: (event: CustomEvent<number[]>) => void;
      'onChangeStart'?: (event: CustomEvent<number[]>) => void;
      /**
       * Initial range.
       */
      'range'?: number[];
      /**
       * Increment/decrement step of the slider. You can change the step setting a different number to this property. Defaults to 1.
       */
      'step'?: number;
      /**
       * Initial value.
       */
      'value'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AsRangeSliderThumb {
      'disabled': boolean;
      'formatValue': (value: number) => void;
      'percentage': number;
      'value': number;
      'valueMax': number;
      'valueMin': number;
    }
  }

  interface HTMLAsRangeSliderThumbElement extends StencilComponents.AsRangeSliderThumb, HTMLStencilElement {}

  var HTMLAsRangeSliderThumbElement: {
    prototype: HTMLAsRangeSliderThumbElement;
    new (): HTMLAsRangeSliderThumbElement;
  };
  interface HTMLElementTagNameMap {
    'as-range-slider-thumb': HTMLAsRangeSliderThumbElement;
  }
  interface ElementTagNameMap {
    'as-range-slider-thumb': HTMLAsRangeSliderThumbElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'as-range-slider-thumb': JSXElements.AsRangeSliderThumbAttributes;
    }
  }
  namespace JSXElements {
    export interface AsRangeSliderThumbAttributes extends HTMLAttributes {
      'disabled'?: boolean;
      'formatValue'?: (value: number) => void;
      'onThumbChangeEnd'?: (event: CustomEvent<void>) => void;
      'onThumbChangeStart'?: (event: CustomEvent<void>) => void;
      'onThumbDecrease'?: (event: CustomEvent<number>) => void;
      'onThumbIncrease'?: (event: CustomEvent<number>) => void;
      'onThumbMove'?: (event: CustomEvent<number>) => void;
      'percentage'?: number;
      'value'?: number;
      'valueMax'?: number;
      'valueMin'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AsRangeSliderBar {
      'disabled': boolean;
      'draggable': boolean;
      'rangeEndPercentage': number;
      'rangeStartPercentage': number;
      'stepPercentage': number;
    }
  }

  interface HTMLAsRangeSliderBarElement extends StencilComponents.AsRangeSliderBar, HTMLStencilElement {}

  var HTMLAsRangeSliderBarElement: {
    prototype: HTMLAsRangeSliderBarElement;
    new (): HTMLAsRangeSliderBarElement;
  };
  interface HTMLElementTagNameMap {
    'as-range-slider-bar': HTMLAsRangeSliderBarElement;
  }
  interface ElementTagNameMap {
    'as-range-slider-bar': HTMLAsRangeSliderBarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'as-range-slider-bar': JSXElements.AsRangeSliderBarAttributes;
    }
  }
  namespace JSXElements {
    export interface AsRangeSliderBarAttributes extends HTMLAttributes {
      'disabled'?: boolean;
      'draggable'?: boolean;
      'onBarChangeEnd'?: (event: CustomEvent<void>) => void;
      'onBarChangeStart'?: (event: CustomEvent<void>) => void;
      'onBarMove'?: (event: CustomEvent<number[]>) => void;
      'rangeEndPercentage'?: number;
      'rangeStartPercentage'?: number;
      'stepPercentage'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AsResponsiveContent {
      'getSections': () => object[];
      'setVisible': (sectionName: string) => void;
    }
  }

  interface HTMLAsResponsiveContentElement extends StencilComponents.AsResponsiveContent, HTMLStencilElement {}

  var HTMLAsResponsiveContentElement: {
    prototype: HTMLAsResponsiveContentElement;
    new (): HTMLAsResponsiveContentElement;
  };
  interface HTMLElementTagNameMap {
    'as-responsive-content': HTMLAsResponsiveContentElement;
  }
  interface ElementTagNameMap {
    'as-responsive-content': HTMLAsResponsiveContentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'as-responsive-content': JSXElements.AsResponsiveContentAttributes;
    }
  }
  namespace JSXElements {
    export interface AsResponsiveContentAttributes extends HTMLAttributes {
      'onReady'?: (event: CustomEvent<void>) => void;
      'onSectionChange'?: (event: CustomEvent<object>) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AsSwitch {
      /**
       * Boolean flag to control if the input is checked or not
       */
      'checked': boolean;
      /**
       * Boolean flag to control when the switch is disabled or not
       */
      'disabled': boolean;
      /**
       * The input name
       */
      'name': string;
    }
  }

  interface HTMLAsSwitchElement extends StencilComponents.AsSwitch, HTMLStencilElement {}

  var HTMLAsSwitchElement: {
    prototype: HTMLAsSwitchElement;
    new (): HTMLAsSwitchElement;
  };
  interface HTMLElementTagNameMap {
    'as-switch': HTMLAsSwitchElement;
  }
  interface ElementTagNameMap {
    'as-switch': HTMLAsSwitchElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'as-switch': JSXElements.AsSwitchAttributes;
    }
  }
  namespace JSXElements {
    export interface AsSwitchAttributes extends HTMLAttributes {
      /**
       * Boolean flag to control if the input is checked or not
       */
      'checked'?: boolean;
      /**
       * Boolean flag to control when the switch is disabled or not
       */
      'disabled'?: boolean;
      /**
       * The input name
       */
      'name'?: string;
      /**
       * Event triggered by a enabled Switch component when the user clicks on it.
       */
      'onChange'?: (event: CustomEvent) => void;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;