 import { AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
 import { PJModalComponent } from '../pjmodal/pjmodal.component';

@Component({
  selector: 'app-dynamic-template',
  templateUrl: './dynamic-template.component.html',
  styleUrls: ['./dynamic-template.component.scss']
})
export class DynamicTemplateComponent implements AfterViewInit  , OnInit {

   @ViewChild("welcomeForm" , {read:ViewContainerRef , static:true}) Demo : ViewContainerRef;
  constructor(private component : ComponentFactoryResolver , private chaneg : ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    // const d =  this.component.resolveComponentFactory(PJModalComponent);
    // const c  = this.Demo.createComponent(d).instance;
    // c.data = "hello it's me Prasanna";
    // this.chaneg.detectChanges();
    // console.log(c)
  }

  ngOnInit() {


  }

}
