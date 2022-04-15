import {Component, Inject} from "@angular/core";
import {currentIdentity, $location, TOASTR_TOKEN} from "../ajs-upgraded-providers";
import {Toastr} from "../toastr/toastr.model";

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html'
})
export class ProfileComponent {
    // $location, toastr, currentIdentity
    constructor(@Inject($location) private $location,
                @Inject(currentIdentity) public currentIdentity,
                @Inject(TOASTR_TOKEN) private toastr: Toastr,
    ) {}

    save(newProfile) {
        this.currentIdentity.updateUser(newProfile);
        this.toastr.success('Profile Saved!');
    }

    cancel() {
        this.$location.path('/home');
    }
}