import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent {

  selectedAnswers: number[] = [];

  constructor(private route: ActivatedRoute) {}

ngOnInit(): void {
     this.route.queryParams.subscribe(params => {
      this.selectedAnswers = JSON.parse(params['answers']);
    
    });
}

}
