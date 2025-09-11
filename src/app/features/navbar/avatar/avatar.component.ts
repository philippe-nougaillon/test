import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AvatarPipe } from '../../../shared/pipes/avatar.pipe';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule, RouterLink, AvatarPipe],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css'
})
export class AvatarComponent {
   openMenu: boolean = false;
   @Input() imageUrl: string = '';
}