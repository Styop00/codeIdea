<template>
  <div class="flex parent  justify-between gap-1 flex-wrap w-full">
    <div class="flex max-w-[303px] general flex-col gap-[15px]  ">
      <img :src="logo" class="max-w-[128px]">
      <p class="about">
        Since 2015, we’ve helped 80+ fast-growing
              companies in over 20 different industries
              build web, mobile and desktop app that
              make an impact.

      </p>

    </div>

    <div class="flex flex-col gap-[8px] ">
      <p>Services</p>
      <span>Web Development</span>
      <span>Mobile App Development</span>
      <span>Desktop App Development</span>
      <span>Digital Product Development</span>
      <span>Staff Augmentation</span>
      <span>UI/IUX Design</span>
      <span>Cloud Engineering & DevOps</span>
      <span>Generative AI Development</span>
      <span>Legacy App Modernization</span>
      <span>Discovery Workshops</span>
    </div>
    <div class="flex flex-col gap-[8px]">
      <p>technologies</p>
      <span>.NET</span>
      <span>NODE JS</span>
      <span>REACT JS</span>
      <span>REACT NATIVE</span>
      <span>ELECTRON</span>
      <span>AWS</span>
    </div>
    <div class="flex flex-col gap-[8px] ins ">
      <p>INSIGHTS</p>
      <span>Case Studies</span>
      <span>Careers</span>
      <span>FAQ</span>
      <span>BLOG</span>
      <span>Contact</span>
    </div>

  </div>
</template>

<script setup>
import logo from "../../../images/CODEIDEAFOOTER.png"


</script>
<style scoped>
.ins{
  margin-right: 6rem;
}
.about{
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-transform: none;
}
  span{
    color: #FFFFFF;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    white-space: nowrap;


  }
  p{
    color:#FFFFFF;
    font-size: 15px;
    font-weight: 700;
    line-height: 18.29px;
    text-transform: uppercase;
    margin-bottom: 16px;

  }
@media (max-width: 1000px) {
  .parent{
    width: 70%;
    justify-content: space-between;
    gap: 3rem;
    margin-bottom: 2rem;
  }
.general{
  margin-right: 4rem;
}


}
  @media (max-width: 600px) {
    .ins{
      margin-right: 0;
    }
    .general{
      width: 100%;
    }
    .parent{
      flex-direction: column;
    }
    p{
      border-top: 1px solid #FFFFFF;
      padding-top: 1rem;
    }
    .about{
      border:none
    }

  }
</style>
