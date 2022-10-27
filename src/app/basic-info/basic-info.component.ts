import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentYear = (new Date()).getFullYear();
  
//   post = 'Sr Software Engineer';
//   mytotalExp = 5.8;
// myName = "Saurabh Wanjari";
// mobileNo = "+91 897 571 5492";
// emailId= "saurabhwanjari2@gmail.com";
// addressLine1= "House no. 3036, Vaibhavnagar,";
// addressLine2 = "Wanadonagri, Hingna, Nagpur.";

  basicInfo = {
    post: 'Sr Software Engineer',
    mytotalExp: 5.8,
    myName: "Saurabh Wanjari",
    mobileNo: "+91 897 571 5492",
    emailId: "saurabhwanjari2@gmail.com",
    addressLine1: "House no. 3036, Vaibhavnagar,",
    addressLine2: "Wanadonagri, Hingna, Nagpur.",
    twitterLink:"https://twitter.com/SaurabhWanjari4",
    linkedInLink: "https://www.linkedin.com/in/saurabh-wanjari-2104ba104",
  }
 

  scroll(el: HTMLElement) {
    el.scrollIntoView();
}

}
