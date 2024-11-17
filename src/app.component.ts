import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FormsModule, ComboBoxModule],
})
export class App implements OnInit, AfterViewInit {
  public physicalVerificationForm: any = {};

  public batchInfo: any;
  public panelistsFields: object = { text: 'name' };

  ngOnInit(): void {
    this.loadData();
  }
  ngAfterViewInit(): void {}

  loadData() {
    const apiResponse = {
      panelistList1: {
        name: 'ABC',
        emailId: 'abc@yopmail.com',
      },
      panelistList2: {
        name: 'XYZ',
        emailId: 'xyz@yopmail.com',
      },
    };
    this.physicalVerificationForm = apiResponse;
    console.log(this.physicalVerificationForm);
    this.batchInfo = {
      panelists: [
        { name: 'ABC', emailId: 'abc@yopmail.com' },
        { name: 'XYZ', emailId: 'xyz@yopmail.com' },
      ],
    };
  }

  onPanelistSelect(event: any, panelist: string) {
    console.log(event);
    this.physicalVerificationForm[panelist] = event.itemData;
  }

  onSubmit() {
    console.log(this.physicalVerificationForm);
  }
}
