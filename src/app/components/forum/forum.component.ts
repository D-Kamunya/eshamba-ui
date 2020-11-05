import { Component, OnInit } from '@angular/core';
import {ForumService} from '../../services/forum-service/forum.service'
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {



  public post:any;

  constructor(public _forumService: ForumService) { 

  }

  ngOnInit(): void {
  	this._forumService.getPosts()
  	this.post={
  		name:'',
  		details:'',
  		user:localStorage.current_userid
  	}
  }


  addPost(){
  	this._forumService.createPost(this.post)
  }

}
