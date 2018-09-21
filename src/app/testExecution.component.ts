import { Component, OnInit} from '@angular/core';
import { Http,Response } from '@angular/http';
//import {ProjectSeServiceComponent} from './projectSelection.service';

import { Observable } from 'rxjs';

import { URLSearchParams } from '@angular/http';

import { TestExecutionServiceComponent  } from './testExecution.service';
import {Post} from './post';
import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic/src/platform_providers';

@Component({
selector: 'app-test',

templateUrl:  './html/testExecution.html',
  styleUrls: ['./css/testExecution.css'],
  providers : [ TestExecutionServiceComponent ]


       }) // componrnt  closing
export class TestExecutionComponent implements OnInit  {
     
      runn = [];
     
       moduleNames = [] ;
       featureNames = [];
       typeArray = [];
       datas = [] ;
     //  shivu= [];
       priorityArray = [];
       testScriptsData:Post[];
       projectIds:Post[]
      // testScript = [];
       demoArrayaData: String = "";
       moduleId:string;
       moduleName: string;
       featureId:string;
       featureName:string;
       lineNum:string;
       scriptName:string;
      projectId:string;
       srch:boolean;
       test:any;
       var2_featureName:any;
       projectName:string;
       vjData:any=[];
       mData:any=[];
      
      check:any;
       a:any; 
       $http: any;
      c:Object={};

  projectSelection: any;
  index2: any;
  mName: any;
  fName: any;
  sName: any;
  lNum: any;
  pSelection: any;
  mod=[];
  feat=[];
  lin=[];
  scri=[];
  pro=[];
  moduleDetails=[];
  featureDetails=[];
  featureDetails1=[];
  featureDetails2=[];
  featureDetails3=[];
  featureData: any[];
  fea:any[];
  mo:any[];
  lineNumDetails=[];
  lineData: any[];
  scripttData: any[];
  scriptDetails=[];
  aMN:string;
  aFN:string;
  ind:number;
  indU:number;

  constructor( private data: TestExecutionServiceComponent , private http:Http) {
    this.srch=false;      
  }
  
  ngOnInit() {
    
    let dataFromProjectSelectionDropdown=sessionStorage.getItem('key');
    this.projectName=dataFromProjectSelectionDropdown;
    this.data.projectDetails(dataFromProjectSelectionDropdown).subscribe(Data => this.moduleNames = Data) ;
   
    this.data.childModuleDetails1().subscribe(Data => this.featureNames = Data ) ;
    this.data.typeDetails().subscribe(Data => this.typeArray = Data) ;
    this.data.priorityDetails().subscribe(Data => this.priorityArray = Data) ;
    // this.data.testScriptDetails().subscribe(result => this.testScriptsData=result);
    // this.data.showDetails().subscribe(Data => this.testScript = Data)
     this.data.getProjectSelectionDetails().subscribe(Data =>this.datas=Data);
    

          
    this.demoArrayaData = this.moduleNames[1];
   // alert(dataFromProjectSelectionDropdown);
    //this.data.projectIDS(dataFromProjectSelectionDropdown).subscribe(Data => this.projectIds = Data) ;

  }
  moduleIndex(dd){
alert(dd)
  }

  manualtoggle(clickModule,index){
    this.aMN=clickModule;
    this.ind=index;
  // alert(typeof(index)+index) 
  // alert(typeof( this.ind)+ this.ind) 
   // console.log(this.mData) 
  }

  manualtoggle2(clickFeature,index){
    this.aFN=clickFeature;
    this.indU=index;
//  alert(index+typeof(index)) 
//  alert(this.indU+typeof(this.indU))       
  }

  

  lineNu:any
  
