<template>
  <div class="w-full flex flex-col gap-14 md:gap-32">
    <div class="bg-white md:pt-32 md:bg-gradient-to-r from-gray-200 to-gray-300  flex flex-col  gap-14">
      <div class="divContainer">
        <Title title="About us" description="Meet the people of CodeIdea">
          <p><b>CodeIdea</b> isn't just about building software, it's about creating real-world impact through digital
            innovation. Since 2017, we've specialized in crafting advanced web and mobile platforms tailored for the
            sports, booking, and SaaS industries. Our mission is to help organizations scale, streamline operations, and
            lead their markets with future-proof technology.</p>
          <br>
          <p>From the first sketch of user experience to the final push of quality assurance, we turn ideas into
            powerful platforms. With a strong focus on performance, agility, and partnership, we don't just deliver
            products—we become a part of your growth journey.</p>
        </Title>
      </div>
      <Team/>
    </div>
    <OurMission/>
    <Different/>
    <WorkWithUs/>
    <div class="divContainer">
      <video
        controls
        style="border-radius: 12px;width: 100% !important;"
        src="https://files.vidstack.io/sprite-fight/720p.mp4"
        poster="https://files.vidstack.io/sprite-fight/poster.webp"
      ></video>
    </div>
    <Comments class="divContainer"/>
    <JoinUs/>
    <ContactUs class="divContainer"/>
  </div>
</template>

<script setup>
import Team from "./Team.vue";
import OurMission from "./OurMission.vue";
import Title from "@/components/Title.vue";
import Different from "@/components/About/Different.vue";
import WorkWithUs from "@/components/About/WorkWithUs.vue";
import JoinUs from "@/components/About/JoinUs.vue";
import ContactUs from "@/components/Contacts/ContactUs.vue";
import Comments from "@/components/HomePage/CommentSection/Comments.vue";
</script>

<style scoped>
media-player {
  display: block;
  margin: auto;
}
</style>
