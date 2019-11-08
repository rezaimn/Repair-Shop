import {Component, Output, EventEmitter, OnInit} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import {DataService} from '../../../shared/services/data.service';
import {HttpService} from '../../../shared/services/http.service';
import {GetLocationService} from '../../../shared/services/get-location.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    isActive: boolean;
    collapsed: boolean;
    showMenu: string;
    pushRightClass: string;
    status = true;
    lat=0;
    lng=0;
    @Output() collapsedEvent = new EventEmitter<boolean>();

    currentRate = 0;

    constructor(
        public router: Router,
        private localStorage: LocalStorageService,
        private sessionStorage: SessionStorageService,
        public dataService: DataService,
        private getLocationService:GetLocationService,
        private httpService: HttpService) {
        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
        this.getStatus();
        this.getUserAvatar();
    }

    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    logOut() {
        this.dataService.backStack = [];
        this.localStorage.clear();
        this.sessionStorage.clear();
        this.router.navigate(['/start-page']);

    }

    setUserStatus(event) {
        this.getLocationService.getPosition().then( position => {
            let body={
                "available": event
            }
            this.httpService.put('profile/shop/',body).subscribe(
                (res => {
                        this.status = event;
                    }
                )
            );
        });

    }

    getStatus() {
        this.httpService.get('profile/shop/').subscribe(
            (res => {
                this.status=res.available;
            })
        );
    }

    getUserAvatar() {
        // throw new Error("Method not implemented.");
    }
}
