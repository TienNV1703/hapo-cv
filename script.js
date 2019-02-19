var pro_skill =`<div>
          <svg width="100%" height="100%" viewBox="0 0 100 100" class="donut">
              <circle class="donut-hole" cx="50" cy="50" r="47" fill="#4A0F73"></circle>
              <circle class="donut-ring" cx="50" cy="50" r="47" fill="transparent" stroke="#FFFFFF" stroke-width="3"></circle>

              <circle class="donut-segment" cx="50" cy="50" r="47" fill="transparent" stroke="#F64C71" stroke-width="3" stroke-dasharray="297" stroke-dashoffset="104"></circle>
              <text fill="#ffffff" font-size="14px" font-family="Poppins"
                                 x="40" y="55">65%
                          </text>
                          <p class="nnlt">new skill</p>
          </svg>
        </div>`

var per_skill = `<div class="content-persional">ORTHER LANGUAGE <br>
          <div class="Line_skill">
            <div class="skill21"></div>
          </div>
        </div>`

var w_e = `<div class="experience1 row">
        <div>
          <img src="Polygon.png">
        </div>
        <div class="doted_line"></div>
        <div class="work_experience">
          <p class="margin-p"><b><u>(2010 - 2019)</u> ABC COMPANY</b></p>
          <p class="margin-p">Developer</p>
          <p class="margin-p">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt</p>
        </div>
        </div>`

var ft1 = `<div class="featured" id="backgroud-orange">
          <img src="1111.png">
        </div>`

var ft2 = `<div class="featured" id="backgroud-black">
          <img src="1111.png">
        </div>`

var ft3 = `<div class="featured2" id="backgroud-yellow">
          <img src="2222.png">
        </div>`

var ft4 = `<div class="featured" id="backgroud-blue">
          <img src="1111.png">
        </div>`

var ft5 = `<div class="featured2" id="backgroud-orange-red">
          <img src="2222.png">
        </div>`

var ft6 = `<div class="featured" id="backgroud-red">
          <img src="1111.png">
        </div>`

var ft7 = `<div class="featured" id="backgroud-y-r">
          <img src="1111.png">
        </div>`

var add_slide = `<div class="flex-row">
            <div>
            <div class="avatar-girl">
            </div>
          </div>
  
          <div class="padding-left-35 padding-top-86 text-align-justify">❝Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in❞
          </div>
          </div>`
$(document).ready(function(){

  $("#add-slide").click(function(){
    $(".slideslick").ready(function(){
      $("#abc").before(add_slide)
    })
  });

  $(".slideslick").slick( {
        dots: true,
        infinite: true,
        slidesToScroll:1,
        vertical: true,
        slidesToShow: 1,
        autoplay: true,
        // slidesToScroll: 1,
    });

    // Event add skill 1
  $("#add-skill1").click(function(){
    $(".graphic1").ready(function(){
      $("#btn-add1").before(pro_skill)
    })
  });

  // Event add skill 1
  $("#add_skill2").click(function(){
    $(".graphic2").ready(function(){
      $("#langlast").after(per_skill)
    })
  });

    // Add work experience
  $("#a-w-e1").click(function(){
    $("#main3-left1").ready(function(){
      $("#w-e-last1").after(w_e)
    })
  });

  // add education
  $("#a-w-e2").click(function(){
    $("#main3-left2").ready(function(){
      $("#w-e-last2").before(w_e)
    })
  });

  var j=0;
  $(".Add-project").click(function(){
    j++;
    $(".main4-cnt").ready(function(){
      if (j%10==1) {
        $("#col1").append(ft1);
      };

      if (j%10==2) {
        $("#col2").append(ft2);
      };
      
      if (j%10==3) {
        $("#backgroud-violet").before(ft4);
      };
      
      if (j%10==4) {
        $("#col1").append(ft6);
      };
      
      if (j%10==5) {
        $("#col2").append(ft3);
      };
      
      if (j%10==6) {
        $("#col3").append(ft7);
      };
      
      if (j%10==7) {
        $("#backgroud-violet").before(ft1);
      };
      
      if (j%10==8) {
        $("#col1").append(ft2);
      };
      
      if (j%10==9) {
        $("#col3").append(ft5);
      };
      
      if (j%10==0) {
        $("#backgroud-violet").before(ft2);
      };
    });
  });

  // for (var i = 0; i < 1; i++) {
  //   var text = `<div class="flex-row">
  //         <div>
  //         <div class="avatar-girl">
            
  //         </div>
  //       </div>
  //       <div class="padding-left-35 padding-top-86 text-align-justify">❝Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in❞
  //       </div>
  //       </div>`
  //       $(".slide").append(text);
  // }
      


})