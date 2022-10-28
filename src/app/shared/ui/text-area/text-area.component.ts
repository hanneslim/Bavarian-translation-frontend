import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-area[id][control]',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
})
export class TextAreaComponent {
  @Input() control!: FormControl<string | null>;
  @Input() id!: string;
  @Input() label?: string;
  @Input() placeholder = '';
  @Input() disabled?: boolean;
}
