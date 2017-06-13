import { CanDeactivate} from '@angular/router';
import { LoginComponent } from './login.component';

export class PreventUnsavedChangesGuard implements CanDeactivate<LoginComponent>{

  canDeactivate(component: LoginComponent){
    if(component.form.dirty)
      return confirm("Are you sure?");
    
    return true;
  }
}
