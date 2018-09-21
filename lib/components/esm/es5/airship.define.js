// airship: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './airship.core.js';
import {
  CategoryWidget,
  Dropdown,
  HistogramWidget,
  Infowindow,
  RangeSlider,
  RangeSliderBar,
  RangeSliderThumb,
  ResponsiveContent,
  Switch
} from './airship.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    CategoryWidget,
    Dropdown,
    HistogramWidget,
    Infowindow,
    RangeSlider,
    RangeSliderBar,
    RangeSliderThumb,
    ResponsiveContent,
    Switch
  ], opts);
}