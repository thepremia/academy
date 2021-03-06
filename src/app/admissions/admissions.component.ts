import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.scss']
})
export class AdmissionsComponent implements OnInit {
  closeResult = '';
  model: NgbDateStruct;
  content
  constructor(private modalService: NgbModal, private viewportScroller: ViewportScroller) { }

  public onClick(elementId): void { 
    if(elementId == 1 || elementId == 2){
      this.viewportScroller.scrollToAnchor(elementId, );
     
    }
    
}

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


    
  ehtos = [
  {
    title:`2) Learn about our beliefs: Our Parent Relationship Managers will contact you to give you more details`,
  },
  {
  title:`4) Meet the Principal: This stage might include an assessment depending on the class`,
},
 {
  title:`6) Admission : Once approved you will be directed to complete the admission formalities`,
} 
  
]

ehtos2 = [
{
    title:`1) The First Step: Fill the Admission Enquiry Form `,
  },
  {
    title:`3) School Tour: Visit our campus or join our online demo classes`,
    link: '',
  },

{
  title:`5) Interview with the Academic Team`,
},

]

  admission = [
    {
      icon: '#icon_ethicalEdu',
      description: `Ethical
      Education`,
    },
    {
      icon: '#icon_nurturing',
      description: `Nurturing
      Individual
      Passion`,
    },
    {
      icon: '#icon_community',
      description: `Building
A Community`,
    }
  ];

  admission_2 = [
    {
      title: `Admission Process `,
      bar: 'pp0',
      description: `Activity Based Learning 
for 5 years`,
    },
    {
      title: 'Admission Criteria',
      bar: 'pp1',
      description: `Discovery, Play and Interactive 
Classroom learning 
for 3 years`,
    },
//     {
//       title: 'Fees',
//       bar: 'pp2',
//       description: `Experiential learning in 
// Mathematics, Science, Arts, etc. 
// for 3 years`,
//     },
//     {
//       title: 'Download Admission Forms ',
//       bar: 'pp3',
//       description: `Flexibility in choice of subjects 
// with multidisciplinary study 
// for 4 years`,
//     }
  ];



  ngOnInit() {
  }

}
