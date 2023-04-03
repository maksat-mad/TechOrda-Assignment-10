import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Sorting} from "../../../modals/search";

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {
  @Input() sorting!: Sorting;
  @Output() selectedOption = new EventEmitter();
  selectedValue(value: string) {
    this.selectedOption.emit(value);
  }
}
