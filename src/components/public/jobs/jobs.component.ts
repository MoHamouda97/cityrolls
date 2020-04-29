import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  validateForm: FormGroup;
  inputValue: string;
  options: string[] = [];

  constructor(private fb: FormBuilder, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      jobTitle: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      dateOfBirth: [null, [Validators.required]],
      remember: [true]
    });     
  }

  onInput(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    if (!value || value.indexOf('@') >= 0) {
      this.options = [];
    } else {
      this.options = ['gmail.com', 'yahoo.com', 'hotmail.com'].map(domain => `${value}@${domain}`);
    }
  }    

}
