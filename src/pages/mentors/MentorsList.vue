<template>
  <div>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as a Mentor</base-button>
      </div>
      <ul v-if="hasMentors">
        <app-mentor-item
          v-for="mentor in filteredMentors"
          :key="mentor.id"
          :id="mentor.id"
          :firstName="mentor.firstName"
          :lastName="mentor.lastName"
          :rate="mentor.rate"
          :areas="mentor.areas"
        ></app-mentor-item>
      </ul>
      <h3 v-else>No mentors found!</h3>
    </base-card>
  </div>
</template>

<script>
import MentorItem from '../../components/mentors/MentorItem';

export default {
  components: {
    appMentorItem: MentorItem
  },
  computed: {
    filteredMentors() {
      return this.$store.getters['mentors/mentors'];
    },
    hasMentors() {
      return this.$store.getters['mentors/hasMentors'];
    },
  },
};
</script>

<style scoped>
ul {
  width: 100%;
  color: black;
}
li {
  border: 4px solid black;
  list-style: none;
  margin-bottom: 10px;
}
</style>