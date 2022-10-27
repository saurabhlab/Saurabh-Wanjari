import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {

  // activeSlideId: string ='';
  ngOnInit(): void {
   // this.activeSlideId = '2';
  }
imgPath:string = "assets/images/Awards_and_certificate";

certs = [
  {id:1, title: 'Microsoft Azure', short: 'Microsoft Azure', src: this.imgPath + "/Certificate_AZ-900.jpg", note: ""},
  {id:2, title: 'Java fullstack using Angular', short: 'Java fullstack using Angular', src: this.imgPath + "/Certificate_Java_fullstack_usning_Angular.jpg", note: "" },
  // {id:3, title: 'Third Slide', short: 'Third Slide Short', src: "https://picsum.photos/id/984/900/500", note: "test 3"}
];

  // images = [
  //   {id:1, title: 'First Slide', short: 'First Slide Short', src: "https://picsum.photos/id/700/900/500", note: "test 1"},
  //   {id:2, title: 'Second Slide', short: 'Second Slide Short', src: "https://picsum.photos/id/1011/900/500", note: "test 2" },
  //   {id:3, title: 'Third Slide', short: 'Third Slide Short', src: "https://picsum.photos/id/984/900/500", note: "test 3"}
  // ];



  // slideActivate(ngbSlideEvent: NgbSlideEvent) {
  //   console.log(ngbSlideEvent.source);
  //   console.log(ngbSlideEvent.paused);
  //   console.log(NgbSlideEventSource.INDICATOR);
  //   console.log(NgbSlideEventSource.ARROW_LEFT);
  //   console.log(NgbSlideEventSource.ARROW_RIGHT);
  // }

  // @ViewChild('ngcarousel', { static: true }) ngCarousel!: NgbCarousel;
  // ngOnInit(): void {}
  // // Move to specific slide
  // navigateToSlide(item: any) {
  //   this.ngCarousel.select(item);
  //   console.log(item);
  // }
  // // Move to previous slide
  // getToPrev() {
  //   this.ngCarousel.prev();
  // }
  // // Move to next slide
  // goToNext() {
  //   this.ngCarousel.next();
  // }
  // // Pause slide
  // stopCarousel() {
  //   this.ngCarousel.pause();
  // }
  // // Restart carousel
  // restartCarousel() {
  //   this.ngCarousel.cycle();
  // }
  

// constructor(config: NgbCarouselConfig) {
//   config.interval = 1000;
//   config.keyboard = true;
//   config.pauseOnHover = true;
// }


}
