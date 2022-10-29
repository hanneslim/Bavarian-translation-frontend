import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-text[control][id][label]',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent {
  @Input() control!: FormControl<string | null>;
  @Input() id!: string;
  @Input() label!: string;
  @Input() placeholder = '';
  @Input() disabled = false;
}
