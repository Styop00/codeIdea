<template>
  <section id="questions">
    <SectionsTitle sectionsTitle="Frequently asked questions" class="mx-10 md:mx-0 my-10 md:mt-0"/>
    <div class="grid md:grid-cols-2">
      <div>
        <ul>
          <template v-for="(question, index) in questions">
            <QuestionItem class="relative"
                          :q=question.text
                          :i=index
                          :active_i=activeIndex
                          @question-emit="showQuestion(index)"
                          :class="{'!bg-white-50': index === activeIndex, 'font-bold': index===activeIndex, 'text-black': index===activeIndex}"
            >
              <template #arrow>
                <img src="@/assets/img/right_arrow.svg"
                     class="md:!inline absolute top-1/2 right-4 -translate-y-1/2"
                     :class="{'!hidden': index===activeIndex}">

                <img src="@/assets/img/down_arrow.svg"
                     class="!w-6 invisible md:hidden absolute top-1/4 -translate-y-1/4 right-4"
                     :class="{'!visible': index===activeIndex}">
              </template>

              <div class="font-normal px-4 relative bottom-0 left-0 md:hidden bg-white-60 py-4"
                   :class="{'hidden': index !== activeIndex}">
                <p class="text-black-150">We specialize in custom web development, mobile app development for iOS and
                  Android, responsive design, e-commerce solutions, and ongoing maintenance and support.</p>
              </div>
            </QuestionItem>
          </template>
        </ul>
      </div>
      <div class="bg-white-30 shadow-small rounded-16px
                        px-7 md:pl-14 pt-10 lg:pb-64 mt-7 md:mt-0 md:relative -top-7 -z-1
                        min-h-590px lg:min-h-472px hidden md:inline">
        <h4 class="font-semibold text-lg text-black-200 mb-10">{{ question }}</h4>
        <p>We specialize in custom web development, mobile app development for iOS and Android, responsive design,
          e-commerce solutions, and ongoing maintenance and support.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionsTitle from "@/components/HomePage/SectionsTitle.vue"
import QuestionItem from "@/components/HomePage/QuestionSection/QuestionItem.vue"
import {ref} from "vue";

const questions = [
  {
    text: "What services does your company offer in web and mobile development?",
  },
  {
    text: "How long does it typically take to develop a website or mobile app?",
  },
  {
    text: "Do you offer post-launch support and maintenance?",
  },
  {
    text: "What is your process for web and mobile development?",
  },
  {
    text: "Can you integrate third-party tools and APIs into my project?",
  }
];

let question = ref(questions[0].text);
let activeIndex = ref(0);
let visible = ref(false);

function showQuestion(index) {
  question.value = questions[index].text;
  activeIndex.value = index;
  visible.value = true;
}
</script>
