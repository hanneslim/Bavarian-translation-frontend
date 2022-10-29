import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown[control][options][label]',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() control!: FormControl<string | null>;
  @Input() label!: string;
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() showClear = true;
  @Input() options!: Record<string, string>[];
}
