import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  @Input() basicInfo :any;
  constructor() { }

  ngOnInit(): void {
  }

}
