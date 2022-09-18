import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() selectedFeature = new EventEmitter<string>();

  onSelect(feature: string) {
    this.selectedFeature.emit(feature);
  }

  constructor() {}

  ngOnInit(): void {}
}
