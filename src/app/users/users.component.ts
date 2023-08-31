import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  questions: any[] = [
    {
      text: 'Which of these elements in HTML can be used for making a text bold?',
      options: ['<a>', '<pre>', '<br>', '<b>'],
      answer: 3,

    },


    {
      text: 'Which tag do we use in HTML for inserting a line-break?',
      options: ['<a>', '<br>', '<b>', '<pre>'],
      answer: 1,
    },


    {
      text: 'How to create a hyperlink in HTML?',
      options: ['<a link = “www.thinkandlearn.com”> thinkandlearn.com </a>', '<a> www.thinkandlearn.com <thinkandlearn.com /a>', '<a href = “www.thinkandlearn.com”> thinkandlearn.com </a>', '<a url = “www.thinkandlearn.com” thinkandlearn.com /a>'],
      answer: 2,
    },

    {
      text: 'In HTML, how do we insert an image?',
      options: ['<img src = “jtp.png” />', '<img href = “jtp.png” />', '<img link = “jtp.png” />', '<img url = “jtp.png” />'],
      answer: 0,
    },

    {
      text: 'Which tag do we use to define the options present in the drop-down selection lists?',
      options: ['<list>', '<option>', '<dropdown>', '<select>'],
      
      answer: 1,
    },

  ];

  selectedOptions: number[] = [];
  
  isOptionSelected: boolean[] = [];
  
  currentQuestionIndex: number = 0;

  
  currentQuestion: any=this.questions[this.currentQuestionIndex];

  answers:any[]=[];

  
  

  
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isOptionSelected = new Array(this.questions.length).fill(false);
  }
  
  onOptionSelected(questionIndex: number, optionIndex: number) {
    this.selectedOptions[questionIndex] = optionIndex;
    this.isOptionSelected[questionIndex] = true;
  }
  

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) 
    {
      this.currentQuestionIndex++;
    }
  }

  isAllQuestionsAnswered(): boolean {
    return this.isOptionSelected.every(selected => selected);
  }

  handleSubmitButton() {
    if (this.isAllQuestionsAnswered()) {
      const resultUrl = this.router.createUrlTree(['/end'], { queryParams: { answers: JSON.stringify(this.selectedOptions) } }).toString();
    
      window.open(resultUrl, '_blank');
    }
  }

}
