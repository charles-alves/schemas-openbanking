<template>
    <div
      :class="{ 'open': isOpen }"
      class="menu-item"
    >
      <span
        class="menu-item-header"
        @click="toggleSchemas()"
      >
        {{ value.group }}
      </span>

      <ul class="list-unstyled menu-item-schemas">
        <router-link
          v-for="schema in value.schemas"
          :key="schema"
          :to="{ name:'SchemaViewer', params: { name: schema } }"
          tag="li"
        >
          {{ schema }}
        </router-link>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    value: {
      required: true
    }
  },
  computed: {
    isOpen () {
      return this.value.open
    }
  },
  methods: {
    toggleSchemas () {
      this.$emit('toggleMenu', {
        group: this.value.group,
        open: !this.value.open
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  $font-color: #fff;
  $second-level-bg: #13254F;
  $selected-menu-item: #3261CF;
  $actived-page-bg: #708CCF;
  $menu-item-hover-bg: #516697;

  a {
    text-decoration: none !important;
    color: $font-color;
    width: 100%;

    &:hover {
      color: $font-color;
    }
  }
  .open {
    .menu-item-header {
      background-color: $selected-menu-item;
    }

    .menu-item-schemas {
      transform: scaleY(1);
      max-height: 100vh;
    }
  }

  .menu-item-header {
    cursor: pointer;
    display: block;
    padding: 5px;

    &:hover {
      background-color: $menu-item-hover-bg;
    }
  }

  .menu-item-schemas {
    background-color: $second-level-bg;
    max-height: 0;
    width: auto;
    transition: all ease 0.25s;
    transform: scaleY(0);
    transform-origin: top left;

    & li {
      padding: 5px 5px 5px 10px;
      cursor: pointer;

      &:hover {
        background-color: $menu-item-hover-bg;
      }
    }
  }

  .router-link-active {
    background-color: $actived-page-bg;
  }
</style>
