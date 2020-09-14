import {Component, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-two';

  constructor(private ViewComponent: ViewContainerRef, private cfr: ComponentFactoryResolver) {
  }

  async loadAdmin() {
    this.ViewComponent.clear();
    const {AdminlistComponent} = await import('./adminlist/adminlist.component');
    this.ViewComponent.createComponent(
      this.cfr.resolveComponentFactory(AdminlistComponent)
    )
  }

  async loadUser() {
    this.ViewComponent.clear();
    const {UserlistComponent} = await import('./userlist/userlist.component');
    this.ViewComponent.createComponent(
      this.cfr.resolveComponentFactory(UserlistComponent)
    )
  }

  onSubmit(value: any) {
    console.warn(value);

  }
}
