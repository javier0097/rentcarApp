import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-photo-uploader',
  templateUrl: './photo-uploader.component.html',
  styleUrls: ['./photo-uploader.component.scss'],
})
export class PhotoUploaderComponent {

  @Input() title: string = "";
  @Input() description: string = "";
  @Input() subtitle: string = "";
  @Input() nextButtonTag: string = "";

  @Output() previousClicked: EventEmitter<void> = new EventEmitter();
  @Output() nextClicked: EventEmitter<void> = new EventEmitter();

  fileName: string = 'Ningún archivo seleccionado';

  constructor() { }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.fileName = input.files[0].name;
    } else {
      this.fileName = 'Ningún archivo seleccionado';
    }
  }

  onPreviousClicked(): void {
    this.previousClicked.emit();
  }

  onNextClicked(): void {
    this.nextClicked.emit();
  }
}
