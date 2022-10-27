import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-skills',
  templateUrl: './tech-skills.component.html',
  styleUrls: ['./tech-skills.component.css']
})
export class TechSkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  skillsImgPath= "assets\\images\\skills\\";
  frontEndSkill = 'FrontEnd'
    skillsArr = [
      {
        type : this.frontEndSkill,
        name: 'JavaScript',
        imgUrl: this.skillsImgPath + 'javascript.svg'
      },
      {
        type : this.frontEndSkill,
        name: 'Bootstrap',
        imgUrl: this.skillsImgPath + 'bootstrap-4.svg'
      }
    ];
  

  frontendSkills = [
    {
      link: "https://angular.io",
      imgAltText: "Angular",
      imgSrc: this.skillsImgPath + 'angular.svg', 
      skillName: "Angular",
    },

    {
      link: "https://en.wikipedia.org/wiki/HTML5",
      imgAltText: "HTML 5",
      imgSrc: this.skillsImgPath + 'html-5.svg',
      skillName: "HTML5",
    },
    {
      link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
      imgAltText: "CSS 3",
      imgSrc: this.skillsImgPath + 'css3.svg', 
      skillName: "CSS3",
    },
    {
      link: "https://www.javascript.com/",
      imgAltText: "JavaScript",
      imgSrc: this.skillsImgPath + 'javascript.svg', 
      skillName: "JavaScript",
    },
    {
      link: "https://sass-lang.com/",
      imgAltText: "Sass",
      imgSrc: this.skillsImgPath + 'sass-1.svg', 
      skillName: "Sass",
    },
    {
      link: "https://getbootstrap.com/",
      imgAltText: "Bootstrap",
      imgSrc: this.skillsImgPath + 'bootstrap-4.svg', 
      skillName: "Bootstrap",
    },
    {
      link: "https://reactjs.org/",
      imgAltText: "React JS",
      imgSrc: this.skillsImgPath + 'react.svg', 
      skillName: "React JS",
    },
 
  ];

  backendSkills = [
    {
      link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
      imgAltText: "C-Sharp",
      imgSrc: this.skillsImgPath + 'react.svg', 
      skillName: "C Sharp",
    },
    {
      link: "https://en.wikipedia.org/wiki/.NET",
      imgAltText: ".Net Core",
      imgSrc: this.skillsImgPath + 'NET_Core.svg', 
      skillName: ".Net Core",
    },
    {
      link: "https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver16",
      imgAltText: "MS SQL Server",
      imgSrc: this.skillsImgPath + 'mssql.svg', 
      skillName: "MS SQL Server",
    },
    {
      link: "https://www.java.com/en/",
      imgAltText: "Java",
      imgSrc: this.skillsImgPath + 'java.svg', 
      skillName: "Java",
    },
    {
      link: "https://learn.microsoft.com/en-us/aspnet/web-api/",
      imgAltText: "Web API",
      imgSrc: this.skillsImgPath + 'webapi.png', 
      skillName: "Web API",
    }
  ];
}
