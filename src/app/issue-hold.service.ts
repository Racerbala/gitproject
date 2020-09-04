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
  constructor(private http: HttpClient) {}
  fetchIssues(data) {
    let issueData: any = [];
    this.dataUrl = data;
    console.log('get callsed');
    return this.http.get(this.dataUrl).pipe(
      map((res: any) => {
        for (let i = 0; i < res.length; i++) {
          console.log('before map:', res);
          let poppedData = {
            userName: res[i].user.login,
            avatar: res[i].user.avatar_url,
            title: res[i].title,
            issueNumber: res[i].id,
            timestamp: res[i].created_at,
          };

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
