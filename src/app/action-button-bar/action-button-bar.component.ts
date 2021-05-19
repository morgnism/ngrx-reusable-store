import { Component, EventEmitter, Output } from '@angular/core';
import { PhotoType } from '../models/photo';

@Component({
  selector: 'app-action-button-bar',
  templateUrl: './action-button-bar.component.html',
  styleUrls: ['./action-button-bar.component.scss'],
})
export class ActionButtonBarComponent {
  menuItems: string[] = Object.keys(PhotoType);

  @Output() changeActiveType = new EventEmitter<PhotoType>();

  handleTypeChangeClick(photoType: string) {
    this.changeActiveType.emit(PhotoType[photoType]);
  }
}
