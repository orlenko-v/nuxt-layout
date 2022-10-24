<template>
  <footer class="bg-[#262A3C] text-white">
    <div :class="$style.logo">
      <Logo class="w-[186px] h-[40px]" />
    </div>
    <AccordeonComponent class="md:hidden" :class="$style.accordeon">
      <template #title>
        <h1>{{ categories.title }}</h1>
      </template>
      <template #content>
        <div class="mt-[15px] first:mt-5 text-[#FFFFFFCC] transition-colors ease-linear duration-300 hover:text-[#FF3E3D]"
             v-for="{ title, link } in categories.items"
             :key="title"
        >
          <a :href="`${baseURL}${link}`">{{ title }}</a>
        </div>
      </template>
    </AccordeonComponent>
    <AccordeonComponent class="md:hidden" :class="$style.accordeon">
      <template #title>
        <h1>{{ info.title }}</h1>
      </template>
      <template #content>
        <div class="mt-[15px] first:mt-5 text-[#FFFFFFCC] transition-colors ease-linear duration-300 hover:text-[#FF3E3D]"
             v-for="{ title, link } in info.items"
             :key="title"
        >
          <a :href="`${baseURL}${link}`">{{ title }}</a>
        </div>
      </template>
    </AccordeonComponent>
    <div :class="$style.networking">
      <h1>Присоединяйся к нам</h1>
      <div class="flex mt-[15px]">
        <a class="w-11 h-11 mr-[9px] flex justify-center items-center border border-white transition-opacity ease-linear duration-300 opacity-30 hover:opacity-100" href="https://vk.com/akvahit">
          <LogoVK class="w-6 h-6 fill-white" />
        </a>
        <a class="w-11 h-11 mr-[9px] flex justify-center items-center border border-white transition-opacity ease-linear duration-300 opacity-30 hover:opacity-100" href="https://ok.ru/group/68041243557944/">
          <LogoOK class="w-6 h-6 fill-white" />
        </a>
      </div>
    </div>
    <div :class="$style.subscription">
      <h1>Подписаться на акции</h1>
      <SubmitComponent class="my-[15px]" />
      <p class="text-xs font-[350] text-[#FFFFFF80]">Нажимая "Отправить", я подтверждаю свое согласие на <a class="underline transition-colors ease-linear duration-300 hover:text-[#FF3E3D]" :href="`${baseURL}/politika-konfidentsialnosti`">обработку и хранение моих личных данных</a></p>
    </div>
    <div :class="$style.copyright">
      <p class="text-sm font-bold mb-[9px]">© АкваХит 2013 — 2022</p>
      <p class="text-xs text-[#FFFFFF80]">Вся информация на сайте – собственность интернет-магазина АкваХит. Публикация информации с сайта akvahit.ru без разрешения запрещена. Все права защищены</p>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      baseURL: 'getBaseURL',
    }),
    ...mapGetters('footer', {
      categories: 'getCategories',
      info: 'getInfo',
    }),
  }
}
</script>

<style lang="postcss" module>
h1 {
  @apply text-xl font-bold;
}

footer > div {
  @apply px-[10px] py-[20px];
}

.logo, .accordeon, .networking, .subscription {
  @apply border-b border-[#FFFFFF19];
}

</style>