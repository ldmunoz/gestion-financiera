import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MainComponent} from './core/main/main.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainComponent],
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('personalFinancialManagement');
  isLogin: boolean = true;
}
