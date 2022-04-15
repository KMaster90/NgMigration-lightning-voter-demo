import {platformBrowser} from '@angular/platform-browser';
import {downgradeComponent, downgradeInjectable, UpgradeModule} from '@angular/upgrade/static';
import {NameParserService} from "./app/admin/nameParser.service";
import {UnreviewedTalkComponent} from "./app/home/unreviewedTalk.component";
import {ProfileComponent} from "./app/profile/profile.component";
import {NavComponent} from "./app/nav/nav.component";
import {SessionsService} from "./app/sessions/sessions.service";
import {HomeComponent} from "./app/home/home.component";
import {SessionDetailComponent} from "./app/sessions/sessionDetail.component";
import {DetailPanelComponent} from "./app/common/detailPanel.component";
import {ResultsComponent} from "./app/admin/results.component";
import {AppModuleNgFactory} from "../aot/public/app/app.module.ngfactory";
import {enableProdMode} from "@angular/core";

declare var angular: angular.IAngularStatic;

if (process.env.ENV === 'production') {
    console.log("PROD MODE");
    enableProdMode();
}

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
    .then( platformRef => {

        //downgrades
        angular.module('app')
            .factory('nameParserService',downgradeInjectable(NameParserService))
            .factory('sessionsService',downgradeInjectable(SessionsService))
            .directive('unreviewedTalk',downgradeComponent({component:UnreviewedTalkComponent}))
            .directive('profile',downgradeComponent({component:ProfileComponent}))
            .directive('nav',downgradeComponent({component:NavComponent}))
            .directive('home',downgradeComponent({component:HomeComponent}))
            .directive('sessionDetail',downgradeComponent({component:SessionDetailComponent}))
            .directive('detailPanel',downgradeComponent({component:DetailPanelComponent}))
            .directive('results',downgradeComponent({component:ResultsComponent}))

        const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
        upgrade.bootstrap(document.documentElement, ['app']);
        console.log('hybrid app bootstrapped')
    })