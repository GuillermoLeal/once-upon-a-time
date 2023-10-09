import { askChapy } from "./askChapy.js";

export const finishStory = async (story, choice) => {
  const prompt = `Establece un final a la historia "${story}", teniendo en cuenta que hemos elegido la opcion "${choice}". devuelve una pequeña descripción de aproximadamente 30 palabras, yo soy el protagonista que ha elegido esa opcion. Devuelve la respuesta en formato JSON. con esta estructura: title, description`;

  const reply = await askChapy(prompt);
  return reply;
};
