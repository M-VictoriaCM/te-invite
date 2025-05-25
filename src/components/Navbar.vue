<script>
import logo from '../assets/img/logo_mono.svg';
export default {
  name: 'NavbarSection',
  data() {
    return {
      logo,
      activeSection: null,
      sections: [
        { id: 'inicio', label: 'Home' },
        { id: 'que-hacemos', label: '¿Qué hacemos?' },
        { id: 'sampleSection', label: 'Modelos' },
        { id: 'contactSection', label: 'Contacto' }
      ]
    };
  },
  mounted() {
    this.observeSections();
  },
  methods: {
    observeSections() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      }, options);

      this.sections.forEach(section => {
        const el = document.getElementById(section.id);
        if (el) {
          observer.observe(el);
        }
      });
    }
  }
};
</script>
<template>
 <header class="header">
    <a href="#" class="logo">
      <img :src="logo" alt="Logo" />
    </a>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
    <ul class="menu">
      <li v-for="section in sections" :key="section.id">
        <RouterLink
          :to="section.id"
          class="link"
          :class="{ active: activeSection === section.id }"
        >
          {{ section.label }}
        </RouterLink>
      </li>
    </ul>
  </header>
</template>
<style scoped>
.link {
  text-decoration: none;
  color: black;
  transition: color 0.3s;
}
.link.active {
  background-color: var(--color_primary);
  color: #f4f4f4;
}
/* header */

.header {
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, .9);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  
}
.nav-logo img{
    width: 90px;
    height: auto;
    display: block;
    margin: .5rem auto;
}
.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: #fff;
}

.header li .link {
  display: block;
  padding: 20px 20px;
  border-right: 1px solid #f4f4f4;
  text-decoration: none;
}
.header .logo {
  display: block;
  float: left;
  font-size: 2em;
  padding: 10px 20px;
  text-decoration: none;
}

/* menu */

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height .2s ease-out;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: #333;
  display: block;
  height: 2px;
  position: relative;
  transition: background .2s ease-out;
  width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #333;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked~.menu {
  max-height: 240px;
}

.header .menu-btn:checked~.menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked~.menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked~.menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked~.menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked~.menu-icon:not(.steps) .navicon:after {
  top: 0;
}

/* 48em = 768px */

@media (min-width: 48em) {
  .header li {
    float: left;
  }

  .header li a {
    padding: 20px 30px;
  }

  .header .menu {
    clear: none;
    float: right;
    max-height: none;
  }

  .header .menu-icon {
    display: none;
  }
}
@media(min-width:1024px){
  .header{
    padding: 0 3rem;
  }
}
</style>