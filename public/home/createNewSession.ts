angular.module('app').component('createNewSession', {

    templateUrl: './createNewSession.html',
    bindings: {
        userSessions: '='
    },
    controller: function (toastr, currentIdentity, sessionsService) {

        this.create = function () {
            let newUserSession = {
                title: this.title,
                length: parseInt(this.length),
                abstract: this.abstract,
                userFirstName: currentIdentity.currentUser.firstName,
                userLastName: currentIdentity.currentUser.lastName,
                userId: currentIdentity.currentUser.id,
            }

            sessionsService.createNewSession(newUserSession)
                .then((response) => this.userSessions.push(response)
                )

        }
    }
})
