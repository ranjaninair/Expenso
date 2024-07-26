import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatListModule, MatIconModule, RouterLink, MatSidenavModule, RouterOutlet, CommonModule ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent  {
  isExpanded = true;

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }
}
