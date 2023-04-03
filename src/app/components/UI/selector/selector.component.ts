import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Sorting} from "../../../modals/search";

@Component({
  selector: 'app-selector',
  template: '<select #sort (change)="selectedValue(sort.value)" class="custom-select p-1">\n' +
    '  <option value="all" selected>{{sorting.sortingType}}</option>\n' +
    '  <option *ngFor="let option of sorting.options" value="{{option}}">{{option}}</option>\n' +
    '</select>'
})
export class SelectorComponent {
  @Input() sorting!: Sorting;
  @Output() selectedOption = new EventEmitter();
  selectedValue(value: string) {
    this.selectedOption.emit(value);
  }
}
