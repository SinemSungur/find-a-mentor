<template>
  <section>
    <base-card>
      <h2>
        {{ fullName }}
      </h2>
      <h3>${{ selectedMentors.rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out Now!</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in selectedMentors.areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedMentors: null,
    };
  },
  computed: {
    fullName() {
      return (
        this.selectedMentors.firstName + ' ' + this.selectedMentors.lastName
      );
    },
    contactLink(){
        return this.$route.params+" "+this.id+'/contact'
    }
  },
  created() {
    this.selectedMentors = this.$store.getters['mentors/mentors'].find(
      (mentor) => mentor.id === this.id
    );
  },
};
</script>