(this["webpackJsonpwatch-along-client"]=this["webpackJsonpwatch-along-client"]||[]).push([[0],{109:function(e,t){},115:function(e,t){},117:function(e,t){},132:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(11),l=n.n(o),c=n(17),i=n(18),s=n(21),u=n(20),d=n(138),m=n(134),h=n(135),f=n(136),p=n(139),E=n(137),v=(n(37),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).roomId="",e.enterRoom=function(e,t){window.open("".concat(window.location.href).concat(e,"?id=").concat(t),"_self")},e.handleKeyUp=function(e,t){13===e.keyCode&&(e.preventDefault(),t())},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement(d.a,{bg:"primary",variant:"dark"},a.a.createElement(m.a,null,a.a.createElement(d.a.Brand,{style:{marginLeft:"20px"}},a.a.createElement("img",{alt:"",src:"../../favicon.ico",width:"30",height:"30",className:"d-inline-block align-top flip-vertical"}),"  ","Morser"))),a.a.createElement(m.a,{className:"align-items-center"},a.a.createElement("h2",null,"Overview"),a.a.createElement("p",null,"Morser is a platform that lets you send morse code to any one in the world."),a.a.createElement("h3",null,"How to use:"),a.a.createElement("p",null,"Create a room with some room id. Once you enter the room, share that room ID (or the full URL) with your friends.",a.a.createElement("br",null),"One becomes a sender and other becomes a receiver. The sender can write text normally, it is converted into morse code by the website itself and sent to the receiver"),a.a.createElement(h.a,{style:{alignItems:"center"}},a.a.createElement(f.a,null,a.a.createElement(p.a,{style:{width:"18rem",margin:"4px",backgroundColor:"#f06292"}},a.a.createElement(p.a.Body,null,a.a.createElement(p.a.Title,null,"Create Room as Sender"),a.a.createElement(p.a.Text,null,"Click below if you do not have a room number and would like to create a new room."),a.a.createElement(E.a,{onClick:function(){return e.enterRoom("sender",parseInt((new Date).getTime()/1e3))},style:{backgroundColor:"#ba2d65",borderColor:"#ba2d65"}},"Let's go")))),a.a.createElement(f.a,null,a.a.createElement(p.a,{style:{width:"18rem",margin:"4px",backgroundColor:"#f06292"}},a.a.createElement(p.a.Body,null,a.a.createElement(p.a.Title,null,"Join Room as sender"),a.a.createElement(p.a.Text,null,"Enter your Room number below"),a.a.createElement("input",{placeholder:"Room #",type:"text",ref:function(t){e.roomId=t},onKeyUp:function(t){return e.handleKeyUp(t,(function(){return e.enterRoom(e.roomId.value)}))}}),a.a.createElement(E.a,{onClick:function(){return e.enterRoom("sender",e.roomId.value)},style:{backgroundColor:"#ba2d65",borderColor:"#ba2d65",marginTop:"17px"}},"Let's go"))))),a.a.createElement(h.a,{style:{alignItems:"center"}},a.a.createElement(f.a,null,a.a.createElement(p.a,{style:{width:"18rem",margin:"4px",backgroundColor:"#f06292"}},a.a.createElement(p.a.Body,null,a.a.createElement(p.a.Title,null,"Create Room as receiver"),a.a.createElement(p.a.Text,null,"Click below if you do not have a room number and would like to create a new room."),a.a.createElement(E.a,{onClick:function(){return e.enterRoom("receiver",parseInt((new Date).getTime()/1e3))},style:{backgroundColor:"#ba2d65",borderColor:"#ba2d65"}},"Let's go")))),a.a.createElement(f.a,null,a.a.createElement(p.a,{style:{width:"18rem",margin:"4px",backgroundColor:"#f06292"}},a.a.createElement(p.a.Body,null,a.a.createElement(p.a.Title,null,"Join Room as receiver"),a.a.createElement(p.a.Text,null,"Enter your Room number below"),a.a.createElement("input",{placeholder:"Room #",type:"text",ref:function(t){e.roomId=t},onKeyUp:function(t){return e.handleKeyUp(t,(function(){return e.enterRoom(e.roomId.value)}))}}),a.a.createElement(E.a,{onClick:function(){return e.enterRoom("receiver",e.roomId.value)},style:{backgroundColor:"#ba2d65",borderColor:"#ba2d65",marginTop:"17px"}},"Let's go")))))))}}]),n}(r.Component)),b=n(46),w=n(140),g=n(33),y=n.n(g),k=n(34),C=n.n(k),x=n(74),I=n.n(x),O=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).socket=y()(),e.videoEnded=!0,e.index=-1,e.state={text:"",alerts:[]},e.handleErrors=function(){var t=e.state.alerts;t.sInactive="Server went inactive. Please refresh page.",e.setState({alerts:t})},e.showAlert=function(){return Object.keys(e.state.alerts).map((function(t){var n=e.state.alerts[t];return a.a.createElement(w.a,{variant:"danger",id:t,onClose:function(){var n=e.state.alerts;delete n[t],e.setState({alerts:n})},dismissible:!0},n)}))},e.componentDidMount=function(){e.socket.emit("register",{id:e.props.roomId}),e.socket.on("connect_error",(function(t){return e.handleErrors()})),e.socket.on("connect_failed",(function(t){return e.handleErrors()})),e.socket.on("disconnect",(function(t){return e.handleErrors()})),setInterval((function(){return C.a.get("stayUp")}),6e4)},e.handleTextChange=function(t){var n=t.target.value;e.setState((function(e){return Object(b.a)(Object(b.a)({},e),{},{text:n})}))},e.handleOnClick=function(){var t=I.a.encode(e.state.text,{mode:"simple"});e.socket.emit("sendCode",{message:t,id:e.props.roomId})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return window.location="".concat(window.location.origin,"/receiver?id=").concat(e.props.roomId)}},"Become Receiver"),a.a.createElement("br",null),a.a.createElement("br",null),"Enter the Morse Code you would like to send",a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("input",{type:"text",value:this.state.text,onChange:function(t){return e.handleTextChange(t)}}),a.a.createElement("button",{onClick:function(){return e.handleOnClick()}},"Send Morse Code"))}}]),n}(r.Component),T=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).socket=y()(),e.videoEnded=!0,e.index=-1,e.state={showText:!1,alerts:[]},e.handleErrors=function(){var t=e.state.alerts;t.sInactive="Server went inactive. Please refresh page.",e.setState({alerts:t})},e.showAlert=function(){return Object.keys(e.state.alerts).map((function(t){var n=e.state.alerts[t];return a.a.createElement(w.a,{variant:"danger",id:t,onClose:function(){var n=e.state.alerts;delete n[t],e.setState({alerts:n})},dismissible:!0},n)}))},e.componentDidMount=function(){e.socket.emit("register",{id:e.props.roomId}),e.socket.on("sendMorseCode",(function(t){var n=e.playMorseCode(t);window.navigator.vibrate(n)})),e.socket.on("connect_error",(function(t){return e.handleErrors()})),e.socket.on("connect_failed",(function(t){return e.handleErrors()})),e.socket.on("disconnect",(function(t){return e.handleErrors()})),setInterval((function(){return C.a.get("stayUp")}),6e4)},e.playMorseCode=function(e){for(var t=200,n=[],r=0;r<e.length;r++){var a=e.charAt(r);"."===a?n.push(t):"-"===a||" "===a?n.push(600):"|"===a&&n.push(1400),!(r+1<e.length)||"."!==e.charAt(r)&&"-"!==e.charAt(r)||"."!==e.charAt(r+1)&&"-"!==e.charAt(r+1)||n.push(t)}return n},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return window.location="".concat(window.location.origin,"/sender?id=").concat(e.props.roomId)}},"Become Sender")," ",a.a.createElement("br",null),a.a.createElement("br",null),!this.state.showText&&a.a.createElement("p",null,a.a.createElement("button",{onClick:function(){return e.setState({showText:!0})}},"Click here")," to start receiving morse code"),this.state.showText&&"As Soon as the sender will send a morse code, you will get the vibrations")}}]),n}(r.Component),R=window.location.search.replace("?id=",""),j=window.location.pathname;R?("/sender"===j&&l.a.render(a.a.createElement(O,{roomId:R}),document.getElementById("root")),"/receiver"===j&&l.a.render(a.a.createElement(T,{roomId:R}),document.getElementById("root"))):l.a.render(a.a.createElement(v,null),document.getElementById("root"))},75:function(e,t,n){e.exports=n(132)}},[[75,1,2]]]);
//# sourceMappingURL=main.4726e2fe.chunk.js.map