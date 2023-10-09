import { askChapy } from "./askChapy.js";

export const continueStory = async (story, choice) => {
  const prompt = `Continua la historia "${story}", teniendo en cuenta que hemos elegido la opcion "${choice}". devuelve una pequeña descripción de aproximadamente 20 palabras, yo soy el protagonista que ha elegido esa opcion. Establece 2 decisiones posibles, donde yo tenga que tomar una de ellas, devuelve la respuesta en formato JSON. con esta estructura: title, description, choices. y cada choice con la siguiente estructura: description.`;

  const reply = await askChapy(prompt);
  return reply;
};
