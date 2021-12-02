import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss']
})
export class InputEmailComponent implements OnInit {
  @Input() parentForm: FormGroup
  constructor() { }

  ngOnInit(): void {
  }

}
