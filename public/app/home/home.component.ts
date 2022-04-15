import {Component, Inject, Input} from "@angular/core";
import {currentIdentity, TOASTR_TOKEN, unreviewedSessionCount} from "../ajs-upgraded-providers";
import {SessionsService} from "../sessions/sessions.service";

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    @Input('userSessions') userSessions: any;
    private currentUser: any;
    currentSessionToReview: any;

    constructor(
                private sessionsService: SessionsService,
                @Inject(currentIdentity) private currentIdentity,
                @Inject(TOASTR_TOKEN) private toastr,
                @Inject(unreviewedSessionCount) private unreviewedSessionCount,
    ) {
        this.currentUser = currentIdentity.currentUser;
        this.setNextSessionToReview();
    }
    
    setNextSessionToReview() {
        this.sessionsService.getNextUnreviewedSession(this.currentUser.id)
            .then(response => this.currentSessionToReview = response);
    }
    
    voteYes() {
        this.sessionsService.incrementVote(this.currentSessionToReview.id)
            .then(() => this.sessionsService.addReviewedSession(this.currentUser.id, this.currentSessionToReview.id))
            .then(() => {
                this.setNextSessionToReview();
                /*pull updated value*/
                this.unreviewedSessionCount.updateUnreviewedSessionCount();
            })
    }

    voteNo() {
        this.sessionsService.addReviewedSession(this.currentUser.id, this.currentSessionToReview.id)
            .then(() => {
                this.setNextSessionToReview();
                /*pull updated value*/
                this.unreviewedSessionCount.updateUnreviewedSessionCount();
            })
    }
}

