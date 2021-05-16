import { Injectable } from "@angular/core";
import { Emoji } from "@ctrl/ngx-emoji-mart/ngx-emoji";
import { colorPalette } from "./app.data";
import { SegmentData, TableData } from "./views/main/common.util";

@Injectable({
    providedIn: 'root'
})
export class CommonService{
    ModalFormData: any;
    segments : SegmentData[] = [];
    tableData: TableData[] = [];
    iconList = ["robot_face", "gem", "telephone_receiver", "white_check_mark", "flag-sg", 
                "pig", "wolf", "dog", "cat", "lion_face"];

    constructor(){
      for(let i=0;i<this.iconList.length;i++){
        let icon = { id: this.iconList[i] };

        if(i<5){
          let segment: SegmentData = new SegmentData();
          segment.icon = icon;
          segment.seg_name = "Segment "+(i+1);
          segment.description = "Information of Segment "+(i+1);
          this.segments.push(segment);
        }

        if(i>=5){
          let table: TableData = new TableData();
          table.icon = icon;
          table.color = colorPalette[i];
          table.tbl_name = "Table "+(i+1);
          this.tableData.push(table);
        }
      }
    }

    setFormData(data){ this.ModalFormData = data; }

    getFormData(){ return this.ModalFormData; }

    getSegments(){ return this.segments; }

    getTableData(){ return this.tableData; }
}