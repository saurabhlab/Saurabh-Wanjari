import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInfoRoutingModule } from './basic-info-routing.module';
import { BasicInfoComponent } from './basic-info.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { TechSkillsComponent } from './tech-skills/tech-skills.component';
import { AwardsComponent } from './awards/awards.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { CertificateComponent } from './certificate/certificate.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [BasicInfoComponent, AboutComponent, ExperienceComponent, TechSkillsComponent, AwardsComponent, ContactMeComponent, CertificateComponent],
  imports: [
    CommonModule,
    BasicInfoRoutingModule,
    NgbModule,
  ]
})
export class BasicInfoModule { }
