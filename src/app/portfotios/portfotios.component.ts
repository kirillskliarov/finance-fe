import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfotios',
  templateUrl: './portfotios.component.html',
  styleUrls: ['./portfotios.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfotiosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
