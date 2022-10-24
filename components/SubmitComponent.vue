<template>
  <form class="flex relative">
    <input class="input py-[10px] pl-[10px] flex-1 bg-[#262A3C] border-b border-[#FFFFFF4D] transition-colors ease-linear duration-300 hover:border-white focus:border-white focus:outline-none" v-model="input" type="text" placeholder="Ваш Email" required />
    <button class="button absolute inset-y-0 right-[10px] transition-opacity ease-linear duration-300 opacity-30 hover:opacity-100" type="submit" @submit.prevent="() => {}">
      <IconSend class="w-[20px] h-[20px] bg-transparent stroke-white" />
    </button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      input: '',
    };
  },
};
</script>
