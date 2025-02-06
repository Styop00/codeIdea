<template>
  <section id="contact" class="md:py-28 px-5 sm:px-0">
    <div class="flex lg:justify-between flex-col lg:flex-row">
      <div class="md:border-[3px] border-gray-10 lg:w-1/2 md:px-14 pt-20 md:pb-28">

        <h3 class="text-lg font-bold tracking-widest">CONTACT US</h3>
        <p class="text-[15px] text-[#000000DE] mt-2 mb-5">Thank you for your time. We really appreciate your interest in
          our company.</p>

        <form>
          <InputField name="Full name*"/>
          <InputField name="Email*"/>
          <InputField name="Phone number*"/>
          <div class="relative">
            <textarea class="border-b-[1px] w-full h-24 text-[#282929] mb-9">Message *</textarea>
            <span class="absolute top-0 right-0">
              <img src="@/assets/img/contacts/icon.svg" alt="#">
            </span>
          </div>
          <CheckboxField text="I've read and accepted your">
            <a href="#" class="font-semibold">Privacy Policy</a>
          </CheckboxField>
          <br>
          <CheckboxField text="Send me the latest in tech and inspiring peer case studies"/>
          <Button btnText="send" class="w-full bg-white shadow-small-20"/>
        </form>
      </div>

      <div class="text-gray-10 mt-14 mb-8 ml-4">
        <SectionsTitle sectionsTitle="What comes next?"/>
        <div>
          <p class="uppercase font-bold tracking-widest">Project Follow-Up</p>
          <p class="text-sm my-2">You’ll hear from one of these guys within 48 hours</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 justify-between my-5">

          <div class="flex items-center">
            <div class="relative mr-4">
              <img src="@/assets/img/contacts/pic1.svg" alt="#">

              <div class="absolute right-0 md:right-1 -bottom-3 w-[30px] h-[30px] bg-white rounded-full">
                <img src="@/assets/img/contacts/email.svg" alt="#">
              </div>
            </div>

            <div>
              <p>CEO</p>
              <p class="font-bold">Gevorg</p>
            </div>
          </div>

          <div class="flex items-center mt-5 md:mt-0">
            <div class="relative mr-4">
              <img src="@/assets/img/contacts/pic2.svg" alt="#">

              <div class="absolute right-1 -bottom-3 w-30px h-30px bg-white rounded-full">
                <img src="@/assets/img/contacts/email.svg" alt="#">
              </div>
            </div>

            <div>
              <p>CEO</p>
              <p class="font-bold">Sergey</p>
            </div>
          </div>

        </div>

        <div class="mt-10 md:mt-16">
          <Info data="+374 91 30 40 02" >
            <img src="@/assets/img/contacts/tel.svg" alt="#" />
          </Info>

          <Info data="info@codeidea.com" >
            <img src="@/assets/img/contacts/blackEmail.svg" alt="#" />
          </Info>

          <Info>
            <img src="@/assets/img/contacts/address.svg" alt="#" />
            <span class="ml-2 text-xl">Anastas Mikoyan 64/5, <br> Yerevan, Armenia</span>
          </Info>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import InputField from "@/components/Contacts/InputField.vue"
import CheckboxField from "@/components/Contacts/RadioField.vue"
import Button from "@/components/Button.vue"
import SectionsTitle from "@/components/HomePage/SectionsTitle.vue"
import Info from "@/components/Contacts/Info.vue"
</script>
