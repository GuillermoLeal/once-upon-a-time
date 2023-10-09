<template>
  <main>
    <div class="start-options">
      <select v-model="selectedGenre" class="genre">
        <option v-for="(genre, index) in genres" :key="index" :value="genre">{{ genre }}</option>
      </select>
      <button @click="startGame" class="start">empezar</button>
    </div>
    <div class="messages-box">
      {{ description }}
    </div>
    <div class="game-options">
      <div>
        <button :disabled="isOption1Disabled" @click="doOption1" class="option-1">{{ option1 }}</button>
        <button :disabled="isOption2Disabled" @click="doOption2" class="option-2">{{ option2 }}</button>
      </div>
      <button class="end">
        finalizar partida
      </button>
    </div>
  </main>
</template>

<script>
import { startStory } from './modules/startStory.js';
import { continueStory } from './modules/continueStory.js';
import { finishStory } from './modules/finishStory.js';

export default {
  name: "App",
  data() {
    return {
      phase: 0,
      selectedGenre: "comedia",
      genres: [
        "terror",
        "ciencia ficcion",
        "comedia",
        "Vikingos",
        "misterio",
        "drama",
        "harry potter",
        "aventura",
        "romance",
        "documental",
        "fantasia"
      ],
      title: "",
      description: "",
      isOption1Disabled: true,
      option1: "option1",
      isOption2Disabled: true,
      option2: "option2"
    }
  },
  methods: {
    async startGame() {
      const reply = JSON.parse(await startStory(this.selectedGenre));

      this.title = reply.title;
      this.description = reply.description;
      this.option1 = reply.choices[0].description;
      this.option2 = reply.choices[1].description;
      this.isOption1Disabled = false;
      this.isOption2Disabled = false;
    },
    async doOption1() {
      await this.continueGame(this.description, this.option1);
    },
    async doOption2() {
      await this.continueGame(this.description, this.option2);
    },
    async continueGame(story, choice) {
      const reply = JSON.parse(await continueStory(story, choice));

      this.title = reply.title;
      this.description = reply.description;
      this.option1 = reply.choices[0].description;
      this.option2 = reply.choices[1].description;
    },
    async finishGame(story, choice) {
      const reply = JSON.parse(await finishStory(story, choice));

      this.title = reply.title;
      this.description = reply.description;
      this.isOption1Disabled = true;
      this.isOption2Disabled = true;
    }
  },
}
</script>

<style>
main {
  width: 800px;
  min-height: 600px;
  background-color: #5d5d5d;
}

.messages-box {
  min-height: 200px;
  background-color: #2d2d2d;
  color: white;
  padding: 10px;
  font-size: 1.3rem;
}

.game-options {
  display: flex;
  justify-content: space-between;
}
</style>
