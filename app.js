const toogler=document.querySelector(".toogler");
const navbar=document.querySelector("nav ul");
const open=document.querySelector("#open");
const close=document.querySelector("#close");
toogler.addEventListener("click",(e)=>{
    navbar.classList.toggle("active");
   

});




const date=document.querySelector(".date");
const dates=new Date().getFullYear();
date.innerHTML=dates;
const toplink =document.querySelector(".top-link");
const scrolllink=document.querySelector(".scroll-link");

window.addEventListener("scroll",()=>{
    const scrollheight=window.pageYOffset;
    if(scrollheight > 500){
        toplink.classList.add("show");
    }else{
        toplink.classList.remove("show");
        
    }
})







  var p=["images/item-1.jpeg", "images/item-2.jpeg",'images/item-3.jpeg','images/item-4.jpeg'];
  var pic=document.querySelector(".images");
  var count=0;

    function next(){
    
        count++;
        if(count >=p.length){
            count=0;
            pic.src=p[count];
        }else{
            pic.src=p[count];
        }
    
    };

function prv(){
    count--;
    if(count <=0){
        count=p.length-1;
        pic.src=p[count];
    }else{
        pic.src=p[count];
    }
}
 const btn=document.querySelectorAll(".btn");
 const item=document.querySelectorAll(".item");
 const skills=document.querySelector(".skills");

 skills.addEventListener("click",(e)=>{
    //console.log(e.target.dataset.id);
    const id=e.target.dataset.id;
    if(id){
        btn.forEach((btns)=>{
            btns.classList.remove("active");
            e.target.classList.add("active");

        })
        item.forEach((items)=>{
            items.classList.remove("active");
        })
        const showitem=document.getElementById(id);
        showitem.classList.add("active");
    }
 });
 var imgdata=[
    
    {
        link:"https://br-biswadeb-raj.github.io/Counter-js/",
        images:"images/post-1.png"
    },
    {
        link:"https://br-biswadeb-raj.github.io/simple_portfoile/",
        images:"images/post-2.png"
    },
    {
        link:"https://br-biswadeb-raj.github.io/Test-project1/",
        images:"images/post-3.png"
    },
    {
        link:"https://br-biswadeb-raj.github.io/qr-code-component-main/",
        images:"images/post-4.png"
    },
    {   link:"",
        images:"images/post-5.jpg"
    },
    {
        link:"",
        images:"images/item-6.jpeg"
    }
]

 const wcontaint =document.querySelector(".w-containt")
const imsgeitem=document.querySelector(".imsge-item");

window.addEventListener("DOMContentLoaded",()=>{
    imgdata.forEach((imagitems)=>{
        const createimg=document.createElement("article");
        createimg.innerHTML=`
       
        <div class="imsge-item">
        <a href="${imagitems.link}"> <img src="${imagitems.images}" alt="item1"></a>
        </div>

        `;
        imsgeitem.appendChild(createimg);
    });
});

var serviceData=[
    {
        
        title:"Email Template",
        create:"",
        describe:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi excepturi accusamus possimus voluptate exercitationem id voluptates delectus qui odit molestiae.",
    },
    {
       
        title:"HTML TO PSD",
        create:"",
        describe:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi excepturi accusamus possimus voluptate exercitationem id voluptates delectus qui odit molestiae."
    },
    {
       
        title:"PORTFOLIO",
        create:"",
        describe:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi excepturi accusamus possimus voluptate exercitationem id voluptates delectus qui odit molestiae."
    },
    {
        
        title:"Mobile Responsive design",
        create:"",
        describe:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi excepturi accusamus possimus voluptate exercitationem id voluptates delectus qui odit molestiae."
    },
    {
        
        title:"CREATE",
        describe:"",
        create:"+"
    }
  
];


const card=document.querySelector(".card");
const cardgroup =document.querySelector(".card-group")
window.addEventListener("DOMContentLoaded",()=>{
    serviceData.forEach((cards)=>{
        const cratecard=document.createElement("div");
        cratecard.innerHTML=`
        <div class="card">
            <div  class="card-title">
                <h1>${cards.title}</h1>

            </div>
            <div class="card-body">
                <p>${cards.describe}</p>
                <span>${cards.create}</span>
            </div>

        </div>

        `;
        cardgroup.appendChild(cratecard);

    })
  
    
})