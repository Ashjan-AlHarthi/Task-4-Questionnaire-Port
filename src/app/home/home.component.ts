

import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-fw pi-home',
            },
            {
                label: 'Documentation',
                icon: 'pi pi-fw pi-file',
                items: [
                  {
                      label: 'New',
                      icon: 'pi pi-fw pi-plus',
                  },
                  {
                      label: 'Delete',
                      icon: 'pi pi-fw pi-trash'
                  },
                  {
                      separator: true
                  },
                  {
                      label: 'Export',
                      icon: 'pi pi-fw pi-external-link'
                  }
              ]
            },
          
            {
                label: 'Events',
                icon: 'pi pi-fw pi-calendar',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Save',
                                icon: 'pi pi-fw pi-calendar-plus'
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    },
                    {
                        label: 'Archieve',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [
                            {
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off'
            }
        ];
    }
  
  title = 'QuestionnairePort';

  users = [
    { user: "Abeer" },
    { user: "Amal" },
    { user: "Ashjan" },
    { user: "Bushra" },
    { user: "Iftekhar" },
    { user: "Mawada" },
    { user: "Omar" },
    { user: "Zainab" },
  ];

  selectedUser: string | undefined;

  handleButtonClick(){
    
  }

}
