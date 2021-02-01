<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
    </div>
    <div class="actions">
        <base-button link mode="outline" :to="mentorsContactLink">Contact</base-button>
        <base-button link :to="mentorsDetailLink">Details</base-button>
    </div>
  </li>
</template>
<script>


export default {
    props: ['id', 'firstName','lastName', 'rate', 'areas'],
    computed:{
        fullName(){
            return this.firstName+ '' + this.lastName;
        },
        mentorsContactLink(){
            return '/mentors/'+this.id+'/contact';
        },
        mentorsDetailLink(){
            return '/mentors/'+this.id;
        }
    }
}
</script>

<style scoped>

</style>