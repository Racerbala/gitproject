import { Component, OnInit } from '@angular/core';
import { IssueHoldService } from '../issue-hold.service';

@Component({
  selector: 'app-repodata',
  templateUrl: './repodata.component.html',
  styleUrls: ['./repodata.component.css'],
})
export class RepodataComponent implements OnInit {
  inputValue: any;
  issueUrl: any;
  issueCount: any;
  userName: any;
  diffHours: any;
  diffDays: any;
  recentIssue: any;
  oldIssue: any;

  issueData: any;

  constructor(private issueHoldService: IssueHoldService) {}

  getUrl(event) {
    this.inputValue = event.target.value;

    this.issueUrl = this.inputValue.replace(
      'https://github.com',
      'https://api.github.com/repos'
    );
    this.issueUrl = this.issueUrl + '/issues';
    console.log(this.issueUrl);
    this.issueHoldService.fetchIssues(this.issueUrl).subscribe((res) => {
      this.issueData = res;
      this.issueCount = this.issueData.length;
      this.recentIssue = 0;
      this.oldIssue = 0;
      for (let i = 0; i < this.issueData.length; i++) {
        if (this.issueData[i].diffHours < 25) {
          this.recentIssue = this.recentIssue + 1;
          console.log('new');
        } else if (this.issueData[i].diffHours > 167) {
          this.recentIssue = this.oldIssue + 1;
          console.log('old');
        }
      }
    });
  }
  showFaceDetails() {
    console.log('clickworks');
  }
  ngOnInit(): void {}
}
