"use strict";(self.webpackChunkexample_angular=self.webpackChunkexample_angular||[]).push([[481],{2481:(x,d,o)=>{o.r(d),o.d(d,{ComponentsModule:()=>s});var Z=o(6895),m=o(433),f=o(7459),e=o(8256);class p{constructor(){this.sizeChange=new e.vpe}dec(){this.resize(-1)}inc(){this.resize(1)}resize(t){this.size=Math.min(40,Math.max(8,+this.size+t)),this.sizeChange.emit(this.size)}}p.\u0275fac=function(t){return new(t||p)},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-sizer"]],inputs:{size:"size"},outputs:{sizeChange:"sizeChange"},decls:9,vars:1,consts:[["type","button","title","smaller",1,"btn","btn-primary",3,"click"],["type","button","title","bigger",1,"btn","btn-primary",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div")(1,"button",0),e.NdJ("click",function(){return n.dec()}),e._uU(2," - "),e.qZA(),e._uU(3," \xa0 "),e.TgZ(4,"button",1),e.NdJ("click",function(){return n.inc()}),e._uU(5," + "),e.qZA(),e._uU(6," \xa0 "),e.TgZ(7,"span"),e._uU(8),e.qZA()()),2&t&&(e.xp6(8),e.hij("",n.size,"px"))},encapsulation:2});const h=function(){return{"text-capitalize":!0,"fw-bold":!0}},_=function(){return["text-capitalize","fw-bold"]},z=function(){return{"text-transform":"capitalize","font-weight":"bold"}};class a{constructor(){this.text_capitalize="text-capitalize",this.fontSizePx=16}click(t){console.log("click"),console.log(t)}}a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-binding"]],decls:59,vars:27,consts:[[1,"text-capitalize"],["border","1"],[1,"text-capitalize","fw-bold"],[2,"text-transform","capitalize","font-weight","bold"],[1,"btn","btn-primary",3,"click"],[3,"size","sizeChange"]],template:function(t,n){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Components / Bindings"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"h4"),e._uU(4,"property binding"),e.qZA(),e.TgZ(5,"p",0),e._uU(6,"string binding"),e.qZA(),e.TgZ(7,"p"),e._uU(8,"expresion binding"),e.qZA(),e._UZ(9,"hr"),e.TgZ(10,"h4"),e._uU(11,"attribute binding"),e.qZA(),e.TgZ(12,"table",1)(13,"tr")(14,"td"),e._uU(15,"One-Two"),e.qZA()(),e.TgZ(16,"tr")(17,"td"),e._uU(18,"Three"),e.qZA(),e.TgZ(19,"td"),e._uU(20,"Four"),e.qZA()()(),e._UZ(21,"hr"),e.TgZ(22,"h4"),e._uU(23,"class binding"),e.qZA(),e.TgZ(24,"p",2),e._uU(25,"capitalized text."),e.qZA(),e.TgZ(26,"p"),e._uU(27,"capitalized text."),e.qZA(),e.TgZ(28,"p"),e._uU(29,"capitalized text."),e.qZA(),e.TgZ(30,"p"),e._uU(31,"capitalized text."),e.qZA(),e.TgZ(32,"p"),e._uU(33,"capitalized text."),e.qZA(),e._UZ(34,"hr"),e.TgZ(35,"h4"),e._uU(36,"style binding"),e.qZA(),e.TgZ(37,"p",3),e._uU(38,"capitalized text."),e.qZA(),e.TgZ(39,"p"),e._uU(40,"capitalized text."),e.qZA(),e.TgZ(41,"p"),e._uU(42," capitalized text.\n"),e.qZA(),e.TgZ(43,"p"),e._uU(44," capitalized text.\n"),e.qZA(),e._UZ(45,"hr"),e.TgZ(46,"h4"),e._uU(47,"event binding"),e.qZA(),e.TgZ(48,"button",4),e.NdJ("click",function(){return n.click()}),e._uU(49,"click no event"),e.qZA(),e._uU(50,"\n\xa0\n"),e.TgZ(51,"button",4),e.NdJ("click",function(g){return n.click(g)}),e._uU(52,"click event"),e.qZA(),e._UZ(53,"hr"),e.TgZ(54,"h4"),e._uU(55,"two-way binding"),e.qZA(),e.TgZ(56,"app-sizer",5),e.NdJ("sizeChange",function(g){return n.fontSizePx=g}),e.qZA(),e.TgZ(57,"div"),e._uU(58,"Resizable Text"),e.qZA()),2&t&&(e.xp6(7),e.Tol(n.text_capitalize),e.xp6(7),e.uIk("colspan",2),e.xp6(12),e.Tol("text-capitalize fw-bold"),e.xp6(2),e.ekj("text-capitalize",!0)("fw-bold",!0),e.xp6(2),e.Tol(e.DdM(24,h)),e.xp6(2),e.Tol(e.DdM(25,_)),e.xp6(7),e.Akn("text-transform:capitalize;font-weight:bold"),e.xp6(2),e.Udp("text-transform","capitalize")("font-weight","bold"),e.xp6(2),e.Akn(e.DdM(26,z)),e.xp6(13),e.Q6J("size",n.fontSizePx),e.xp6(1),e.Udp("font-size",n.fontSizePx,"px"))},dependencies:[p],encapsulation:2});var T=o(7445);class u{constructor(){}ngOnChanges(t){console.log("ngOnChanges - Dummy")}}u.\u0275fac=function(t){return new(t||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-lifecycle-dummy"]],inputs:{text:"text"},features:[e.TTD],decls:2,vars:1,template:function(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.Oqu(n.text))},encapsulation:2});class r{constructor(){this.text="",this.counter=0,console.log("contructor")}ngOnInit(){console.log("ngOnInit"),this.timer=(0,T.F)(5e3).subscribe(t=>{console.log("timer event"),this.counter=t})}ngOnChanges(t){console.log("ngOnChanges")}ngDoCheck(){console.log("ngDoCheck")}ngAfterContentInit(){console.log("ngAfterContentInit")}ngAfterContentChecked(){console.log("ngAfterContentChecked")}ngAfterViewInit(){console.log("ngAfterViewInit")}ngAfterViewChecked(){console.log("ngAfterViewChecked")}ngOnDestroy(){console.log("ngOnDestroy"),this.timer.unsubscribe()}input(){console.log("input event")}button(){console.log("button event")}}r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-lifecycle"]],features:[e.TTD],decls:14,vars:3,consts:[["type","text",3,"ngModel","ngModelChange","input"],[3,"click"],[3,"text"]],template:function(t,n){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Components / Lifecycle"),e.qZA(),e.TgZ(2,"input",0),e.NdJ("ngModelChange",function(g){return n.text=g})("input",function(){return n.input()}),e.qZA(),e._UZ(3,"br")(4,"br"),e.TgZ(5,"button",1),e.NdJ("click",function(){return n.button()}),e._uU(6,"Click"),e.qZA(),e._UZ(7,"br")(8,"br"),e.TgZ(9,"span"),e._uU(10),e.qZA(),e._UZ(11,"br")(12,"br")(13,"app-lifecycle-dummy",2)),2&t&&(e.xp6(2),e.Q6J("ngModel",n.text),e.xp6(8),e.Oqu(n.counter),e.xp6(3),e.Q6J("text",n.text))},dependencies:[m.Fj,m.JJ,m.On,u],encapsulation:2});const b=[{path:"",component:o(7556).c,children:[{path:"bindings",component:a},{path:"lifecycle",component:r}]}];class l{}l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[f.Bz.forChild(b),f.Bz]});var A=o(4466);class s{}s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[Z.ez,m.u5,l,A.m]})}}]);