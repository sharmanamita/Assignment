import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { colorPalette } from 'src/app/app.data';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-adddataform',
  templateUrl: './adddataform.component.html',
  styleUrls: ['./adddataform.component.css']
})
export class AdddataformComponent implements OnInit {

  public visible;
  public colorFlag: boolean = false;
  public descrFlag: boolean =false ;
  public isOpened : boolean = false;
  public selectedEmoji:any;
  public colorArr = colorPalette;

  public addForm: FormGroup = new FormGroup({
    name: new FormControl(),
    icon: new FormControl(),
    color: new FormControl(),
    description: new FormControl()
  });

  constructor(private commonService:CommonService) { }

  ngOnInit() { 
    this.selectedEmoji = { id: 'gear'};
  }

  onSubmit(){ 
    this.addForm.value.icon = this.selectedEmoji;
    this.commonService.setFormData(this.addForm.value);
    this.closeModal();
    console.log(this.addForm.value);
  }

  openEmojiTab(){
    this.isOpened = !this.isOpened;
  }

  openModel(){
    this.visible = 'block';
  }

  closeModal(){
    this.visible = 'none';
  }

  getEmoji($event: any){
    console.log($event);
    this.selectedEmoji = $event.emoji;
  }
}
