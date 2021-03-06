import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'ngx-extended-pdf-viewer';
  public pdf = 'assets/example.pdf';
  public hidden = false;
  public zoom: number | string | undefined = 42;
  public visible = { 0: true };
  public mobileFriendlyZoomPercent = false;
  public showSidebar = false;
  public height: string | undefined = '80vh';

  public page: number | undefined = undefined;

  public handTool: boolean | undefined = undefined;

  public get zoomAuto(): boolean {
    return this.zoom === 'auto';
  }

  public set zoomAuto(auto: boolean) {
    if (auto) {
      this.zoom = 'auto';
    }
  }

  public get zoomPageActual(): boolean {
    return this.zoom === 'page-actual';
  }

  public set zoomPageActual(auto: boolean) {
    if (auto) {
      this.zoom = 'page-actual';
    }
  }

  public get zoomPageFit(): boolean {
    return this.zoom === 'page-fit';
  }

  public set zoomPageFit(auto: boolean) {
    if (auto) {
      this.zoom = 'page-fit';
    }
  }

  public get zoomPageWidth(): boolean {
    return this.zoom === 'page-width';
  }

  public set zoomPageWidth(auto: boolean) {
    if (auto) {
      this.zoom = 'page-width';
    }
  }

  public get zoom84percent(): boolean {
    return this.zoom === '84%';
  }

  public set zoom84percent(auto: boolean) {
    if (auto) {
      this.zoom = '84%';
    }
  }

  public get zoom42(): boolean {
    return this.zoom === '42';
  }

  public set zoom42(auto: boolean) {
    if (auto) {
      this.zoom = '42';
    }
  }

  public get mobileFriendlyZoom(): string | undefined {
    if (this.mobileFriendlyZoomPercent) {
      return '200%';
    }
    return undefined;
  }

  public activateTab(tab: number): void {
    this.hideOtherPDFs();
    setTimeout(() => {
      this.visible[tab] = true;
    }, 100);
  }

  public hideOtherPDFs(): void {
    console.log('Hiding');
    this.visible[0] = false;
    this.visible[1] = false;
    this.visible[2] = false;
    this.visible[3] = false;
  }

  public get height50() {
    return this.height === '50%';
  }

  public set height50(value: boolean) {
    if (value) {
      this.height = '50%';
    } else {
      if (this.height === '50%') {
        this.height = undefined;
      }
    }
  }

  public get height314() {
    return this.height === '314px';
  }

  public set height314(value: boolean) {
    if (value) {
      this.height = '314px';
    } else {
      if (this.height === '314px') {
        this.height = undefined;
      }
    }
  }

  public get height80vh() {
    return this.height === '80vh';
  }

  public set height80vh(value: boolean) {
    if (value) {
      this.height = '80vh';
    } else {
      if (this.height === '80vh') {
        this.height = undefined;
      }
    }
  }
  public get height100() {
    return this.height === '100%';
  }

  public set height100(value: boolean) {
    if (value) {
      this.height = '100%';
    } else {
      if (this.height === '100%') {
        this.height = undefined;
      }
    }
  }
}
