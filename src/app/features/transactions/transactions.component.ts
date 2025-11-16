import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-transactions',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './transactions.component.html',
  standalone: true,
})
export class TransactionsComponent {
  private readonly builder: FormBuilder = inject(FormBuilder);

  formLogin!: FormGroup;
  isPay: boolean = true;

  constructor() {
    this.formLogin = this.builder.group({
      amount: ['', Validators.required],
    })
  }

  onSubmit() {

  }

  changeTypePay() {
    this.isPay = !this.isPay;
  }
}
