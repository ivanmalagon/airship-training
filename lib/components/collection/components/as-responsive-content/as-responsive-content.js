/**
 * Category Widget
 *
 * @export
 * @class CategoryWidget
 */
export class ResponsiveContent {
    constructor() {
        this.sections = [];
    }
    render() {
        return [
            this.renderTabs(),
            this.renderContent()
        ];
    }
    renderContent() {
        return (h("section", { class: 'as-content' },
            h("slot", null)));
    }
    componentWillLoad() {
        this.sections = this.getContentSections();
    }
    componentDidLoad() {
        this.ready.emit();
    }
    getSections() {
        return this.sections;
    }
    setVisible(sectionName) {
        const sectionFound = this.sections.find((section) => section.name === sectionName);
        if (sectionFound) {
            this.setActive(sectionFound);
        }
    }
    renderTabs() {
        const tabs = this.sections.map((section, index) => {
            if (!section.element) {
                return;
            }
            const cssClasses = {
                'as-tabs__item': true,
                'as-tabs__item--active': section.active
            };
            return (h("button", { onClick: () => this.setActive(section), role: 'tab', class: cssClasses }, section.name || index));
        });
        return (h("div", { role: 'tablist', class: 'as-toolbar-tabs as-tabs as-tabs--xl' }, tabs));
    }
    setActive(section) {
        if (section.active) {
            return;
        }
        this.disableActiveSection();
        if (section.activeAction) {
            section.activeAction(section);
        }
        else {
            section.element.classList.add(section.activeClass || ACTIVE_CLASSES[section.type]);
            section.active = true;
        }
        this.activeSection = section;
        this.sections = [...this.sections];
        this.sectionChange.emit(section);
    }
    disableActiveSection() {
        if (!this.activeSection) {
            return;
        }
        if (this.activeSection.disableAction) {
            this.activeSection.disableAction(this.activeSection);
            return;
        }
        this.activeSection.element.classList.remove(this.activeSection.activeClass || ACTIVE_CLASSES[this.activeSection.type]);
        this.activeSection.active = false;
    }
    getContentSections() {
        const sections = [
            this.getMap(),
            ...this.getSidebars(),
            ...this.getPanels(),
            this.getMapFooter()
        ];
        if (sections.length) {
            sections.sort((a, b) => a.tabOrder - b.tabOrder);
            this.setActive(sections[0]);
        }
        return sections;
    }
    getMap() {
        const mapWrapper = this.element.querySelector('.as-map-area');
        function activeAction(section) {
            section.active = true;
        }
        function disableAction(section) {
            section.active = false;
        }
        return {
            activeAction,
            disableAction,
            element: mapWrapper,
            name: mapWrapper.getAttribute('data-name') || 'Map',
            tabOrder: mapWrapper.getAttribute('data-tab-order') || 0,
            type: 'map'
        };
    }
    getSidebars() {
        const sidebars = Array.from(this.element.querySelectorAll('.as-sidebar'));
        const sidebarSections = sidebars.map((sidebar, index) => {
            return {
                activeClass: `as-sidebar--visible`,
                element: sidebar,
                name: sidebar.getAttribute('data-name') || `Sidebar ${index}`,
                tabOrder: sidebar.getAttribute('data-tab-order') || 0,
                type: 'sidebar'
            };
        });
        return sidebarSections;
    }
    getPanels() {
        const panels = Array.from(this.element.querySelectorAll('.as-map-panels'));
        const panelsSections = panels.map((panel, index) => ({
            element: panel,
            name: panel.getAttribute('data-name') || `Panel ${index}`,
            tabOrder: panel.getAttribute('data-tab-order') || 0,
            type: 'panels'
        }));
        return panelsSections;
    }
    getMapFooter() {
        const mapFooter = this.element.querySelector('.as-map-footer');
        return {
            element: mapFooter,
            name: mapFooter && mapFooter.getAttribute('data-name') || 'Bottom Bar',
            tabOrder: mapFooter && mapFooter.getAttribute('data-tab-order') || 0,
            type: 'mapFooter'
        };
    }
    static get is() { return "as-responsive-content"; }
    static get properties() { return {
        "element": {
            "elementRef": true
        },
        "getSections": {
            "method": true
        },
        "sections": {
            "state": true
        },
        "setVisible": {
            "method": true
        }
    }; }
    static get events() { return [{
            "name": "ready",
            "method": "ready",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "sectionChange",
            "method": "sectionChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:as-responsive-content:**/"; }
}
const ACTIVE_CLASSES = {
    mapFooter: 'as-map-footer--visible',
    panels: 'as-map-panels--visible'
};
