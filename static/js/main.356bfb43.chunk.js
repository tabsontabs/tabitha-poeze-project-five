(this["webpackJsonptabitha-poeze-project-five"]=this["webpackJsonptabitha-poeze-project-five"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/logo.435f9ace.png"},20:function(e,t,a){e.exports=a.p+"static/media/villagers6.fcc2dd76.jpg"},21:function(e,t,a){e.exports=a.p+"static/media/isabelle.e81857d6.png"},22:function(e,t,a){e.exports=a(45)},27:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(17),o=a.n(r),l=(a(27),a(7)),c=a(1),s=a(2),p=a(4),u=a(3),m=(a(6),a(18)),d=a.n(m),h=a(19),y=a.n(h),g=[{type:"Alligator"},{type:"Anteater"},{type:"Bird"},{type:"Bear"},{type:"Cat"},{type:"Chicken"},{type:"Cow"},{type:"Cub"},{type:"Deer"},{type:"Dog"},{type:"Duck"},{type:"Eagle"},{type:"Elephant"},{type:"Frog"},{type:"Goat"},{type:"Hamster"},{type:"Hippo"},{type:"Horse"},{type:"Koala"},{type:"Kangaroo"},{type:"Lion"},{type:"Monkey"},{type:"Mouse"},{type:"Octopus"},{type:"Penguin"},{type:"Pig"},{type:"Rabbit"},{type:"Rhino"},{type:"Sheep"},{type:"Squirrel"},{type:"Tiger"},{type:"Wolf"}],f=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(n.Fragment,null,i.a.createElement("option",{disabled:!0,value:""},"Options"),g.map((function(e,t){return i.a.createElement("option",{key:t,value:e.type},e.type)})))}}]),a}(n.Component),E=[{type:"Normal"},{type:"Peppy"},{type:"Snooty"},{type:"Uchi"},{type:"Lazy"},{type:"Smug"},{type:"Cranky"},{type:"Jock"}],v=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(n.Fragment,null,i.a.createElement("option",{disabled:!0,value:""},"Options"),E.map((function(e,t){return i.a.createElement("option",{key:t,value:e.type},e.type)})))}}]),a}(n.Component),b=[{type:"Aries"},{type:"Taurus"},{type:"Gemini"},{type:"Cancer"},{type:"Leo"},{type:"Virgo"},{type:"Libra"},{type:"Scorpio"},{type:"Sagittarius"},{type:"Capricorn"},{type:"Aquarius"},{type:"Pisces"}],z=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(n.Fragment,null,i.a.createElement("option",{disabled:!0,value:""},"Options"),b.map((function(e,t){return i.a.createElement("option",{key:t,value:e.type},e.type)})))}}]),a}(n.Component),S=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleRadioChange=function(t){e.setState({userRadioSelection:t.target.value})},e.handleChange=function(t){e.setState({userSelection:t.target.value})},e.state={userSelection:"",userRadioSelection:""},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(n.Fragment,null,i.a.createElement("form",null,i.a.createElement("fieldset",{value:this.state.userRadioSelection,onChange:this.handleRadioChange},i.a.createElement("input",{className:"sr-only",type:"radio",name:"searchType",id:"speciesRadio",value:"Species"}),i.a.createElement("label",{htmlFor:"speciesRadio"},"Species"),i.a.createElement("input",{className:"sr-only",type:"radio",name:"searchType",id:"personalityRadio",value:"Personality"}),i.a.createElement("label",{htmlFor:"personalityRadio"},"Personality"),i.a.createElement("input",{className:"sr-only",type:"radio",name:"searchType",id:"zodiacRadio",value:"Zodiac"}),i.a.createElement("label",{htmlFor:"zodiacRadio"},"Zodiac"))),i.a.createElement("form",null,i.a.createElement("div",{className:"selectBox"},i.a.createElement("label",{htmlFor:"userSelection",className:"sr-only"},"Options"),i.a.createElement("select",{id:"userSelection",value:this.state.userSelection,onChange:this.handleChange},"Species"===this.state.userRadioSelection?i.a.createElement(f,null):"Zodiac"===this.state.userRadioSelection?i.a.createElement(z,null):i.a.createElement(v,null))),i.a.createElement("button",{className:"display",onClick:function(t){return e.props.filterVillagers(t,e.state.userSelection)}},"Display")))}}]),a}(n.Component),O=a(20),k=a.n(O),j=a(21),w=a.n(j),D=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"instructions"},i.a.createElement("img",{className:"mobileImage",src:k.a,alt:"A group of Animal Crossing:New Horizons villagers celebrating in front of a museum."}),i.a.createElement("img",{className:"desktopImage",src:w.a,alt:"A group of Animal Crossing:New Horizons villagers celebrating in front of a museum."}),i.a.createElement("div",{className:"instructionsTextBox"},i.a.createElement("h2",null,"Instructions"),i.a.createElement("p",null,"Choose what type of search you would like to perform."),i.a.createElement("p",null,"Then, choose an option from the dropdown menu."),i.a.createElement("p",null,'Click the "DISPLAY" button to view names and icons for all associated villagers.'),i.a.createElement("p",null,"You can click on a villager's icon to view their full photo and more information about them."),i.a.createElement("p",null,"You can click the logo at the top of the page to come back to these instructions.")))}}]),a}(n.Component),C=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(n.Fragment,null,i.a.createElement("li",{className:"relVillagerItem"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("button",{className:"villagerButton",key:this.props.id,onClick:function(t){return e.props.showInfo(t,e.props.id)}},i.a.createElement("img",{src:this.props.icon,alt:this.props.name}))),i.a.createElement("li",null,i.a.createElement("p",{className:"listItemName"},this.props.name)))))}}]),a}(n.Component),M=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(n.Fragment,{key:this.props.id},i.a.createElement("li",null,i.a.createElement("img",{src:this.props.icon,alt:this.props.name})),i.a.createElement("li",null,i.a.createElement("ul",{className:"showInfoTextBox"},i.a.createElement("li",null,i.a.createElement("p",{className:"villagerName"},this.props.name)),i.a.createElement("li",null,i.a.createElement("p",{className:"villagerBday"},"Birthday: ",this.props.birthday)),i.a.createElement("li",null,i.a.createElement("p",null,"Species: ",this.props.species)),i.a.createElement("li",null,i.a.createElement("p",null,'Catchphrase: "',this.props.catchphrase,'"')),i.a.createElement("li",null,i.a.createElement("p",null,"Personality: ",this.props.personality)))))}}]),a}(n.Component),N=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).filterVillagers=function(t,a){t.preventDefault();var n=Object(l.a)(e.state.villagers).filter((function(e){return e.species===a||e.personality===a||e.zodiacSign===a}));e.setState({relVillagers:n}),e.setState({hideInfo:!0}),e.setState({showInstructions:!1})},e.showInfo=function(t,a){t.preventDefault(),e.setState({hideInfo:!1});var n=Object(l.a)(e.state.relVillagers).filter((function(e){return e.id===a}));e.setState({clickedVillager:n})},e.goBack=function(){window.location.reload()},e.state={villagers:[],relVillagers:[],hideInfo:!0,clickedVillager:[],showInstructions:!0},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;d()({url:"https://acnhapi.com/v1/villagers/",method:"GET",responseType:"json"}).then((function(t){var a=t.data,n=[];for(var i in a){var r=a[i]["birthday-string"].substring(0,3),o=parseInt(a[i].birthday);n.push({id:i,name:a[i].name["name-USen"],personality:a[i].personality,birthday:a[i]["birthday-string"],birthdayNumber:a[i].birthday,catchphrase:a[i]["catch-phrase"],icon:a[i].icon_uri,image:a[i].image_uri,species:a[i].species,zodiacMonth:r,zodiacDay:o,zodiacSign:""})}var l=n.map((function(e){return"May"==e.zodiacMonth&&e.zodiacDay<21||"Apr"==e.zodiacMonth&&e.zodiacDay>19?(e.zodiacSign="Taurus",e):"Jun"==e.zodiacMonth&&e.zodiacDay<22||"May"==e.zodiacMonth&&e.zodiacDay>20?(e.zodiacSign="Gemini",e):"Jul"==e.zodiacMonth&&e.zodiacDay<24||"Jun"==e.zodiacMonth&&e.zodiacDay>21?(e.zodiacSign="Cancer",e):"Aug"==e.zodiacMonth&&e.zodiacDay<24||"Jul"==e.zodiacMonth&&e.zodiacDay>23?(e.zodiacSign="Leo",e):"Sep"==e.zodiacMonth&&e.zodiacDay<23||"Aug"==e.zodiacMonth&&e.zodiacDay>23?(e.zodiacSign="Virgo",e):"Oct"==e.zodiacMonth&&e.zodiacDay<23||"Sep"==e.zodiacMonth&&e.zodiacDay>22?(e.zodiacSign="Libra",e):"Nov"==e.zodiacMonth&&e.zodiacDay<23||"Oct"==e.zodiacMonth&&e.zodiacDay>22?(e.zodiacSign="Scorpio",e):"Dec"==e.zodiacMonth&&e.zodiacDay<21||"Nov"==e.zodiacMonth&&e.zodiacDay>22?(e.zodiacSign="Saggitarius",e):"Jan"==e.zodiacMonth&&e.zodiacDay<21||"Dec"==e.zodiacMonth&&e.zodiacDay>20?(e.zodiacSign="Capricorn",e):"Feb"==e.zodiacMonth&&e.zodiacDay<20||"Jan"==e.zodiacMonth&&e.zodiacDay>20?(e.zodiacSign="Aquarius",e):"Mar"==e.zodiacMonth&&e.zodiacDay<21||"Feb"==e.zodiacMonth&&e.zodiacDay>19?(e.zodiacSign="Pisces",e):(e.zodiacSign="Aries",e)}));e.setState({villagers:l})}))}},{key:"render",value:function(){var e=this;return i.a.createElement(n.Fragment,null,i.a.createElement("header",{id:"refresh"},i.a.createElement("div",{className:"wrapper"},i.a.createElement("a",{onClick:this.goBack,href:"#refresh"},i.a.createElement("img",{className:"headerImage",src:y.a,alt:"logo for Animal Crossing: New Horizons"})),i.a.createElement("h1",null,"The Villager Finder"))),i.a.createElement("main",null,i.a.createElement("div",{className:"wrapper"},i.a.createElement(S,{filterVillagers:this.filterVillagers}),!0===this.state.showInstructions?i.a.createElement(D,null):i.a.createElement("p",null),!0===this.state.hideInfo?i.a.createElement("ul",{className:"relVillagerList"},this.state.relVillagers.map((function(t){var a=t.id,n=t.icon,r=t.name;return i.a.createElement(C,{showInfo:e.showInfo,id:a,icon:n,name:r})}))):this.state.clickedVillager.map((function(e){var t=e.id,a=e.image,n=e.name,r=e.personality,o=e.birthday,l=e.catchphrase,c=e.species;return i.a.createElement("ul",{className:"moreInfo"},i.a.createElement(M,{id:t,icon:a,name:n,personality:r,birthday:o,catchphrase:l,species:c}))})))),i.a.createElement("footer",null,i.a.createElement("div",{className:"wrapper"},i.a.createElement("p",null,"Made with ",i.a.createElement("span",{role:"img","aria-label":"pink heart with yellow sparkles"},"\ud83d\udc96")," by Tabitha Poeze"))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){}},[[22,1,2]]]);
//# sourceMappingURL=main.356bfb43.chunk.js.map