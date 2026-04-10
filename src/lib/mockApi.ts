export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface Career {
  title: string;
  description: string;
  growthPercent: number;
}

export interface RelatedConcept {
  title: string;
  icon: string; // lucide icon name
  relationship: string; // "prerequisite" | "advanced" | "related"
}

export interface ConceptResult {
  concept: string;
  foundation: string;
  industryImpact: string[];
  visualization: string;
  imageUrl: string;
  imageAttribution: string;
  relatedConcepts: RelatedConcept[];
  careers: Career[];
  quiz: QuizQuestion[];
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
      "Imagine tying a ball to a string and spinning it above your head. The string pulls the ball inward — that's centripetal force in action! Now imagine the string breaks: the ball flies off tangentially, not outward. Try this: fill a bucket with water, swing it in a vertical circle. The water stays in even upside down!",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80",
    imageAttribution: "Photo by Alexandre Debiève on Unsplash",
    relatedConcepts: [
      { title: "Newton's Laws of Motion", icon: "orbit", relationship: "prerequisite" },
      { title: "Angular Momentum", icon: "rotate-cw", relationship: "advanced" },
      { title: "Gravitational Force", icon: "globe", relationship: "related" },
    ],
    careers: [
      { title: "Aerospace Engineer", description: "Designs spacecraft trajectories and orbital mechanics using centripetal force calculations.", growthPercent: 78 },
      { title: "Mechanical Engineer", description: "Develops rotating machinery like turbines and centrifuges requiring precise force balance.", growthPercent: 65 },
      { title: "Theme Park Engineer", description: "Designs thrilling yet safe roller coaster loops using centripetal force principles.", growthPercent: 42 },
    ],
    quiz: [
      { question: "What direction does centripetal force act?", options: ["Outward from center", "Inward toward center", "Tangent to the path", "Downward always"], correctIndex: 1 },
      { question: "If the string breaks while spinning a ball, which way does the ball go?", options: ["Outward (radially)", "Tangentially (straight line)", "It stops immediately", "It spirals inward"], correctIndex: 1 },
      { question: "Which device uses centripetal force to separate substances?", options: ["Telescope", "Centrifuge", "Barometer", "Voltmeter"], correctIndex: 1 },
    ],
  },
  "quantum entanglement": {
    concept: "Quantum Entanglement",
    foundation:
      "Quantum entanglement is a phenomenon where two particles become linked so that measuring one instantly determines the state of the other, regardless of distance. Einstein called it 'spooky action at a distance.'",
    industryImpact: [
      "🔒 Quantum Key Distribution (QKD) uses entanglement to create theoretically unhackable encryption.",
      "💻 Quantum computers leverage entangled qubits to solve problems exponentially faster.",
      "📡 Future quantum internet could use entanglement for instantaneous, secure data transmission.",
      "🔬 Medical imaging advances use entangled photons for higher-resolution, lower-radiation scans.",
    ],
    visualization:
      "What if you had two magic coins? You flip one in New York and get heads — instantly, the other coin in Tokyo shows tails. Every. Single. Time. No signal travels between them; they just 'know.' Try this analogy: write 'H' on one card and 'T' on another, shuffle them face-down into two envelopes. Open one — you instantly know the other!",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=900&q=80",
    imageAttribution: "Photo by Dan Cristian Pădureț on Unsplash",
    relatedConcepts: [
      { title: "Superposition", icon: "layers", relationship: "prerequisite" },
      { title: "Quantum Computing", icon: "cpu", relationship: "advanced" },
      { title: "Wave-Particle Duality", icon: "waves", relationship: "related" },
    ],
    careers: [
      { title: "Quantum Software Engineer", description: "Develops algorithms for quantum computers leveraging entanglement for exponential speedups.", growthPercent: 92 },
      { title: "Quantum Cryptographer", description: "Designs unhackable communication protocols using quantum entanglement properties.", growthPercent: 88 },
      { title: "Research Physicist", description: "Investigates fundamental quantum phenomena and pushes the boundaries of our understanding.", growthPercent: 55 },
    ],
    quiz: [
      { question: "What did Einstein call quantum entanglement?", options: ["Quantum magic", "Spooky action at a distance", "The uncertainty principle", "Wave collapse theory"], correctIndex: 1 },
      { question: "What is a practical application of entanglement?", options: ["Solar panels", "Quantum Key Distribution", "GPS satellites", "Nuclear reactors"], correctIndex: 1 },
      { question: "What happens when you measure one entangled particle?", options: ["Nothing happens to the other", "The other's state is instantly determined", "Both particles disappear", "They become unentangled permanently"], correctIndex: 1 },
    ],
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
      "What if you could eat sunlight? That's basically what plants do! Try this at home: take two identical plants. Put one in sunlight and one in a dark closet. After a week, the sun-plant thrives while the dark-plant wilts. Now, place Elodea in a glass of water under bright light — you'll see tiny oxygen bubbles rising!",
    imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80",
    imageAttribution: "Photo by Chris Abney on Unsplash",
    relatedConcepts: [
      { title: "Cellular Respiration", icon: "heart-pulse", relationship: "related" },
      { title: "Light Spectrum", icon: "sun", relationship: "prerequisite" },
      { title: "Carbon Cycle", icon: "recycle", relationship: "advanced" },
    ],
    careers: [
      { title: "Plant Biologist", description: "Studies photosynthetic pathways to engineer more efficient crop varieties.", growthPercent: 60 },
      { title: "Renewable Energy Scientist", description: "Develops artificial photosynthesis systems for sustainable fuel production.", growthPercent: 85 },
      { title: "Environmental Engineer", description: "Designs carbon capture systems inspired by natural photosynthetic processes.", growthPercent: 72 },
    ],
    quiz: [
      { question: "What are the inputs of photosynthesis?", options: ["Glucose and oxygen", "Sunlight, water, and CO₂", "Nitrogen and hydrogen", "ATP and NADPH"], correctIndex: 1 },
      { question: "Where does photosynthesis primarily occur in plant cells?", options: ["Mitochondria", "Nucleus", "Chloroplasts", "Cell membrane"], correctIndex: 2 },
      { question: "What gas is released as a byproduct of photosynthesis?", options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"], correctIndex: 2 },
    ],
  },
  "neural networks": {
    concept: "Neural Networks",
    foundation:
      "Neural networks are computing systems inspired by biological brains, made of layers of interconnected nodes that learn patterns from data. They're the backbone of modern AI and deep learning.",
    industryImpact: [
      "🤖 Self-driving cars use convolutional neural networks to detect pedestrians, signs, and lane markings.",
      "🏥 Medical AI diagnoses diseases from X-rays and MRIs with accuracy rivaling expert radiologists.",
      "🎨 Generative AI uses neural networks to create art, music, and text from simple prompts.",
      "🗣️ Voice assistants rely on recurrent neural networks for speech recognition and synthesis.",
    ],
    visualization:
      "Imagine training a puppy. Each time it sits on command, you give a treat (positive reinforcement). Neural networks learn the same way! Each 'neuron' passes a signal forward, and when the network gets the right answer, the connections strengthen. Show a friend 100 photos of cats and dogs — they learn patterns. A neural network does exactly this, but with millions of images!",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80",
    imageAttribution: "Photo by Steve Johnson on Unsplash",
    relatedConcepts: [
      { title: "Linear Algebra", icon: "grid-3x3", relationship: "prerequisite" },
      { title: "Deep Learning", icon: "brain", relationship: "advanced" },
      { title: "Machine Learning", icon: "trending-up", relationship: "related" },
    ],
    careers: [
      { title: "Machine Learning Engineer", description: "Builds and deploys neural network models for production AI systems.", growthPercent: 95 },
      { title: "Computer Vision Engineer", description: "Develops image recognition systems using convolutional neural networks.", growthPercent: 88 },
      { title: "NLP Scientist", description: "Creates language understanding models using transformer neural architectures.", growthPercent: 90 },
    ],
    quiz: [
      { question: "What biological structure inspired neural networks?", options: ["DNA helix", "The human brain", "Cell membranes", "Muscle fibers"], correctIndex: 1 },
      { question: "What type of neural network is best for image recognition?", options: ["Recurrent (RNN)", "Convolutional (CNN)", "Generative (GAN)", "Feedforward"], correctIndex: 1 },
      { question: "How do neural networks 'learn'?", options: ["Manual programming", "Random guessing", "Adjusting connection weights from data", "Copying human decisions"], correctIndex: 2 },
    ],
  },
  crispr: {
    concept: "CRISPR Gene Editing",
    foundation:
      "CRISPR is a molecular tool that allows scientists to precisely cut and edit DNA sequences in living organisms. Think of it as a biological 'find and replace' function for genetic code.",
    industryImpact: [
      "🧬 Sickle cell disease treatments using CRISPR have already been approved for clinical use.",
      "🌽 Drought-resistant and nutrient-enhanced crops are being developed with CRISPR editing.",
      "🦠 Rapid diagnostic tests for viruses use CRISPR-based detection.",
      "🐷 Xenotransplantation research uses CRISPR to make pig organs compatible with humans.",
    ],
    visualization:
      "Imagine your DNA is a massive book with 3 billion letters. Somewhere in chapter 7, there's a typo causing a disease. CRISPR is like a super-precise editor that can find that exact typo, cut it out, and paste in the correct letter. Try this: open a long document, use Ctrl+F to find a word, then replace it. CRISPR does this at the molecular level!",
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=900&q=80",
    imageAttribution: "Photo by National Cancer Institute on Unsplash",
    relatedConcepts: [
      { title: "DNA Structure", icon: "dna", relationship: "prerequisite" },
      { title: "Gene Therapy", icon: "syringe", relationship: "advanced" },
      { title: "Molecular Biology", icon: "microscope", relationship: "related" },
    ],
    careers: [
      { title: "Genetic Engineer", description: "Designs CRISPR experiments to modify genes for therapeutic and agricultural applications.", growthPercent: 90 },
      { title: "Biotech Researcher", description: "Develops new CRISPR delivery methods and expands editing capabilities.", growthPercent: 82 },
      { title: "Clinical Geneticist", description: "Applies gene editing knowledge to diagnose and plan treatments for genetic disorders.", growthPercent: 70 },
    ],
    quiz: [
      { question: "What does CRISPR stand for in principle?", options: ["A type of microscope", "Clustered Regularly Interspaced Short Palindromic Repeats", "A computer algorithm", "A chemical compound"], correctIndex: 1 },
      { question: "What molecule guides CRISPR to the right location?", options: ["DNA polymerase", "Guide RNA", "Ribosome", "tRNA"], correctIndex: 1 },
      { question: "Which disease has an approved CRISPR treatment?", options: ["Common cold", "Sickle cell disease", "Diabetes Type 2", "Alzheimer's"], correctIndex: 1 },
    ],
  },
  "bernoulli's principle": {
    concept: "Bernoulli's Principle",
    foundation:
      "Bernoulli's principle states that as the speed of a fluid increases, its pressure decreases. This fundamental relationship between velocity and pressure explains how airplane wings generate lift.",
    industryImpact: [
      "✈️ Aircraft wing design (airfoils) relies directly on Bernoulli's principle to generate lift.",
      "⛽ Carburetors in engines use the Venturi effect (a Bernoulli application) to mix fuel and air.",
      "🏥 Medical atomizers and nebulizers spray fine medication mists using this principle.",
      "⚽ The curve of a soccer ball (Magnus effect) is a rotating-fluid extension of Bernoulli's work.",
    ],
    visualization:
      "Hold a sheet of paper by its edge and blow over the top surface. The paper rises! Fast air above = low pressure, while still air below = high pressure. The paper lifts toward the low-pressure zone. That's Bernoulli in action — and it's exactly how airplane wings work, just at a much larger scale!",
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=900&q=80",
    imageAttribution: "Photo by John McArthur on Unsplash",
    relatedConcepts: [
      { title: "Fluid Dynamics", icon: "droplets", relationship: "prerequisite" },
      { title: "Aerodynamics", icon: "wind", relationship: "advanced" },
      { title: "Pressure & Forces", icon: "gauge", relationship: "related" },
    ],
    careers: [
      { title: "Aeronautical Engineer", description: "Designs aircraft wings and fuselages using Bernoulli's principle for optimal lift.", growthPercent: 75 },
      { title: "HVAC Engineer", description: "Applies fluid dynamics principles to design efficient heating, ventilation, and cooling systems.", growthPercent: 58 },
      { title: "Biomedical Engineer", description: "Uses Bernoulli's principle in designing medical devices like ventilators and blood flow monitors.", growthPercent: 80 },
    ],
    quiz: [
      { question: "According to Bernoulli's principle, when fluid speed increases, what happens to pressure?", options: ["Pressure increases", "Pressure decreases", "Pressure stays the same", "Pressure oscillates"], correctIndex: 1 },
      { question: "Which real-world technology directly relies on Bernoulli's principle?", options: ["Solar panels", "Airplane wings", "Nuclear reactors", "Telescopes"], correctIndex: 1 },
      { question: "What happens when you blow over a sheet of paper?", options: ["It falls down", "It lifts up", "It stays flat", "It curls sideways"], correctIndex: 1 },
    ],
  },
};

