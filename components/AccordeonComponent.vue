<template>
  <div>
    <div class="flex">
      <slot name="title">
        <h1>Default Header</h1>
      </slot>
      <button class="ml-auto transition ease-in-out" :class="isOpen ? '-rotate-45 stroke-[#FF3E3D]' : 'stroke-white'" @click="toggle">
        <IconPlus class="w-5 h-5 stroke-inherit" />
      </button>
    </div>
    <div v-if="isOpen">
      <slot name="content">
        <p>Default Content</p>
      </slot>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggle () {
        this.isOpen = !this.isOpen;
      },
    },
  };
</script>
