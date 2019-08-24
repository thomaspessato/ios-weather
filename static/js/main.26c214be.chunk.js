(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),s=a.n(i),c=(a(15),a(1)),o=a(2),l=a(4),u=a(3),m=a(5),h=(a(16),a(6)),d=(a(17),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).draw=a.draw.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillUnmount",value:function(){console.log()}},{key:"makeItRain",value:function(){var e=document.getElementById("bg-canvas");if(e.width=window.innerWidth,e.height=window.innerHeight,e.getContext){var t=e.getContext("2d"),a=e.width,n=e.height;t.strokeStyle=this.props.rainColor?this.props.rainColor:"rgba(174,194,224,0.5)",t.lineWidth=this.props.lineWidth||.3,t.lineCap="round";for(var r=[],i=this.props.rainAmount||500,s=0;s<i;s++)r.push({x:Math.random()*a,y:Math.random()*n,l:1*Math.random(),xs:4*Math.random()-4+2,ys:10*Math.random()+10});for(var c=[],o=0;o<i;o++)c[o]=r[o];this.setState({context:t,canvas:e,particles:c}),setInterval(this.draw,20)}}},{key:"draw",value:function(){this.setState({canvas:{width:window.innerWidth,height:window.innerHeight}});var e=this.state.canvas.width,t=this.state.canvas.height;this.state.context.clearRect(0,0,e,t);for(var a=0;a<this.state.particles.length;a++){var n=this.state.particles[a];this.state.context.beginPath(),this.state.context.moveTo(n.x,n.y),this.state.context.lineTo(n.x+n.l*n.xs,n.y+n.l*n.ys),this.state.context.stroke()}this.move()}},{key:"move",value:function(){if(this.state.particles)for(var e=this.state.canvas.width,t=this.state.canvas.height,a=0;a<this.state.particles.length;a++){var n=this.state.particles[a];n.y+=n.ys,(n.x>e||n.y>t)&&(n.y=-30)}}},{key:"componentDidMount",value:function(){this.makeItRain()}},{key:"render",value:function(){return r.a.createElement("div",{class:"rain",style:{background:this.props.background}},r.a.createElement("canvas",{id:"bg-canvas"}))}}]),t}(r.a.Component)),p="https://api.openweathermap.org/data/2.5/",f="a7091a7d01f3bf589dd68d40223e222e",v=(a(18),a(19),r.a.Component,a(20),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="";switch(this.props.weather){case"cloud":e=r.a.createElement("i",{class:"fas fa-cloud"});break;case"sun":e=r.a.createElement("i",{class:"fas fa-sun"});break;case"rain":e=r.a.createElement("i",{class:"fas fa-cloud-rain"});break;case"sun/cloud":e=r.a.createElement("i",{class:"fas fa-cloud-sun"});break;default:e=r.a.createElement("i",{class:"fas fa-cloud"})}return r.a.createElement("div",{class:"hour-card"},r.a.createElement("span",{class:"hour-card__time"},this.props.time),r.a.createElement("div",{class:"hour-card__weather-container"},r.a.createElement("span",{class:"hour-card__probability"},"30%"),e),r.a.createElement("span",{class:"hour-card__temperature"},this.props.temperature))}}]),t}(r.a.Component)),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getCityWeather(this.props.city).then(function(t){e.setState({data:t})})}},{key:"getCityWeather",value:function(e){return new Promise(function(t,a){fetch(p+"weather?q="+e+"&appid="+f).then(function(e){return e.json()}).then(function(e){return t(e)},function(){a()})})}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"kelvinToCelcius",value:function(e){return(e-273.15).toFixed(0)}},{key:"handleSubmit",value:function(e){var t=this;this.getCityWeather(this.props.city).then(function(e){console.log(e),t.setState({data:e})},function(){console.log("City not found")}),e.preventDefault()}},{key:"render",value:function(){var e=null,t=null;if(this.state.data)switch(t=r.a.createElement("div",{class:"main-card"},r.a.createElement("h2",{class:"main-card__city"},this.state.data.name),r.a.createElement("span",{class:"main-card__status"},this.state.data.weather[0].main),r.a.createElement("span",{class:"main-card__temperature"},this.kelvinToCelcius(this.state.data.main.temp),"\xb0")),this.state.data.weather[0].main.toUpperCase()){case"RAIN":e=r.a.createElement(d,{lineWidth:.8,rainAmount:100});break;case"CLEAR":default:e=r.a.createElement(d,{lineWidth:1,rainAmount:200})}return r.a.createElement("div",{class:"main-card"},e,r.a.createElement("div",{class:"main-card__content"},t),r.a.createElement("div",{class:"main-card__today-info"},r.a.createElement("div",null,r.a.createElement("span",null,"Thursday"),r.a.createElement("span",null,"TODAY")),r.a.createElement("div",null,r.a.createElement("span",null,"10"),r.a.createElement("span",null,"2"))))}}]),t}(r.a.Component),w=(a(21),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="";switch(this.props.weather){case"cloud":e=r.a.createElement("i",{class:"fas fa-cloud"});break;case"sun":e=r.a.createElement("i",{class:"fas fa-sun"});break;case"rain":e=r.a.createElement("i",{class:"fas fa-cloud-rain"});break;case"sun/cloud":e=r.a.createElement("i",{class:"fas fa-cloud-sun"});break;default:e=r.a.createElement("i",{class:"fas fa-cloud"})}return r.a.createElement("div",{class:"day-card"},r.a.createElement("span",{class:"day-card__day"},this.props.day),e,r.a.createElement("div",null,r.a.createElement("span",{class:"day-card__max-temp"},this.props.maxTemperature),r.a.createElement("span",{class:"day-card__min-temp"},this.props.minTemperature)))}}]),t}(r.a.Component)),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).groupBy=function(e){return function(t){return t.reduce(function(t,a){var n=a[e];return t[n]=(t[n]||[]).concat(a),t},{})}},a.state={city:"Porto Alegre"},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("fetching data"),this.getCityWeatherDays(40,this.state.city).then(function(t){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=t.list;n=e.groupBy("dateIndex")(n=n.map(function(e){return{dateName:a[new Date(e.dt_txt).getDay()],dateIndex:new Date(e.dt_txt).getDay(),weather:e.weather[0].main,min:e.main.temp_min,max:e.main.temp_max}})),console.log(n),e.setState({dates:n})})}},{key:"getCityWeatherDays",value:function(e,t){return new Promise(function(a,n){console.log(f),fetch(p+"forecast?q="+t+"&units=metric&cnt="+e+"&appid="+f).then(function(e){return e.json()}).then(function(e){return a(e)},function(){n()})})}},{key:"render",value:function(){if(this.state.dates){var e=[];for(var t in this.state.dates)e.push(r.a.createElement(w,{day:this.state.dates[t][0].dateName,maxTemperature:this.state.dates[t][0].max.toFixed(0),minTemperature:this.state.dates[t][0].min.toFixed(0),weather:this.state.dates[t][0].weather}))}return r.a.createElement("div",{style:{background:"rgba(0,0,0,0.3)"},className:"App"},r.a.createElement("div",{class:"weather-app"},r.a.createElement(y,{city:this.state.city}),r.a.createElement("div",{class:"main-card__hourly"},r.a.createElement(v,{time:"Now",temperature:"16\xb0",weather:"rain"}),r.a.createElement(v,{time:"2pm",temperature:"16\xb0",weather:"sun/cloud"}),r.a.createElement(v,{time:"3pm",temperature:"16\xb0",weather:"rain"}),r.a.createElement(v,{time:"4pm",temperature:"16\xb0",weather:"sun/cloud"}),r.a.createElement(v,{time:"5pm",temperature:"13\xb0",weather:"cloud"}),r.a.createElement(v,{time:"6pm",temperature:"14\xb0",weather:"cloud"}),r.a.createElement(v,{time:"7pm",temperature:"16\xb0",weather:"sun"}),r.a.createElement(v,{time:"8pm",temperature:"16\xb0",weather:"rain"}),r.a.createElement(v,{time:"9pm",temperature:"16\xb0",weather:"sun/cloud"}),r.a.createElement(v,{time:"10pm",temperature:"13\xb0",weather:"cloud"}),r.a.createElement(v,{time:"11pm",temperature:"14\xb0",weather:"cloud"}),r.a.createElement(v,{time:"12pm",temperature:"16\xb0",weather:"sun"})),r.a.createElement("div",{class:"main-card__daily"},e)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.26c214be.chunk.js.map