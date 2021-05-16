import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonService } from 'src/app/common.service';
import { DataFormService } from 'src/app/component/adddataform/adddataform.service';
import { Viewdirective } from 'src/app/component/adddataform/view.directive';
import { SegmentData, TableData } from './common.util';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  segments: SegmentData[];
  tableData: TableData[];

  viewDataRef: ViewContainerRef;
  @ViewChild(Viewdirective, {static:true}) viewRef: Viewdirective;
  constructor(private dataFormService: DataFormService, private service: CommonService) { }
  

  ngOnInit() {
    this.segments = this.service.getSegments();
    this.tableData = this.service.getTableData();
  }

  ngOnDestroy(): void {
    // clearInterval(this.interval);
  }

  openModel(flag: string){
    this.viewDataRef = this.viewRef.viewContainerRef;
    this.dataFormService.createComponent(this.viewDataRef, flag);

    if(this.service.getFormData() === undefined){
      let interval =  setInterval(() => {
        let formData = this.service.getFormData();

        if(formData){
          if(formData.description === null){
            let tableData = new TableData();
            tableData.color = formData.color;
            tableData.icon = formData.icon;
            tableData.tbl_name = formData.name;
            this.tableData.push(tableData);
            clearInterval(interval);
          }
          if(formData.color === null){
            let segment = new SegmentData();
            segment.description = formData.description;
            segment.icon = formData.icon;
            segment.seg_name = formData.name;
            this.segments.push(segment);
            clearInterval(interval);
          }
        }

      }, 2000);
    }
  }

  getData($event){
    console.log($event.value);
  }

}
