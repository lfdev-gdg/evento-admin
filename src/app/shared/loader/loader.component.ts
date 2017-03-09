import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div class="loader-component">
        <div class="progress">
            <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
                <span class="sr-only">carregando...</span>
            </div>
        </div>
    </div>
  `,
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
