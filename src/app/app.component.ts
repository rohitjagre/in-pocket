import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  title = 'in-pocket';
  theme = 'simple-theme';
  public select: string;

  public changeThemes(e): void
  {
    this.theme = e.target.value;
  }

  changeTheme(themeName: string): void
  {
    this.theme = themeName;
  }
}
