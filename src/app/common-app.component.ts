import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './common-app.component.html',
  styleUrl: './common-app.component.css'
})
export class CommonAppComponent {
  title = 'ng-multi-brand-aka-monorepo';
}
