(this["webpackJsonpreact-18"]=this["webpackJsonpreact-18"]||[]).push([[0],[,,,,function(e,t,a){e.exports={btn:"FeedbackOptions_btn__1jATa"}},function(e,t,a){e.exports={statistic__box:"Statistic_statistic__box__1Rs26"}},function(e,t,a){e.exports={section__box:"Section_section__box__1W5e5"}},function(e,t,a){e.exports={notification__box:"Notification_notification__box__3aF1T"}},function(e,t,a){e.exports=a(15)},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),o=a.n(r),i=a(1),l=a(4),u=a.n(l),s=function(e){var t=e.options,a=e.onLeaveFeedback;return c.a.createElement(c.a.Fragment,null,t.map((function(e){return c.a.createElement("button",{className:u.a.btn,key:e,name:e,onClick:a},e.charAt(0).toUpperCase(),e.slice(1,e.length))})))},b=a(5),m=a.n(b),_=function(e){var t=e.good,a=e.bad,n=e.neutral,r=e.totalFeedback,o=e.positivePercentage;return c.a.createElement("div",{className:m.a.statistic__box},c.a.createElement("p",null,"Good: ",t),c.a.createElement("p",null,"Neutral: ",n),c.a.createElement("p",null,"Bad: ",a),c.a.createElement("p",null,"Total: ",r),c.a.createElement("p",null,"Positive Feedback: ",o," %"))},d=a(6),f=a.n(d),p=function(e){var t=e.title,a=e.children;return c.a.createElement("div",{className:f.a.section__box},c.a.createElement("h2",null,t),a)},E=a(7),v=a.n(E),g=function(e){var t=e.message;return c.a.createElement("div",{className:v.a.notification__box},c.a.createElement("h4",null,t))};function k(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(0),l=Object(i.a)(o,2),u=l[0],b=l[1],m=Object(n.useState)(0),d=Object(i.a)(m,2),f=d[0],E=d[1],v=function(){return a+u+f};return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,{title:"Please leave feedback"},c.a.createElement(s,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e.target.getAttribute("name")){case"good":r((function(e){return e+1}));break;case"neutral":b((function(e){return e+1}));break;case"bad":E((function(e){return e+1}));break;default:return}}})),v()?c.a.createElement(p,{title:"Statistic"},c.a.createElement(_,{good:a,neutral:u,bad:f,positivePercentage:function(){var e=v();return Math.floor(a/e*100)}(),totalFeedback:v()})):c.a.createElement(g,{message:"No feedback given"}))}a(13),a(14);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.2aa88735.chunk.js.map