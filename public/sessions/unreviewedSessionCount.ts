angular.module('app').service('unreviewedSessionCount', class UnreviewedSessionCount {
  value: number;
  sessionsService: any;
  currentIdentity: any;
  
  constructor(sessionsService, currentIdentity) {
    this.value = 0;
    this.sessionsService = sessionsService;
    this.currentIdentity = currentIdentity;
  }
  
  updateUnreviewedSessionCount() {
    this.sessionsService.getUnreviewedCount(this.currentIdentity.currentUser.id)
        .then(response => this.value = response.count );
  }
})