import { InjectionToken } from "@angular/core";
import {Toastr} from "./toastr/toastr.model";

export const currentIdentity = new InjectionToken("CurrentIdentity");
export function currentIdentityFactory(i: any) {return i.get('currentIdentity')}
export const getCurrentIdentityProvider = {
  provide: currentIdentity,
  useFactory: currentIdentityFactory,
  deps: ['$injector']
};

export const $location = new InjectionToken("$location");
export function getLocationFactory(i: any) {return i.get('$location')}
export const getLocationProvider = {
  provide: $location,
  useFactory: getLocationFactory,
  deps: ['$injector']
};

export const TOASTR_TOKEN = new InjectionToken("toastr");
export function getToastrFactory() {return toastr}
export const getToastrProvider = {
  provide: TOASTR_TOKEN,
  useFactory: getToastrFactory,
};

// export const sessions = new InjectionToken("sessions");
// export function getSessionsFactory(i: any) {return i.get('sessions')}
// export const getSessionsProvider = {
//   provide: sessions,
//   useFactory: getSessionsFactory,
//   deps: ['$injector']
// };

export const unreviewedSessionCount = new InjectionToken("unreviewedSessionCount");
export function getUnreviewedSessionCountFactory(i: any) {return i.get('unreviewedSessionCount')}
export const getUnreviewedSessionCountProvider = {
  provide: unreviewedSessionCount,
  useFactory: getUnreviewedSessionCountFactory,
  deps: ['$injector']
};



