import {Component, Inject} from "@angular/core";
import { currentIdentity, unreviewedSessionCount } from "../ajs-upgraded-providers";

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
})
export class NavComponent {
    currentUser

    constructor(@Inject(currentIdentity) private currentIdentity,
                @Inject(unreviewedSessionCount) public unreviewedSessionCount) {
      this.currentUser = currentIdentity.currentUser;
      unreviewedSessionCount.updateUnreviewedSessionCount();
      this.unreviewedSessionCount = unreviewedSessionCount;
    }
    

    
}
