import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Link } from '../appCore/types/Link';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidePanelComponent implements OnInit {
  @Input()
  path: string | null;
  @Input()
  links: Link[];

  constructor() { }

  ngOnInit(): void {
  }

}
