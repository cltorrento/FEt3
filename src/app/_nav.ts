import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Seguridad',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Usuarios',
        url: '/base/cards',
        icon: 'icon-puzzle'
      },
      {
        name: 'Roles',
        url: '/base/carousels',
        icon: 'icon-puzzle'
      },
      {
        name: 'Bitacora',
        url: '/base/collapses',
        icon: 'icon-puzzle'
      },
      
    ]
  },
  {
    name: 'Empresa',
    url: '/buttons',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Tipo',
        url: '/buttons/buttons',
        icon: 'icon-cursor'
      },
      {
        name: 'Datos Generales',
        url: '/buttons/dropdowns',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Agenda',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'Pacientes',
        url: '/icons/coreui-icons',
        icon: 'icon-star'
      },
      {
        name: 'Citas',
        url: '/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Consultas',
        url: '/icons/font-awesome',
        icon: 'icon-star'
      },
    ]
  },
  
  
];
