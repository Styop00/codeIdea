<template>
    <section id="contact" class="md:py-28">
        <div class="flex lg:justify-between flex-col lg:flex-row">
            <div class="md:border-[3px] border-gray-10 lg:w-1/2 md:px-14 pt-20 md:pb-28">
                <h3 class="text-lg font-bold tracking-widest">CONTACT US</h3>
                <p class="text-[15px] text-[#000000DE] mt-2 mb-5">Thank you for your time. We really appreciate your interest in our company.</p>
                <form>
                    <InputField name="Full name*" />
                    <InputField name="Email*" />
                    <InputField name="Phone number*" />
                    <div class="relative">
                        <textarea class="border-b-[1px] w-full h-24 text-[#282929] mb-9">Message *</textarea>
                        <span class="absolute top-0 right-0">
                            <img src="@/assets/img/contacts/icon.svg" >
                        </span>
                    </div>
                    <CheckboxField text="I've read and accepted your"> 
                        <a href="#" class="font-semibold">Privacy Policy</a>
                    </CheckboxField>
                    <br>
                    <CheckboxField text="Send me the latest in tech and inspiring peer case studies" />
                    <Button btn_text="send" class="w-full"/>
                </form>
            </div>

            <div class="text-gray-10 mt-14 mb-8">
                <SectionsTitle sections_title="What comes next?"/>
                <div>
                    <p class="uppercase font-bold tracking-widest">Project Follow-Up</p>
                    <p class="text-sm my-2">You’ll hear from one of these guys within 48 hours</p>
                </div>
                
                <div class="grid grid-cols-2 gap-6 justify-between my-5">

                    <div class="flex items-center">
                        <div class="relative mr-4">
                            <img src="@/assets/img/contacts/pic1.svg">

                            <div class="absolute right-0 md:right-1 -bottom-3 w-[30px] h-[30px] bg-white rounded-full">
                                <img src="@/assets/img/contacts/email.svg">
                            </div>
                        </div>

                        <div>
                            <p>CEO</p>
                            <p class="font-bold">Gevorg</p>
                        </div>
                    </div>

                    <div class="flex items-center ">
                        <div class="relative mr-4">
                            <img src="@/assets/img/contacts/pic2.svg">

                            <div class="absolute right-1 -bottom-3 w-30px h-30px bg-white rounded-full">
                                <img src="@/assets/img/contacts/email.svg">
                            </div>
                        </div>

                        <div>
                            <p>CEO</p>
                            <p class="font-bold">Sergey</p>
                        </div>
                    </div>

                </div>

                <div class="mt-16">
                    <Info data="+374 91 30 40 02">
                        
                    </Info>

                    <Info data="info@codeidea.com">
                        
                    </Info>
                    <Info>
                        

                        <span class="ml-2 text-xl">Anastas Mikoyan 64/5, <br> Yerevan, Armenia</span>
                    </Info>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import InputField from "@/components/HomePage/ContactSection/InputField.vue"
    import CheckboxField from "@/components/HomePage/ContactSection/RadioField.vue"
    import Button from "@/components/Button.vue"
    import SectionsTitle from "@/components/HomePage/SectionsTitle.vue"
    import Info from "@/components/HomePage/ContactSection/Info.vue"
</script>