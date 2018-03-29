import { Injectable } from '@angular/core';
import { Nav } from 'ionic-angular';
import { PlaceholderPage } from '../pages/placeholder/placeholder';
import { _DetailPage } from '../pages/_DetailPage';

@Injectable()
export class NavProxyService {

    _masterNav: Nav = null;
    get masterNav(): Nav {
        return this._masterNav;
    }
    set masterNav(value: Nav) {
        this._masterNav = value;
    }

    _detailNav: Nav = null;
    get detailNav(): Nav {
        return this._detailNav;
    }
    set detailNav(value: Nav) {
        this._detailNav = value;
    }

    _isOn: boolean = false;
    get isOn(): boolean {
        return this._isOn;
    }
    set isOn(value: boolean) {
        this._isOn = value;
    }

    pushDetail(page: any, params: any) {
        
        console.log("pushDetail");
        if (this.isOn) {
            this.detailNav.setRoot(page, params);
        } else {
            this.masterNav.push(page, params);
        }
    }

    pushMaster(page: any, params: any) {
        console.log("pushMaster");
        this.masterNav.push(page, params);
    }

    onSplitPaneChanged(isOn) {
        // set local 'isOn' flag...
        console.log("isOn", isOn);
        this.isOn = isOn;
        // if the nav controllers have been instantiated...
        if (this.masterNav && this.detailNav) {
            (isOn) ? this.activateSplitView() :
                this.deactivateSplitView();
        }
    }

    activateSplitView() {
        console.log("activateSplitView");
        let currentView = this.masterNav.getActive();
        if (currentView.component.prototype instanceof _DetailPage) {
            // if the current view is a 'Detail' page...
            // - remove it from the 'master' nav stack...
            this.masterNav.pop();
            // - and add it to the 'detail' nav stack...
            this.detailNav.setRoot(currentView.component, currentView.data);
        }
    }

    deactivateSplitView() {
        console.log("deactivateSplitView");
        let detailView = this.detailNav.getActive();
        this.detailNav.setRoot(PlaceholderPage);
        if (detailView.component.prototype instanceof _DetailPage) {
            // if the current detail view is a 'Detail' page...
            // ...so, not the placeholder page:
            let index = this.masterNav.getViews().length;
            // add it to the master view...
            this.masterNav.insert(index, detailView.component, detailView.data);
        }
    }

}
