import { askChapy } from "./askChapy.js";

export const startStory = async (genre) => {
  const prompt = `Crea una historia con temática ${genre}, con una pequeña descripción de aproximadamente 20 palabras, yo soy uno de los personajes de esa historia. Establece 2 decisiones posibles, donde yo tenga que tomar una de ellas, devuelve la respuesta en formato JSON. con esta estructura: title, description, choices. y cada choice con la siguiente estructura: description.`;

  const reply = await askChapy(prompt);
  return reply;
};
