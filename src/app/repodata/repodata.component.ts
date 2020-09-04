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
  dispTime: any;

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
        let date1: any = new Date(this.issueData[i].timestamp);

        let date2: any = new Date();

        this.diffHours = Math.floor((date2 - date1) / (1000 * 60 * 60));
        if (this.diffHours > 24) {
          this.diffDays = Math.floor(this.diffHours / 24);
          this.dispTime = this.diffDays + '  days ago';
        } else {
          this.recentIssue = this.recentIssue + 1;
          this.dispTime = this.diffHours + '  hours ago';
        }
        if (this.diffDays > 7) {
          this.oldIssue = this.oldIssue + 1;
        }
        console.log(this.recentIssue);
      }
    });
  }
  showFaceDetails() {
    console.log('clickworks');
  }
  ngOnInit(): void {}
}
