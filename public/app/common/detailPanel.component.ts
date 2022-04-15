import {Component, Input} from "@angular/core";

// transclude: true,
@Component({
    selector: 'detail-panel',
    templateUrl: './detailPanel.component.html',
})

export class DetailPanelComponent {
    @Input() title: string;
    @Input() collapsed: boolean;

    collapse() {
        this.collapsed = !this.collapsed;
    }
}







