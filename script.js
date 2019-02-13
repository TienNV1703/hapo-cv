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
        </div>
`
$(document).ready(function(){

  $("#add-skill1").click(function(){
    $(".graphic1").ready(function(){
      $("#btn-add1").before(pro_skill)
    })
  });

  $("#add_skill2").click(function(){
    $(".graphic2").ready(function(){
      $("#langlast").after(per_skill)
    })
  });

  $("#a-w-e1").click(function(){
    $("#main3-left1").ready(function(){
      $("#w-e-last1").after(w_e)
    })
  });

  $("#a-w-e2").click(function(){
    $("#main3-left2").ready(function(){
      $("#w-e-last2").after(w_e)
    })
  });

  let j=0;
  let height =["200px", "200px", "200px", "200px", "400px", "200px", "200px", "200px", "400px", "200px"];
  let width_inside = [""]
  $(".Add_project").click(function(){
    j++;
    $(".main4-cnt").ready(function(){
      for (var i = 0; i < j; i++) {
        if (i%10 ==0) {
          $("")
        }
      }
    })
  })
})
