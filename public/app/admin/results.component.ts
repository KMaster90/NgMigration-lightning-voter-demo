import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'results',
  templateUrl: './results.component.html',
})
export class ResultsComponent implements OnInit{

  @Input('allSessions') sessionsByVoteDesc;

  ngOnInit() {
    // reverse order
    this.sessionsByVoteDesc.sort((s1, s2) => s2.voteCount - s1.voteCount);
  }
}
