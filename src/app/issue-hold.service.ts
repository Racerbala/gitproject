import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class IssueHoldService {
  public user: string;
  dataUrl: any;
  data: any;
  diffHours: any;
  diffDays: any;
  dispTime: any;
  constructor(private http: HttpClient) {}
  fetchIssues(data) {
    let issueData: any = [];
    this.dataUrl = data;
    return this.http.get(this.dataUrl).pipe(
      map((res: any) => {
        for (let i = 0; i < res.length; i++) {
          let date1: any = new Date(res[i].created_at);

          let date2: any = new Date();

          this.diffHours = Math.floor((date2 - date1) / (1000 * 60 * 60));

          if (this.diffHours > 24) {
            this.diffDays = Math.floor(this.diffHours / 24);
            this.dispTime = this.diffDays + '  days ago';
          } else {
            this.dispTime = this.diffHours + '  hours ago';
          }

          let poppedData = {
            userName: res[i].user.login,
            avatar: res[i].user.avatar_url,
            title: res[i].title,
            issueNumber: res[i].id,
            timestamp: res[i].created_at,
            dispTime: this.dispTime,
            diffHours: this.diffHours,
          };
          console.log(poppedData);

          issueData.push(poppedData);
        }
        return issueData;
      }),
      filter((res: any) => {
        return (res = true);
      })
    );
  }
}
