export interface ConceptResult {
  concept: string;
  foundation: string;
  industryImpact: string[];
  visualization: string;
}

const conceptDatabase: Record<string, ConceptResult> = {
  "centripetal force": {
    concept: "Centripetal Force",
    foundation:
      "Centripetal force is the inward-directed force that keeps an object moving in a circular path. Without it, objects would fly off in a straight line due to inertia.",
    industryImpact: [
      "🚀 Space stations use centripetal force concepts to simulate artificial gravity for astronauts.",
      "🎢 Roller coaster engineers calculate precise centripetal forces to keep riders safely in loops.",
      "🏎️ Formula 1 car designs optimize downforce to increase centripetal force through turns.",
      "🔬 Centrifuges in labs spin samples at high speeds, using centripetal force to separate blood components.",
    ],
    visualization:
      "Imagine tying a ball to a string and spinning it above your head. The string pulls the ball inward — that's centripetal force in action! Now imagine the string breaks: the ball flies off tangentially, not outward. Try this: fill a bucket with water, swing it in a vertical circle. The water stays in even upside down — centripetal force pushes it toward the bottom of the bucket, overcoming gravity!",
  },
  "quantum entanglement": {
    concept: "Quantum Entanglement",
    foundation:
      "Quantum entanglement is a phenomenon where two particles become linked so that measuring one instantly determines the state of the other, regardless of distance. Einstein called it 'spooky action at a distance.'",
    industryImpact: [
      "🔒 Quantum Key Distribution (QKD) uses entanglement to create theoretically unhackable encryption.",
      "💻 Quantum computers leverage entangled qubits to solve problems exponentially faster than classical machines.",
      "📡 Future quantum internet could use entanglement for instantaneous, secure data transmission.",
      "🔬 Medical imaging advances use entangled photons for higher-resolution, lower-radiation scans.",
    ],
    visualization:
      "What if you had two magic coins? You flip one in New York and get heads — instantly, the other coin in Tokyo shows tails. Every. Single. Time. No signal travels between them; they just 'know.' Now imagine a simple experiment: write 'H' on one card and 'T' on another, shuffle them face-down into two envelopes. Open one — you instantly know the other. Entanglement is like that, but the cards don't 'decide' until you look!",
  },
  photosynthesis: {
    concept: "Photosynthesis",
    foundation:
      "Photosynthesis is the process by which plants convert sunlight, water, and carbon dioxide into glucose and oxygen. It's essentially nature's solar-powered food factory.",
    industryImpact: [
      "☀️ Artificial photosynthesis research aims to create clean fuel from sunlight and water.",
      "🌾 Agricultural biotech optimizes photosynthetic efficiency to increase crop yields by up to 40%.",
      "🏭 Bio-solar cells mimic photosynthesis to generate renewable electricity from algae.",
      "🌍 Carbon capture technologies draw inspiration from photosynthesis to remove CO₂ from the atmosphere.",
    ],
    visualization:
      "What if you could eat sunlight? That's basically what plants do! Try this at home: take two identical plants. Put one in sunlight and one in a dark closet. After a week, the sun-plant thrives while the dark-plant wilts. Now, place a water plant (like Elodea) in a glass of water under bright light — you'll see tiny oxygen bubbles rising. You're watching photosynthesis happen in real time!",
  },
  "neural networks": {
    concept: "Neural Networks",
    foundation:
      "Neural networks are computing systems inspired by biological brains, made of layers of interconnected nodes that learn patterns from data. They're the backbone of modern AI and deep learning.",
    industryImpact: [
      "🤖 Self-driving cars use convolutional neural networks to detect pedestrians, signs, and lane markings.",
      "🏥 Medical AI diagnoses diseases from X-rays and MRIs with accuracy rivaling expert radiologists.",
      "🎨 Generative AI (like DALL-E and Midjourney) uses neural networks to create art from text prompts.",
      "🗣️ Voice assistants (Siri, Alexa) rely on recurrent neural networks for speech recognition.",
    ],
    visualization:
      "Imagine training a puppy. Each time it sits on command, you give a treat (positive reinforcement). Neural networks learn the same way! Each 'neuron' passes a signal forward, and when the network gets the right answer, the connections strengthen. Try this thought experiment: show a friend 100 photos of cats and dogs. They learn patterns — pointy ears, whisker shapes. A neural network does exactly this, but with millions of images and math instead of intuition!",
  },
  "crispr": {
    concept: "CRISPR Gene Editing",
    foundation:
      "CRISPR is a molecular tool that allows scientists to precisely cut and edit DNA sequences in living organisms. Think of it as a biological 'find and replace' function for genetic code.",
    industryImpact: [
      "🧬 Sickle cell disease treatments using CRISPR have already been approved for clinical use.",
      "🌽 Drought-resistant and nutrient-enhanced crops are being developed with CRISPR editing.",
      "🦠 Rapid diagnostic tests for viruses (including COVID) use CRISPR-based detection.",
      "🐷 Xenotransplantation research uses CRISPR to make pig organs compatible with human recipients.",
    ],
    visualization:
      "Imagine your DNA is a massive book with 3 billion letters. Somewhere in chapter 7, there's a typo causing a disease. CRISPR is like a super-precise editor that can find that exact typo, cut it out, and paste in the correct letter. Try this analogy: open a long document, use Ctrl+F to find a specific word, then replace it. CRISPR does this at the molecular level, guided by a custom-designed RNA 'search query'!",
  },
};

