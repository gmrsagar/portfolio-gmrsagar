(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(e,a,t){"use strict";t.r(a);t(65);var n=t(0),s=t.n(n),c=t(10),l=t.n(c),r=(t(72),t(4)),o=t(5),i=t(7),m=t(6),u=t(8),d=(t(74),t(20)),p=t(51),g=t(52),v=t.n(g),h=t(26),E=t.n(h),b=t(53),f=t.n(b),N=t(27),w=t.n(N),k=t(54),j=t.n(k),y=t(28),O=t.n(y),I=t(55),S=t.n(I),x=t(29),M=t.n(x),C=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={navImages:{imgHome:E.a,imgWorks:w.a,imgAbout:O.a,imgContact:M.a}},t.changeNavImage=function(e,a){var n=Object(d.a)({},t.state.navImages);n[e]=a,t.setState({navImages:n})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(p.AutoAffix,null,s.a.createElement("div",{className:"sidebar pl-5 pt-4 d-none d-sm-none d-md-none d-lg-block"},s.a.createElement("div",{className:"App-logo"},"SG"),s.a.createElement("div",{className:"nav"},s.a.createElement("div",{className:"nav-item pb-3 active"},s.a.createElement("a",{href:"#home",onMouseEnter:function(){return e.changeNavImage("imgHome",v.a)},onMouseLeave:function(){return e.changeNavImage("imgHome",E.a)}},s.a.createElement("div",{className:"nav-icon--holder"},s.a.createElement("img",{src:this.state.navImages.imgHome,alt:"Home",className:"nav-icon"})),s.a.createElement("div",{className:"nav-title"},"Home"))),s.a.createElement("div",{className:"nav-item pb-3"},s.a.createElement("a",{href:"#works",onMouseEnter:function(){return e.changeNavImage("imgWorks",f.a)},onMouseLeave:function(){return e.changeNavImage("imgWorks",w.a)}},s.a.createElement("div",{className:"nav-icon--holder"},s.a.createElement("img",{src:this.state.navImages.imgWorks,alt:"",className:"nav-icon"})),s.a.createElement("div",{className:"nav-title"},"My Works"))),s.a.createElement("div",{className:"nav-item pb-3"},s.a.createElement("a",{href:"#about",onMouseEnter:function(){return e.changeNavImage("imgAbout",j.a)},onMouseLeave:function(){return e.changeNavImage("imgAbout",O.a)}},s.a.createElement("div",{className:"nav-icon--holder"},s.a.createElement("img",{src:this.state.navImages.imgAbout,alt:"",className:"nav-icon"})),s.a.createElement("div",{className:"nav-title"},"About Me"))),s.a.createElement("div",{className:"nav-item pb-3"},s.a.createElement("a",{href:"#contact",onMouseEnter:function(){return e.changeNavImage("imgContact",S.a)},onMouseLeave:function(){return e.changeNavImage("imgContact",M.a)}},s.a.createElement("div",{className:"nav-icon--holder"},s.a.createElement("img",{src:this.state.navImages.imgContact,alt:"",className:"nav-icon"})),s.a.createElement("div",{className:"nav-title"},"Contact Me "))))))}}]),a}(n.Component),A=t(30),W=t.n(A),P=t(56),L=t.n(P),D=t(31),H=t.n(D),_=t(57),R=t.n(_),J=t(32),G=t.n(J),T=t(58),z=t.n(T),F=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={socialImages:{github:W.a,linkedin:H.a,twitter:G.a}},t.changeSocialImage=function(e,a){var n=Object(d.a)({},t.state.socialImages);n[e]=a,t.setState({socialImages:n})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"social-icons"},s.a.createElement("a",{href:"https://www.github.com/gmrsagar/",target:"_blank"},s.a.createElement("img",{onMouseEnter:function(){return e.changeSocialImage("github",L.a)},onMouseLeave:function(){return e.changeSocialImage("github",W.a)},src:this.state.socialImages.github,alt:"Github",className:"social-icon"})),s.a.createElement("a",{href:"https://www.linkedin.com/in/gmrsagar/",target:"_blank"},s.a.createElement("img",{onMouseEnter:function(){return e.changeSocialImage("linkedin",R.a)},onMouseLeave:function(){return e.changeSocialImage("linkedin",H.a)},src:this.state.socialImages.linkedin,alt:"LinkedIn",className:"social-icon"})),s.a.createElement("a",{href:"https://www.twitter.com/gmrsagar/",target:"_blank"},s.a.createElement("img",{onMouseEnter:function(){return e.changeSocialImage("twitter",z.a)},onMouseLeave:function(){return e.changeSocialImage("twitter",G.a)},src:this.state.socialImages.twitter,alt:"Twitter",className:"social-icon"})))}}]),a}(n.Component),B=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"main-section front-page img-bg",id:"home"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-7 col-sm-12"},s.a.createElement("div",{className:"code-text"}," < h1 >"),s.a.createElement("h1",null,"Hello World, ",s.a.createElement("br",null)," I am Sagar Ghimire."),s.a.createElement("div",{className:"code-text"}," < /h1 >"),s.a.createElement("p",{className:"description-text"},"I am a Web Developer who helps businesses build digital solutions using JavaScript, php and more.."))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"cta-buttons"},s.a.createElement("div",{className:"button--container"},s.a.createElement("a",{href:"#contact",className:"button button-primary"},"Contact me")),s.a.createElement("div",{className:"button--container"},s.a.createElement("a",{href:"#works",className:"button button-secondary"},"Peek into my Projects"))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"sep-medium"}),s.a.createElement("div",{className:"code-text"},"/*",s.a.createElement("br",null),"\xa0* Find me on social media",s.a.createElement("br",null),"\xa0*/",s.a.createElement("div",{className:"social-icons--holder"},s.a.createElement(F,null))))))}}]),a}(n.Component),Y=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"project-card"},s.a.createElement("div",{className:"row no-gutters"},s.a.createElement("div",{className:"col-sm-12 col-md-4"},s.a.createElement("div",{className:"project-card-image--holder"},s.a.createElement("img",{src:this.props.work.img,class:"project-card-image",alt:""}))),s.a.createElement("div",{className:"col-sm-12 col-md-8"},s.a.createElement("div",{className:"project-card-info"},s.a.createElement("div",{className:"project-card-title"},this.props.work.name),s.a.createElement("div",{className:"project-card-description"},this.props.work.content),s.a.createElement("div",{className:"project-tech--holder"},s.a.createElement("div",{className:"project-tech"},"ReactJS")),s.a.createElement("div",{className:"button-nobg--holder"},s.a.createElement("a",{href:this.props.work.git,className:"button-nobg mr-4"},"View on Github"),s.a.createElement("div",{className:"button-nobg"},"View Story"))))))}}]),a}(n.Component),Q=t(59),q=t(60),K=(t.n(q).a,function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={works:Q},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return s.a.createElement("div",{className:"row"}," ",s.a.createElement("div",{className:"offset-2 d-none d-sm-none d-md-none d-lg-block"}),s.a.createElement("div",{className:"col-sm-11 col-md-12 col-lg-10"},s.a.createElement("div",{className:"main-section",id:"works"},s.a.createElement("h1",null,"My Works"),s.a.createElement("p",{className:"description-text"},"Some of the projects that I work on when I am  ",s.a.createElement("br",null)," not working on the rest of my projects"),s.a.createElement("div",{className:"project-card--holder mt-4"},s.a.createElement("div",{className:"row no-gutters"},s.a.createElement("div",{className:"col-11"},s.a.createElement("div",{className:"row"},this.state.works.map(function(e){return s.a.createElement("div",{className:"col-md-6"},s.a.createElement(Y,{work:e}))}))))))))}}]),a}(n.Component)),V=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"row img-bg about-page"},s.a.createElement("div",{className:"offset-2 d-none d-sm-none d-md-none d-lg-block"}),s.a.createElement("div",{className:"col-sm-11 col-md-12 col-lg-10"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12 col-md-9 col-lg-7"},s.a.createElement("div",{className:"main-section",id:"about"},s.a.createElement("h1",null,"About Me"),s.a.createElement("p",{className:"description-text"},"a software engineer with 2+ years of experience in full stack web development. I help businesses build digital solutions using PHP, JavaScript (React.js) and  MySQL.",s.a.createElement("div",{className:"sep-small"}),s.a.createElement("span",null,"I am passionate about building prolific and scalable products that are valuable to the users. When I am not coding or learning, I love to play the guitar.")),s.a.createElement("div",{className:"sep-large"}),s.a.createElement("div",{className:"skills-section"},s.a.createElement("div",{className:"project-card-title"},"Skills"),s.a.createElement("div",{className:"description-text"},s.a.createElement("div",{className:"sep-small"}),s.a.createElement("span",null,"PHP, Node.js, Laravel, Wordpress, Express.js",s.a.createElement("div",{className:"sep-small"}),"JavaScript, React.js, ES6, jQuery, Bootstrap, HTML5, CSS3",s.a.createElement("div",{className:"sep-small"}),"Git, Docker, Amazon Web Services, REST, MySQL, MongoDB",s.a.createElement("div",{className:"sep-small"}),"Command Line Interface, Linux, OSX and Windows environments,Microservices, OOP, CI, SOLID, Deployment, Unit Testing"))),s.a.createElement("div",{className:"sep-large"}),s.a.createElement("div",{className:"work-section"},s.a.createElement("div",{className:"project-card-title"},"Work Experience"),s.a.createElement("div",{className:"description-text"},s.a.createElement("div",{className:"sep-small"}),s.a.createElement("span",null,s.a.createElement("strong",null,"Web Developer"),s.a.createElement("span",null,s.a.createElement("strong",null,s.a.createElement("a",{class:"company-url",href:"https://www.growcept.com",target:"_blank"},"Growcept Pvt. Ltd")),", Kathmandu, Nepal | April 2017 - June 2018"),s.a.createElement("div",{className:"sep-small"}),"Responsibilities:",s.a.createElement("ul",null,s.a.createElement("li",null,"Developed and customized WordPress themes for ",s.a.createElement("a",{class:"work-url",href:"https://www.themethread.com"},"Growcept\u2019s marketplace")," and ",s.a.createElement("a",{class:"work-url",href:"https://wordpress.org/themes/author/themethread/"},"WordPress.org.")),s.a.createElement("li",null,"Rebuilt ecommerce portals using WooCommerce which increased theme development and performance efficiency by 30%."),s.a.createElement("li",null,"Standardized theme development process which cut down rework by at least 20% and improved scalability."),s.a.createElement("li",null,"Improved user experience for a national sports website ",s.a.createElement("a",{class:"work-url",href:"https://www.wicketnepal.com/"},"(WicketNepal)")," by implementing live commentary system for ongoing matches."),s.a.createElement("li",null,"Worked on training programs for interns to help with setting up tools, docker environments, Linux environments, git, web services and assisting development of WordPress themes."))),s.a.createElement("div",{className:"sep-medium"}),s.a.createElement("span",null,s.a.createElement("strong",null,"Back-End Developer"),s.a.createElement("span",null,s.a.createElement("strong",null,s.a.createElement("a",{class:"company-url",href:"https://www.intellisoftnepal.com/web/",target:"_blank"},"Intellisoft Nepal")),", Kathmandu, Nepal | March 2016 - March 2017"),s.a.createElement("div",{className:"sep-small"}),"Responsibilities:",s.a.createElement("ul",null,s.a.createElement("li",null,"Developed and maintained of software products written in PHP and JavaScript utilizing fundamental OOP principles for enterprise and government organizations."),s.a.createElement("li",null,"Initiated, architected and coded office management system to automate internal tasks which made employee management more efficient by 40%."),s.a.createElement("li",null,"Communicated with clients from project discovery to support phase of the project lifecycle."),s.a.createElement("li",null,"Improved performance and reduced cost on application servers by implementing server offloading to storage solutions like Amazon Web Services S3."),s.a.createElement("li",null,"Applied Agile sprint based development model for releasing new features and fixes for retaining customers."))),s.a.createElement("div",{className:"sep-medium"}),s.a.createElement("span",null,s.a.createElement("strong",null,"Consultation and Side Projects"),s.a.createElement("div",{className:"sep-small"}),s.a.createElement("ul",null,s.a.createElement("li",null,"Developed a musical chord progression generating ",s.a.createElement("a",{class:"work-url",href:"https://github.com/gmrsagar/chord-pro"},"app")," using React.js."),s.a.createElement("li",null,"Contributed in developing and maintaining ",s.a.createElement("a",{class:"work-url",href:"https://github.com/geshan/acpwvs-api"}," Node.js REST API "),"for a list of tech(ish) companies in Australia providing work visa that updates content into Airtable utilizing Continuous Deployment on Heroku."))))))))))}}]),a}(n.Component),U=t(61),X=t.n(U),$=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(s)))).state={name:"",message:"",email:"",sent:!1,buttonText:"Send Message"},t.formSubmit=function(e){e.preventDefault(),t.setState({buttonText:"...sending"});var a={name:t.state.name,email:t.state.email,message:t.state.message};X.a.post("https://nodejs-express-r5t89d8xx.now.sh/api/v1",a).then(function(e){t.setState({sent:!0},t.resetForm())}).catch(function(){})},t.resetForm=function(){t.setState({name:"",message:"",email:""})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"row img-bg contact-page"},s.a.createElement("div",{className:"offset-2 d-none d-sm-none d-md-none d-lg-block"}),s.a.createElement("div",{className:"col-sm-11 col-md-12 col-lg-10"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-12 col-md-9 col-lg-7"},s.a.createElement("div",{className:"main-section",id:"contact"},s.a.createElement("h1",null,"Contact Me"),s.a.createElement("p",{className:"description-text"},"Just say hi at ",s.a.createElement("strong",null,"gmrsagar@gmail.com")," or write me a message below and I'll get back to you as soon as possible."),s.a.createElement("div",{className:"sep-small"}),s.a.createElement("form",{className:"contact-form",onSubmit:function(a){return e.formSubmit(a)}},s.a.createElement("label",{class:"message",htmlFor:"message-input"},"Your Message"),s.a.createElement("textarea",{onChange:function(a){return e.setState({message:a.target.value})},name:"message",class:"message-input",type:"text",placeholder:"Please write your message here",value:this.state.message,required:!0}),s.a.createElement("div",{className:"sep-small"}),s.a.createElement("label",{class:"message-name",htmlFor:"message-name"},"Your Name"),s.a.createElement("input",{onChange:function(a){return e.setState({name:a.target.value})},name:"name",class:"message-name",type:"text",placeholder:"Your Name",value:this.state.name}),s.a.createElement("div",{className:"sep-small"}),s.a.createElement("label",{class:"message-email",htmlFor:"message-email"},"Your Email"),s.a.createElement("input",{onChange:function(a){return e.setState({email:a.target.value})},name:"email",class:"message-email",type:"email",placeholder:"your@email.com",required:!0,value:this.state.email}),s.a.createElement("div",{className:"sep-medium"}),s.a.createElement("div",{className:"button--container"},this.state.sent?s.a.createElement("button",{className:"button button-disabled"},"Message Sent"):s.a.createElement("button",{type:"submit",className:"button button-primary"},this.state.buttonText))))))))}}]),a}(n.Component),Z=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("footer",{className:"d-none d-sm-none d-md-block fixed-bottom"}," ",s.a.createElement("div",{className:"float-right"},"Copyright \xa9 2018, Sagar Ghimire"))}}]),a}(n.Component),ee=function(e){function a(){return Object(r.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"container-fluid p-0"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"d-none d-sm-none d-md-none d-lg-block col-2"},s.a.createElement(C,null)),s.a.createElement("div",{className:"col-sm-11 col-md-12 col-lg-10"},s.a.createElement(B,null))),s.a.createElement(K,null),s.a.createElement(V,null),s.a.createElement($,null),s.a.createElement("div",{className:"sep-large"}))," ",s.a.createElement(Z,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=t(132);l.a.render(s.a.createElement(ae.a,null,s.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},26:function(e,a,t){e.exports=t.p+"static/media/home.3b65622c.svg"},27:function(e,a,t){e.exports=t.p+"static/media/work.a7b677b8.svg"},28:function(e,a,t){e.exports=t.p+"static/media/about.1dde72ed.svg"},29:function(e,a,t){e.exports=t.p+"static/media/contact.91c70440.svg"},30:function(e,a,t){e.exports=t.p+"static/media/git.9fbf7fb4.svg"},31:function(e,a,t){e.exports=t.p+"static/media/linkedin.533b69eb.svg"},32:function(e,a,t){e.exports=t.p+"static/media/twitter.9e5092a2.svg"},52:function(e,a,t){e.exports=t.p+"static/media/home_active.7b2fb7c3.svg"},53:function(e,a,t){e.exports=t.p+"static/media/work_active.42b09442.svg"},54:function(e,a,t){e.exports=t.p+"static/media/about_active.c4b2bd6a.svg"},55:function(e,a,t){e.exports=t.p+"static/media/contact_active.18f245dc.svg"},56:function(e,a,t){e.exports=t.p+"static/media/git_active.9a622255.svg"},57:function(e,a,t){e.exports=t.p+"static/media/linkedin_active.a85f8ccf.svg"},58:function(e,a,t){e.exports=t.p+"static/media/twitter_active.88680423.svg"},59:function(e){e.exports=[{name:"chord-pro",content:"A chord progression generator for guitar built using React.js",link:"",git:"https://github.com/gmrsagar/chord-pro",img:"img/demo.png"},{name:"markdown-previewer",content:"A standard on-the-fly Markdown Previewer",link:"",git:"https://github.com/gmrsagar/markdown-previewer",img:"img/demo.png"}]},60:function(e,a,t){e.exports=t.p+"static/media/hero-illustration.c2564997.svg"},64:function(e,a,t){e.exports=t(130)},72:function(e,a,t){},74:function(e,a,t){}},[[64,2,1]]]);
//# sourceMappingURL=main.b0fd81c4.chunk.js.map