 search(moduleId,featureId) 
 {
   //.log(projectId);
   //console.log(moduleId);
   //console.log(featureId);
   if( moduleId==undefined || featureId==undefined || this.projectName==undefined)    
   {
     alert("Please select Module and Feature")

   }
   else
   {   this.srch=true;
   //alert(moduleId+","+featureId) ;
   
   this.lineNu =moduleId+','+featureId+','+this.projectName ;
   //console.log(this.lineNu);
   
   
   this.data.testScriptDetails(this.lineNu).subscribe(result =>{this.testScriptsData=result;});
    }
 }

index1:any;
vj=[];
scriptData=[];
lineNumb:any;
finalFeature=[];
finalScript=[];
incNum:number;
modInc:number;

row(index,test) 
{
  this.index1=index
  //alert(this.index1);
  this.moduleName=test.moduleName;
  this.featureName=test.featureName;
  this.lineNum=test.lineNum;
  this.scriptName=test.scriptName;
  this.projectSelection=test.projectSelection; 
  
    var mobj:Object={}; 
  
    // mobj["moduleName"]=this.moduleName;
    // mobj["featureName"]=this.featureName;
    // mobj["scriptName"]=this.scriptName;

    // mobj["moduleName"]=this.moduleName;
    // mobj["featureName"] =[
    //   {"featureName":"featureName1",scriptName :[{"scriptName":"scriptName1"},{"scriptName":"scriptName2"},{"scriptName":"scriptName3"}] },
    //   {"featureName":"featureName2",scriptName :[{"scriptName":"scriptName4"},{"scriptName":"scriptName5"},{"scriptName":"scriptName6"}]}
    //   ];
    
  
   // mobj["featureName"]=[{"featureName":"featureName1"},{"featureName":"featureName2"},[{"scriptName":"scriptName1"},{"scriptName":"scriptName2"}]];
    //mobj["scriptName"]=this.scriptName;
   
    // if(this.featureDetails3[0].moduleName)
    // for(var i=0;i<=10;i++){
      var n=0;
    if(this.featureDetails3.some(e=>e.moduleName===this.moduleName)===false ) {
      mobj["moduleName"]=this.moduleName;
      mobj["featureName"] =[
        {"featureName":this.featureName,scriptName:[{"scriptName":this.scriptName}]}
       
        ];
        this.featureDetails3.push(mobj);
     // this.df=  this.featureDetails3[0].featureName[0].featureName
    console.log("manish")
    // console.log(this.featureDetails3);
    // console.log(this.featureDetails3[0].featureName)
    // console.log(this.featureDetails3[0].featureName[0].featureName);
    // mobj={}
   n=0;
    this.modInc=0;
    this.incNum=0;
    }
else if(this.featureDetails3.some(e=>e.featureName[this.incNum].featureName===this.featureName)===false){
  console.log(this.incNum+"ttttttttttttt")
  mobj={}
  // mobj["featureName"] =[
  mobj={"featureName":this.featureName,scriptName:[{"scriptName":this.scriptName}]}
   
    // ];
   // console.log(mobj)
   // console.log(mobj[0])
 
   
    this.featureDetails3[0].featureName.push(mobj);
    this.incNum++
 
    console.log("vicky"+this.incNum)
  
     console.log(this.featureDetails3);
     n=0;
    // console.log(this.featureDetails3[0].featureName);
     //console.log(this.featureDetails3[0].featureName[0]);
    //  console.log(this.featureDetails3[0].featureName[0].scriptName[0]);
    //  console.log(this.featureDetails3[0].featureName[0].scriptName[0].scriptName);
}
else if(this.featureDetails3.some(e=>e.featureName[this.incNum].scriptName[n].scriptName===this.scriptName)===false){
 
  console.log(n+"ssssssssssssssssssssssss")
  n++
  console.log("script")
  mobj={}
  // mobj["featureName"] =[
  mobj={"scriptName":this.scriptName}
   
    // ];
    //console.log(mobj)
   // console.log(mobj[0])
    
    this.featureDetails3[0].featureName[this.incNum].scriptName.push(mobj);
//console.log(this.featureDetails3)
    
    // console.log(this.featureDetails3[0]);
    // console.log(this.featureDetails3[0].featureName);
    // console.log(this.featureDetails3[0].featureName[0]);
}
   // }//for endddd
  //   mobj["moduleName"]="feateyfefy";
  //   mobj["featureName"] =[
  //     {"featureName":"featureName3",scriptName :[{"scriptName":"scriptNam7"},{"scriptName":"scriptName8"},{"scriptName":"scriptName9"}] },
  //     {"featureName":"featureName4",scriptName :[{"scriptName":"scriptName41"},{"scriptName":"scriptName51"},{"scriptName":"scriptName61"}]}
  //     ];
  //  // mobj["featureName"]=[{"featureName":"featureName1"},{"featureName":"featureName2"},[{"scriptName":"scriptName1"},{"scriptName":"scriptName2"}]];
  //   //mobj["scriptName"]=this.scriptName;
   
    
  //   this.featureDetails3.push(mobj);
    // console.log("this.featureDetails3")
    // console.log(this.featureDetails3)
    var featu:Object={};
    featu["moduleName"]=this.moduleName;
    featu["featureName"]=this.featureName;
    featu["scriptName"]=this.scriptName;
    this.featureDetails2.push(featu);
    // console.log("this.featureDetails2")
    // console.log(this.featureDetails2)

    var featu1:Object={};
    featu1["moduleName"]=this.moduleName;
    featu1["featureName"]=this.featureName;
    featu1["scriptName"]=this.scriptName;
    this.featureDetails1.push(featu1);
    // console.log("this.featureDetails1")
    // console.log(this.featureDetails1)
    //this.mData=this.moduleDetails;
    for ( var i=0, len=this.moduleDetails.length; i < len; i++ )
    mobj[this.moduleDetails[i]['featureName']] = this.moduleDetails[i];
    //alert("MMMMMMMMMMMOOOOOOOOOOO")
    this.moduleDetails = new Array();
    this.moduleDetails.push(mobj);
    //console.log(this.moduleDetails);
    this.mo=this.moduleDetails;
    //console.log(this.mo);
    
    
    var featu:Object={};
    featu["moduleName"]=this.moduleName;
    featu["featureName"]=this.featureName;
    featu["scriptName"]=this.scriptName;
    //var cc=[]
    
    //console.log(this.featureDetails.some(e=>e.featureName===this.featureName))
     if(this.featureDetails.some(e=>e.featureName===this.featureName)===false && this.featureDetails.some(e=>e.scriptName===this.scriptName)===false || this.featureDetails.some(e=>e.featureName===this.featureName)===false && this.featureDetails.some(e=>e.scriptName===this.scriptName)===false) {
      //console.log(cc)
    this.featureDetails.push(featu);
    // console.log("this.featureDetails")
    // console.log(this.featureDetails)
  //  for ( var i=0; i<=this.featureDetails.length-1; i++ ) {
    this.finalFeature=this.featureDetails
   // console.log("hhhhhhh")
    //console.log(this.finalFeature)
    this.finalScript=this.featureDetails
   // console.log(this.finalScript)
      //console.log(typeof(this.featureDetails[i].featureName)+this.featureDetails[i].featureName)
      // if(){
      //   alert("equal")
      // }
    //}
  
  }
    //console.log(typeof(featu["featureName"])+featu["featureName"]);
    //console.log(this.featureDetails.length)
   //console.log(this.featureDetails)
    //console.log(typeof(this.featureDetails[i].featureName)+this.featureDetails[i].featureName)
    // for ( var i=0; i<=this.featureDetails.length-1; i++ ) {
    //   //console.log(typeof(this.featureDetails[i].featureName)+this.featureDetails[i].featureName)
    //   if(featu["featureName"] == this.featureDetails[i].featureName){
    //     alert("equal")

    //     var obj:Object={};

    //     obj["scriptName"]=this.scriptName;
    //     console.log(obj);
    //     this.scriptDetails.push(obj);
    //     this.scripttData=this.scriptDetails;
    //     console.log(this.scripttData)
    // //    console.log(this.featureDetails)
    //   // this.featureDetails.splice(i,1)
    //   }    
      
    //  }
    
  

}

vj2=[];
ro(index,dd){
this.index2=index;
this.mName=dd.moduleName;
this.fName=dd.featureName;
this.sName=dd.scriptName;
this.lNum=dd.lineNum;
this.pSelection=dd.projectSelection;

var obj:Object={};


  obj["moduleName"]=this.mName;
  obj["featureName"]=this.fName;
  obj["scriptName"]=this.sName;
  obj["lineNum"]=this.lNum;
  obj["projectSelection"]=this.pSelection;
 // console.log(obj);
  this.vj2.push(obj);
  //console.log(this.vj2)
  this.testScriptsData=this.vj2;
  this.vjData.splice(this.index2,1);
}

 run(moduleName,featureName,lineNum,projectSelection) 

 { 
      alert("Run");
      alert("moduleName=>"+moduleName);
      alert("featureName=>"+featureName);
      alert("lineNum=>"+lineNum);
      alert("projectSelection=>"+projectSelection);
      // this.runn.push( // {
      //  "moduleId":moduleId,
      //  "featureId":featureId,
      //  "lineNum":this.lineNumb,
      //  "projectname":projectId,  
      //  })
      
      //   console.log(this.runn);  
    
        var lineNumm = this.lineNum;
       // console.log(moduleName+','+featureName+','+lineNumm+','+projectSelection);  
       var c = this.vjData;
     
    
       
      return  this.http.post('/testScript',c,{})
       .subscribe(result =>{console.log(result)
        });
    
  }

}