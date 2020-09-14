(this["webpackJsonpdataviz-heatmap-d3"]=this["webpackJsonpdataviz-heatmap-d3"]||[]).push([[0],{29:function(t,e,r){t.exports=r(36)},34:function(t,e,r){},36:function(t,e,r){"use strict";r.r(e);var a=r(1),n=r.n(a),c=r(14),o=r.n(c),i=r(3),s=(r(34),r(10)),u=r.n(s),l=r(15);function p(t){for(var e=0;e<t.length;e++){switch(t[e].month){case 1:t[e].monthStr="January";break;case 2:t[e].monthStr="February";break;case 3:t[e].monthStr="March";break;case 4:t[e].monthStr="April";break;case 5:t[e].monthStr="May";break;case 6:t[e].monthStr="June";break;case 7:t[e].monthStr="July";break;case 8:t[e].monthStr="August";break;case 9:t[e].monthStr="September";break;case 10:t[e].monthStr="October";break;case 11:t[e].monthStr="November";break;case 12:t[e].monthStr="December"}}return t}function d(t){var e=Object(a.useState)([]),r=Object(i.a)(e,2),n=r[0],c=r[1],o=Object(a.useState)([]),s=Object(i.a)(o,2),d=s[0],f=s[1],m=Object(a.useState)(!0),b=Object(i.a)(m,2),h=b[0],g=b[1];function x(){return(x=Object(l.a)(u.a.mark((function e(){var r,a,n,o,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return r=e.sent,e.next=5,r.json();case 5:return a=e.sent,e.next=8,a.monthlyVariance;case 8:return n=e.sent,e.next=11,p(n);case 11:return o=e.sent,e.next=14,a.baseTemperature;case 14:i=e.sent,c(o),f(i),g(!1);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){x.apply(this,arguments)}()}),[]),[n,d,h]}var f=r(0);function m(t,e,r){return t<=r[0]?e.color1:t>r[0]&&t<=r[1]?e.color2:t>r[1]&&t<=r[2]?e.color3:t>r[2]&&t<=r[3]?e.color4:t>r[3]&&t<=r[4]?e.color5:t>r[4]&&t<=r[5]?e.color6:t>r[5]&&t<=r[6]?e.color7:t>r[6]&&t<=r[7]?e.color8:t>r[7]&&t<=r[8]?e.color9:t>r[8]&&t<=r[9]?e.color10:e.color11}function b(t,e,r,a,n){var c=f.i(r.current),o=function(t){return t.year},i=function(t){return t.month-1},s=function(t){return Math.round(10*(e+t.variance))/10},u=100,l=100,p=a-l-60,d=n-u-150,b=f.f(t,o),h=f.e(t,o),g=h-b,x=f.f(t,i),y=f.e(t,i),v=p/g,k=d/12,S=p/2,j=-d/2,O=a/2,w="".concat(b," - ").concat(h,": base temperature ").concat(e,"\u2103"),M=f.f(t,s),A=f.e(t,s),E=function(t,e,r){for(var a=[],n=t,c=0;c<e;c++)n+=r,a.push(Math.round(10*n)/10);return a}(M,11,Math.round((A-M)/11*10)/10),z={color1:"rgb(49, 54, 149)",color2:"rgb(69, 117, 180)",color3:"rgb(116, 173, 209)",color4:"rgb(171, 217, 233)",color5:"rgb(224, 243, 248)",color6:"rgb(255, 255, 191)",color7:"rgb(254, 224, 144)",color8:"rgb(253, 174, 97)",color9:"rgb(244, 109, 67)",color10:"rgb(215, 48, 39)",color11:"rgb(165, 0, 38)"},F=c.append("g").attr("transform","translate(".concat(l,", ").concat(u,")")),J=f.h().domain([b-1,h]).range([0,p]),C=f.h().domain([x,y]).range([0,d]),D=f.a(J).tickFormat((function(t){return f.j("%Y")(new Date(0).setFullYear(t))})).tickSizeOuter(0),N=f.b(C).tickFormat((function(t){return f.j("%B")(new Date(0).setMonth(t))}));F.append("g").attr("id","x-axis").attr("transform","translate(0, ".concat(d+k/2,")")).call(D).append("text").attr("id","xAxis-label").attr("x",S).attr("y",40).text("Years"),F.append("g").attr("id","y-axis").call(N).selectAll(".domain").remove().append("text").attr("id","yAxis-label").attr("x",j).attr("y",-70).attr("transform","rotate(-90)").text("Months");var Y=c.append("g").attr("text-anchor","middle");Y.append("text").attr("id","title").attr("x",O).attr("y",40).text("Monthly Global Land-Surface Temperature"),Y.append("text").attr("id","description").attr("x",O).attr("y",62).text(w);var B=f.i("body").append("div").attr("id","tooltip").style("opacity",0);F.selectAll("rect").data(t).enter().append("rect").attr("x",(function(t){return J(o(t))})).attr("y",(function(t){return C(i(t)-.5)})).attr("width",v).attr("height",k).attr("fill",(function(t){return m(s(t),z,E)})).attr("class","cell").attr("data-year",(function(t){return o(t)})).attr("data-month",(function(t){return i(t)})).attr("data-temp",(function(t){return s(t)})).on("mouseover",(function(t){B.transition().duration(200).style("opacity",.9),B.html("".concat(o(t)," - ").concat(function(t){return t.monthStr}(t),"\n                    </br>").concat(s(t),"\xb0C\n                    </br>").concat(function(t){return Math.round(10*t.variance)/10}(t),"\xb0C")).style("left",f.c.pageX+"px").style("top",f.c.pageY+"px").attr("data-year",o(t))})).on("mouseout",(function(t){B.transition().duration(500).style("opacity",0)}));var R=c.append("g").attr("id","legend").attr("transform","translate(".concat(l,", ").concat(u+80,")")),T=f.g().domain([M,A]).range([0,300]),V=f.a(T).tickValues(E).tickFormat(f.d(".1f")).tickSizeOuter(0);R.append("g").attr("id","legend-x-axis").attr("transform","translate(0, ".concat(d+10,")")).call(V),R.selectAll("rect").data(E).enter().append("rect").attr("class","legend-rect").attr("x",(function(t,e){return e*(300/11)})).attr("transform","translate(0, ".concat(d-10,")")).attr("width",300/11).attr("height",20).attr("fill",(function(t){return m(t,z,E)}))}function h(){var t=d("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json"),e=Object(i.a)(t,3),r=e[0],c=e[1],o=e[2],s=Object(a.useRef)();return Object(a.useEffect)((function(){0!==r.length&&b(r,c,s,1260,600)}),[o]),n.a.createElement("div",{className:"app"},n.a.createElement("div",{className:"viz-container"},n.a.createElement("svg",{className:"graph",ref:s,viewBox:"0 0 ".concat(1260," ").concat(600)})))}o.a.render(n.a.createElement(h,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.4ceac9ef.chunk.js.map