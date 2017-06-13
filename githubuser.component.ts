import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'user',
    template: `
        <h1>User Login: {{ login }}</h1>
        <h2>User Score: {{ score }}</h2>   
    `
})
export class GitHubUserComponent implements OnInit, OnDestroy  {
    login;
    score;
    subscription;

    constructor(private _route: ActivatedRoute){
    }

    ngOnInit(){
        this.subscription = this._route.params.subscribe(params => {
            this.login = params["login"];
            this.score = params["score"];
        })
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
    
}