const fallbackConcepts = [
  "centripetal force",
  "quantum entanglement",
  "photosynthesis",
  "neural networks",
  "crispr",
  "bernoulli's principle",
];

function generateGenericResult(query: string): ConceptResult {
  const cleaned = query.trim();
  const capitalized = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  return {
    concept: capitalized,
    foundation: `${capitalized} is a fundamental concept in STEM that describes how specific principles interact in the natural or engineered world. Understanding it opens doors to innovation and deeper scientific literacy.`,
    industryImpact: [
      "🔬 Active research in top universities and R&D labs worldwide.",
      "🏗️ Engineers apply this concept to build more efficient and sustainable systems.",
      "💡 Startups are leveraging this principle for next-generation technologies.",
      "📚 A foundational topic in STEM education curricula globally.",
    ],
    visualization: `What if ${cleaned} didn't exist? Imagine a world without this principle — many technologies we rely on daily would simply not function. Try researching a simple demonstration related to ${cleaned}. The most profound concepts can often be observed with everyday materials!`,
    imageUrl: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=900&q=80",
    imageAttribution: "Photo by Hal Gatewood on Unsplash",
    relatedConcepts: [
      { title: "Scientific Method", icon: "flask-conical", relationship: "prerequisite" },
      { title: "Applied Mathematics", icon: "calculator", relationship: "related" },
      { title: "Systems Thinking", icon: "network", relationship: "advanced" },
    ],
    careers: [
      { title: "Research Scientist", description: `Investigates ${cleaned} and related phenomena to advance human understanding.`, growthPercent: 65 },
      { title: "STEM Educator", description: `Teaches ${cleaned} to the next generation of scientists and engineers.`, growthPercent: 50 },
    ],
    quiz: [
      { question: `Which field is ${capitalized} most closely associated with?`, options: ["Literature", "STEM", "Culinary Arts", "Law"], correctIndex: 1 },
      { question: "What is the first step in understanding any scientific concept?", options: ["Memorize formulas", "Ask questions and observe", "Skip to applications", "Read only textbooks"], correctIndex: 1 },
      { question: "Why is hands-on experimentation valuable?", options: ["It's not valuable", "It builds intuition and deeper understanding", "It replaces theory", "It's only for kids"], correctIndex: 1 },
    ],
  };
}

export async function fetchConcept(query: string): Promise<ConceptResult> {
  await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 500));
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
