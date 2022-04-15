import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UpgradeModule} from "@angular/upgrade/static";
import {AppComponent} from "./app.component";
import {NameParserService} from "./admin/nameParser.service";
import {UnreviewedTalkComponent} from "./home/unreviewedTalk.component";
import {TalkDurationPipe} from "./common/talkDuration.pipe";
import {ProfileComponent} from "./profile/profile.component";
import {
    getCurrentIdentityProvider,
    getLocationProvider,
    getToastrProvider, getUnreviewedSessionCountProvider
} from "./ajs-upgraded-providers";
import {NavComponent} from "./nav/nav.component";
import {SessionsService} from "./sessions/sessions.service";
import {HomeComponent} from "./home/home.component";
import {SessionDetailComponent} from "./sessions/sessionDetail.component";
import {DetailPanelComponent} from "./common/detailPanel.component";
import {ResultsComponent} from "./admin/results.component";
import {SessionDetailWithVotesComponent} from "./sessions/sessionDetailWithVotes.component";

@NgModule({
    imports: [
        //Modules
        BrowserModule,
        FormsModule,
        HttpClientModule,
        UpgradeModule
    ],
    declarations: [
        //Components
        AppComponent,
        UnreviewedTalkComponent,
        ProfileComponent,
        HomeComponent,
        NavComponent,
        SessionDetailComponent,
        DetailPanelComponent,
        ResultsComponent,
        SessionDetailWithVotesComponent,
       // NavComponentES&, // not in the entryComponents because we use it just in angularX
        //Pipes
        TalkDurationPipe,
    ],
    providers: [
        //Services
        NameParserService,
        SessionsService,
        getLocationProvider,
        getCurrentIdentityProvider,
        getToastrProvider,
        getUnreviewedSessionCountProvider
    ],
    bootstrap: [
        //Start
        AppComponent
    ],
    entryComponents: [
        //Components
        AppComponent,
        UnreviewedTalkComponent,
        ProfileComponent,
        NavComponent,
        HomeComponent,
        SessionDetailComponent,
        DetailPanelComponent,
        ResultsComponent,
    ]
})
export class AppModule {
}