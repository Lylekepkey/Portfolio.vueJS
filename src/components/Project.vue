<template>
            <!-- <div id="text-card" > -->
            <!-- <h3>Project Links</h3> -->
            <!-- <a href="https://fastidious-liger-75b1bb.netlify.app" target="_blank"><p>My first website created</p></a> -->
            <!-- <iframe src="https://fastidious-liger-75b1bb.netlify.app" /> -->
            <!-- <a href="https://extreme-age-gap.netlify.app" target="_blank"><p>Class project</p></a> -->
            <!-- <iframe src="https://extreme-age-gap.netlify.app" /> -->
            <!-- <a href="https://ubiquitous-empanada-5d35ea.netlify.app/" target="_blank"><p>To Do List</p></a> -->
            <!-- <iframe src="https://ubiquitous-empanada-5d35ea.netlify.app/" /> -->
            <!-- <a href="https://tangerine-jalebi-4f740d.netlify.app/" target="_blank"><p>Calculator</p></a> -->
            <!-- <iframe src="https://tangerine-jalebi-4f740d.netlify.app/" /> -->
            <!-- <a href="https://starlit-peony-428281.netlify.app/" target="_blank"><p>Temperature converter</p></a> -->
            <!-- <iframe src="https://starlit-peony-428281.netlify.app/" /> -->
            <!-- <a href="https://fascinating-profiterole-75d2d2.netlify.app/" target="_blank"><p>BMI converter</p></a> -->
            <!-- <iframe src="https://fascinating-profiterole-75d2d2.netlify.app/" /> -->
            <!-- </div> -->
            <div class="container" id="exp">
        <div class="contain">
    <div class="card" v-for="project of projects" :key="project.id" :project="project">
        <div class="card-border"></div>
        <div class="card-content" >
            <div id="text-card" >
            <h3>Project Links</h3>
            <a :href="project.netlify" target="_blank"><p>{{ project.name }}</p></a>
            <iframe :src="project.netlify" />
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProjects");
  },


};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 50px;
}
.contain {
  background: #d9d9d9;
  border-radius: 68px;
  width: 605px;
  height: 1200px;
  margin-right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
