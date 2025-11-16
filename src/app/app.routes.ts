import {Routes} from '@angular/router';
import {AuthComponent} from './features/auth/auth.component';
import {MainComponent} from './core/main/main.component';
import {DebtsComponent} from './features/debts/debts.component';
import {ReportsComponent} from './features/reports/reports.component';
import {SettingsComponent} from './features/settigs/settings.component';
import {TransactionsComponent} from './features/transactions/transactions.component';

export const routes: Routes = [
  {
    path: "login",
    component: AuthComponent,
  },
  {
    path: "main",
    component: MainComponent
  },
  {
    path: "debts",
    component: DebtsComponent
  },
  {
    path: "reports",
    component: ReportsComponent
  },
  {
    path: "settings",
    component: SettingsComponent
  },
  {
    path: "transactions",
    component: TransactionsComponent
  },
];
