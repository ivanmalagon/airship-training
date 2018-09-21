import '../../stencil.core';
/**
 * Category Widget
 *
 * @export
 * @class CategoryWidget
 */
export declare class ResponsiveContent {
    private element;
    private sections;
    private ready;
    private sectionChange;
    private activeSection;
    render(): JSX.Element[];
    renderContent(): JSX.Element;
    componentWillLoad(): void;
    componentDidLoad(): void;
    getSections(): object[];
    setVisible(sectionName: string): void;
    private renderTabs;
    private setActive;
    private disableActiveSection;
    private getContentSections;
    private getMap;
    private getSidebars;
    private getPanels;
    private getMapFooter;
}
