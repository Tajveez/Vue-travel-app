/* eslint-disable prettier/prettier */
<template>
  <div>
    <GoBack />
    <section class="destination">
      <h1>{{ destination.name }}</h1>
      <div class="destination-details">
        <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name" />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="experiences">
      <h2>Top Experiences in {{ destination.name }}</h2>
      <div class="cards" id="experience">
        <div v-for="experience in destination.experiences" class="card" :key="experience.slug">
          <router-link
            :to="{
              name: 'Experience',
              params: {
                experienceSlug: experience.slug
              },
              hash: '#experience'
            }"
          >
            <img :src="require(`@/assets/${experience.image}`)" alt="experience.name" />
            <span class="card__text">{{ experience.name }}</span>
          </router-link>
        </div>
      </div>
    </section>
    <router-view :key="$route.path" />
  </div>
</template>

<script>
import store from "@/store";
import GoBack from "@/components/GoBack";

export default {
  data() {
    return {
      destinations: store.destinations
    };
  },
  components: {
    GoBack
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    destination() {
      return this.destinations.find(
        destination => destination.slug === this.slug
      );
    }
  }
};
</script>

<style scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.experiences {
  padding: 40px 0;
}
.destination-details {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
.cards {
  display: flex;
  justify-content: space-between;
}
.cards img {
  max-height: 200px;
}
.card {
  padding: 0 20px;
  position: relative;
}
.card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}
</style>
