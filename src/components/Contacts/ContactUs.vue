  <template>
    <section id="contact" class="md:py-28 px-5 sm:px-0">
      <div class="flex justify-between flex-col lg:flex-row lg:gap-14">
        <div class="lg:w-1/2 md:border-[3px] border-gray-10 md:px-14 pt-20 md:pb-20">

          <h3 class="text-lg font-bold tracking-widest">CONTACT US</h3>
          <p class="text-[15px] text-black-10 mt-2 mb-5">Thank you for your time. We really appreciate your interest in
            our company.</p>

          <form @submit.prevent="submitForm">
            <!--          <InputField name="Full name*" :model="formData.name"/>-->
            <!--          <InputField name="Email*" :model="formData.email"/>-->
            <!--          <InputField name="Phone number*" :model="formData.phone"/>-->
            <div class="relative parentDiv">
              <input type="text"
                     class="w-full mb-4 placeholder-gray-100 p-4 bg-white-40 rounded-6px"
                     v-model="formData.name"
                     placeholder="Full name*"
              />
              <input type="text"
                     class="w-full mb-4 placeholder-gray-100 p-4 bg-white-40 rounded-6px"
                     v-model="formData.email"
                     placeholder="Email*"
              />
              <input type="text"
                     class="w-full mb-4 placeholder-gray-100 p-4 bg-white-40 rounded-6px"
                     v-model="formData.phone"
                     placeholder="Phone number*"
              />
              <span class="iconsSpan absolute top-4 right-4 invisible">
        <img src="@/assets/img/contacts/userIcon.svg" alt="#" class="inline-block mr-2">
        <img src="@/assets/img/contacts/downArrow.svg" alt="#" class="inline-block">
      </span>
            </div>
            <div class="relative parentDiv">
              <textarea
                class="w-full h-24 mb-9 placeholder-gray-100 p-4 bg-white-40 rounded-6px"
                v-model="formData.message"
                placeholder="Message*"
              ></textarea>
              <span class="iconsSpan absolute top-4 right-4 invisible">
                <img src="@/assets/img/contacts/icon.svg" alt="#">
              </span>
            </div>
            <CheckboxField text="I've read and accepted your">
              <a href="#" class="font-semibold">Privacy Policy</a>
            </CheckboxField>
            <br>
            <CheckboxField text="Send me the latest in tech and inspiring peer case studies"/>
            <Button btnText="send"
                    class="w-full bg-white border-1px border-black hover:bg-black hover:text-white duration-500"/>
          </form>
        </div>

        <div class="lg:w-1/2 text-gray-10 mt-14 mb-8">
          <SectionsTitle sectionsTitle="Hi. Tell us about your project."/>
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
            <Info data="+374 91 30 40 02">
              <img src="@/assets/img/contacts/tel.svg" alt="#"/>
            </Info>

            <Info data="info@codeidea.com">
              <img src="@/assets/img/contacts/blackEmail.svg" alt="#"/>
            </Info>

            <Info>
              <img src="@/assets/img/contacts/address.svg" alt="#"/>
              <span class="ml-2 text-xl">Anastas Mikoyan 64/5, <br> Yerevan, Armenia</span>
            </Info>
          </div>
        </div>
      </div>
    </section>
  </template>

  <script>
  import InputField from "@/components/Contacts/InputField.vue"
  import CheckboxField from "@/components/Contacts/RadioField.vue"
  import Button from "@/components/Button.vue"
  import SectionsTitle from "@/components/HomePage/SectionsTitle.vue"
  import Info from "@/components/Contacts/Info.vue"
  import {$axios} from "@/plugins/axios.js";

  export default {
    name: 'ContactUs',
    components: {InputField, SectionsTitle, Info, CheckboxField, Button},
    data() {
      return {
        formData: {
          name: '',
          email: '',
          phone: '',
          message: '',
          privacyAccepted: false,
          sendUpdates: false
        },
        screenWidth: window.innerWidth
      };
    },
    methods: {
      async submitForm() {
        try {
          const response = await $axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/index.php/wp-json/notification/v1/email/',
            data: JSON.stringify(this.formData),
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.status === 200) {
            console.log('Email sent successfully');
            this.formData = {
              name: '',
              email: '',
              phone: '',
              message: '',
              privacyAccepted: false,
              sendUpdates: false
            };
          } else {
            console.error('Failed to send email');
          }
        } catch (error) {
          console.error('Error sending email:', error);
        }
      }
    }
  }
  </script>
