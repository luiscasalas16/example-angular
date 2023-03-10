import { Component } from '@angular/core';

interface Menu {
  name : string,
  route? : string
  items? : MenuItem[]
}

interface MenuItem {
  name? : string,
  route? : string,
  empty? : boolean
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {
  menus : Menu[];

  constructor() {
    this.menus = 
    [
      { name : 'Home', route : '/home' },
      { name : 'About-App', route : '/about/application' },
      { name : 'About-Dev', route : '/about/developer' },
      { name : 'Examples', items : 
        [ 
            { name : 'Counter', route : '/examples/counter' },
            { empty : true},
            { name : 'Heroes', route : '/examples/heroes' },
            { empty : true},
            { name : 'Gifs', route : '/examples/gifs' },
            { empty : true},
            { name : 'Countries by Name', route : '/examples/countries/countrybyname' }, { name : 'Countries by Capital', route : '/examples/countries/countrybycapital' },
            { empty : true},
            { name : 'Selectors', route : '/examples/selectors' },
            { empty : true},
            { name : 'Charts', route : '/examples/charts' },
            { empty : true},
            { name : 'Maps', route : '/examples/maps' }
        ] 
      },
      { name : 'Components', items : [{ name : 'Bindings', route : '/components/bindings' }, { name : 'Lifecycle', route : '/components/lifecycle' }] },
      { name : 'Templates', items : [{ name : 'Pipes - Built-In', route : '/templates/pipes/built-in' }, { name : 'Pipes - Custom', route : '/templates/pipes/custom' }] },
      { name : 'Directives', items : [{ name : 'Attribute-Directives', route : '/directives/attribute-directives' }, { name : 'Structural-Directives', route : '/directives/structural-directives' }] },
      { name : 'Routes', items : [{ name : 'Main', route : '/routes/main' }] },
      { name : 'Forms', items : 
        [
            { name : 'Basic', route : '/frms/basic' }, 
            { empty : true},
            { name : 'Template - Basic', route : '/frms/template/basic' }, { name : 'Template - Dynamic', route : '/frms/template/dynamic' }, { name : 'Template - Validations', route : '/frms/template/validations' },
            { empty : true},
            { name : 'Reactive - Basic', route : '/frms/reactive/basic' }, { name : 'Reactive - Dynamic', route : '/frms/reactive/dynamic' }, { name : 'Reactive - Validations', route : '/frms/reactive/validations' }
        ] 
      },
      { name : 'Http', items : [{ name : 'Basic', route : '/http/basic' }] },
      { name : 'Imports', items : [{ name : 'Basic', route : '/imports/basic' }] },
      { name : 'Api', items : 
        [
          { name : 'ng-container', route : '/api/ng-container' },
          { name : 'ng-template', route : '/api/ng-template' },
          { name : 'view-child', route : '/api/view-child' }
        ] 
      },
      { name : 'Tools', items : [{ name : 'Commands', route : '/tools/commands' }, { name : 'Environments', route : '/tools/environments' }] },
    ];
  }
}
