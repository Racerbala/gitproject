import { Component, OnInit } from '@angular/core';
import { IssueHoldService } from '../issue-hold.service';

@Component({
  selector: 'app-issuedisp',
  templateUrl: './issuedisp.component.html',
  styleUrls: ['./issuedisp.component.css'],
})
export class IssuedispComponent implements OnInit {
  constructor(private issueHoldService: IssueHoldService) {}

  ngOnInit(): void {}
}
