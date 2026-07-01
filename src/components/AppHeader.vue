<template>
  <header class="app-header">
    <a class="brand" href="#home" aria-label="Portfolio home">
      <img class="brand-logo" :src="logoImage" alt="Portfolio">
    </a>
    <nav class="nav-links" aria-label="Primary navigation">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#publication">Publication</a>
      <a href="#gallery">Gallary</a>
    </nav>
  </header>
</template>

<script setup>
import logoImage from '../assets/images/logo-portfolio.png'
</script>
