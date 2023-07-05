import {
  AfterViewInit, ChangeDetectorRef, Component, ComponentFactoryResolver, OnInit,
  SimpleChanges, ViewChild, ViewContainerRef, OnChanges, ViewEncapsulation, Injectable, Pipe, PipeTransform
} from '@angular/core';
import { PJModalComponent, ProvideInjection } from '../pjmodal/pjmodal.component';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-dynamic-template',
  templateUrl: './dynamic-template.component.html',
  styleUrls: ['./dynamic-template.component.scss'],
  // providers :[ProvideInjection],
   exportAs: "dynam",
   outputs: ["Prasanna", "Jagadesh"],


})
export class DynamicTemplateComponent implements AfterViewInit, OnInit, OnChanges {

  @ViewChild("welcomeForm", { read: ViewContainerRef, static: true }) Demo: ViewContainerRef;
  constructor(
    private component: ComponentFactoryResolver,
    private change: ChangeDetectorRef,
    public common: ProvideInjection,
    private formBuilder : FormBuilder
    ) { }
  searchText : string
  asyncForm !: FormGroup;
  employees : Array<any> =[
    {name : "Prasanna" , age :20},
    {name : "Lokesh" , age :34},
    {name : "kumar" , age :46},
    {name : "jagadesh" , age :67},
    {name : "data" , age :23},
    {name : "kumar" , age :25},
  ]
  ngAfterViewInit(): void {
    console.log("after reverting");

  }

  ngOnInit() {
    this.asyncForm = this.formBuilder.group({
      userName : new FormControl("",[Validators.required]),
      age : new FormControl("" , [Validators.required])
    });
  }

  Submit(){
    let parent : FormGroup
    this.asyncForm.markAllAsTouched();
    this.asyncForm.addControl("prasa", new FormControl(''));
    this.asyncForm.setControl('prasa',new FormControl('',[Validators.required]));
    this.asyncForm.setErrors({data : true});
    this.asyncForm.setErrors(null);
  }



  ngOnChanges(value: SimpleChanges) {
    console.log("sds", value);

  }

  openModal() {
    const d = this.component.resolveComponentFactory(PJModalComponent);
    const c = this.Demo.createComponent(d).instance;
    c.data = "hello its me Prasanna";
    c.collection = this.common.getData();
    this.change.detectChanges();
   }

  changes() {
    // const d =  this.component.resolveComponentFactory(PJModalComponent);
    this.common.data.push("The God of Genjutsu");
    PJModalComponent.updateControl({value:'age',form :this.asyncForm});
    console.log(this.asyncForm);


    // let dd = this.Demo.createComponent(d);
    //  console.log(dd.instance);


  }

}
