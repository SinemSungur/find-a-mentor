<template>
  <header>
    <nav>
      <h1><router-link to="/"> Find a Mentor</router-link></h1>
      <ul>
        <li><router-link to="/mentors">Mentors</router-link></li>
        <li><router-link to="/requests">Requests</router-link></li>
      </ul>
    </nav>
  </header>
</template>


<style scoped>
header{
    width: 100%;
    height: 5rem;
    background-color: grey;
}
nav{
    display: flex;
    justify-content: center;
    flex-direction: row;
}
</style>