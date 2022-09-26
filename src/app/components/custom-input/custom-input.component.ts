import { Component, Input, OnInit } from '@angular/core';
import { InputIcons, InputTypes} from './types';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {
  isFocus: boolean = false;
  @Input() type:string = InputTypes.text;
  @Input() value:string = '';
  @Input() placeholder:string = '';
  @Input() icon: InputIcons | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  focus() {
    this.isFocus = true;
  }

  blur() {
    this.isFocus = false;
  }
}
