import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";

@Injectable()
export class SessionsService {

    constructor(private http: HttpClient) {}

    getSessionsByUser(userId) {
        return lastValueFrom(this.http.get('/api/sessions/user/' + userId));
    }

    getAllSessions() {
        return lastValueFrom(this.http.get('/api/sessions'))
    }

    createNewSession(newSession) {
        return lastValueFrom(this.http.post('/api/sessions', newSession));
    }

    getNextUnreviewedSession(userId) {
        return lastValueFrom(this.http.get(`/api/users/${userId}/randomUnreviewedSession`)) ;
    }

    addReviewedSession(userId, sessionId) {
        return lastValueFrom(this.http.post('/api/users/' + userId + '/reviewSession/' + sessionId,null));
    }

    incrementVote(sessionId) {
        return lastValueFrom(this.http.put('/api/sessions/' + sessionId + '/incrementVote/',null));
    }

    getUnreviewedCount(userId) {
        return lastValueFrom(this.http.get('/api/users/' + userId + '/unreviewedSessionCount'));
    }
}