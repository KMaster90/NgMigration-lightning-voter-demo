import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: 'unreviewed-talk',
    templateUrl: './unreviewedTalk.component.html'
})
export class UnreviewedTalkComponent {
    @Input() session: any;
    @Output() voteYes = new EventEmitter<void>();
    @Output() voteNo = new EventEmitter<void>();

    yes() {
        this.voteYes.emit();
    }


    no() {
        this.voteNo.emit();
    }
}
