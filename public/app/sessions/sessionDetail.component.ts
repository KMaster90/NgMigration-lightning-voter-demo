import {Component, Input} from "@angular/core";

@Component({
  selector: 'session-detail',
  templateUrl: './sessionDetail.component.html',
})
export class SessionDetailComponent{

    @Input() session;
    @Input() initialCollapsed: boolean;
}
