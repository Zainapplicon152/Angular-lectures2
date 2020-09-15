import {Component, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-two';


  constructor(private ViewComponent: ViewContainerRef, private cfr: ComponentFactoryResolver) {
  }

  loginForm = new FormGroup({
    username: new FormControl('zain' , Validators.required),
    password: new FormControl('1234' , Validators.required)
  });

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

  loginUser() {
    console.warn(this.loginForm.value);
  }
}
