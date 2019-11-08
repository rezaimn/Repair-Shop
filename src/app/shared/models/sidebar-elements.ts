export class SidebarElements {
   constructor(){

   }
   elements:any=[
     {
       name:'Dashboard',
       path:'/layout/dashboard',
       icon:'fa-bar-chart-o',
       children:[]
     },
     {
       name:'Users',
       path:'/layout/users',
       icon:'fa-desktop',
       children:[]
     },
     {
       name:'Settings',
       expandKey:'setting',
       icon:'fa-gear',
       children:[
         {
           name:'Themes',
           path:'/layout/settings/themes',
           icon:' fa-paint-brush'
         },
         {
           name:'Language',
           path:'/layout/settings/language',
           icon:'fa-language'
         },
       ]
     },
     {
       name:'Logout',
       path:'/auth/logout',
       icon:'fa-power-off',
       children:[]
     },
   ];

}