const fallbackConcepts = [
  "centripetal force",
  "quantum entanglement",
  "photosynthesis",
  "neural networks",
  "crispr",
];

function generateGenericResult(query: string): ConceptResult {
  const cleaned = query.trim();
  return {
    concept: cleaned.charAt(0).toUpperCase() + cleaned.slice(1),
    foundation: `${cleaned.charAt(0).toUpperCase() + cleaned.slice(1)} is a fundamental concept in STEM that describes how specific principles interact in the natural or engineered world. Understanding it opens doors to innovation and deeper scientific literacy.`,
    industryImpact: [
      "🔬 Active research in top universities and R&D labs worldwide.",
      "🏗️ Engineers apply this concept to build more efficient and sustainable systems.",
      "💡 Startups are leveraging this principle for next-generation technologies.",
      "📚 A foundational topic in STEM education curricula globally.",
    ],
    visualization: `What if ${cleaned} didn't exist? Imagine a world without this principle — many technologies we rely on daily would simply not function. Try researching a simple demonstration or experiment related to ${cleaned}. Often, the most profound concepts can be observed with everyday materials. Curiosity is your greatest tool — keep exploring!`,
  };
}

export async function fetchConcept(query: string): Promise<ConceptResult> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 700));

  const normalized = query.toLowerCase().trim();
  return conceptDatabase[normalized] ?? generateGenericResult(query);
}

export function getRandomConcept(): string {
  return fallbackConcepts[Math.floor(Math.random() * fallbackConcepts.length)];
}

const conceptsOfTheDay = [
  { title: "The Doppler Effect", description: "Why an ambulance siren changes pitch as it passes you — waves compress and stretch with motion." },
  { title: "Entropy", description: "The universe trends toward disorder. Your messy room is just physics in action." },
  { title: "Fibonacci Sequence", description: "Nature's favorite pattern — from sunflower spirals to galaxy arms, math is everywhere." },
  { title: "Superconductivity", description: "At extreme cold, some materials lose all electrical resistance. Imagine lossless power grids!" },
  { title: "CRISPR", description: "Molecular scissors that can edit DNA with surgical precision, rewriting the code of life." },
  { title: "Gravitational Lensing", description: "Massive objects bend light itself, turning galaxies into cosmic magnifying glasses." },
  { title: "Neuroplasticity", description: "Your brain physically rewires itself when you learn — every study session literally changes you." },
];

export function getConceptOfTheDay() {
  return conceptsOfTheDay[Math.floor(Math.random() * conceptsOfTheDay.length)];
}
