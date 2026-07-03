// lib/products.ts
export interface Product {
  id: number;
  name: string;
  generic: string;
  category: string;
  composition: string;
  image: string;
  uses: string[];
  dosage?: string;
  benefits: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "AZIBRAL-500",
    generic: "Azithromycin Tablets IP 500 mg",
    category: "Antibiotic",
    composition: "Azithromycin 500 mg",
    image: "/Azibral-500 - 1.png",
    uses: ["Tonsillitis", "Sinusitis", "Pharyngitis"],
    dosage: "5-day therapy as per ICMR–IDSA guidelines",
    benefits: ["Short course therapy", "High tissue penetration", "Low drug interactions"],
  },
  {
    id: 2,
    name: "COFCYILIX-D",
    generic: "Dextromethorphan + Phenylephrine + Chlorpheniramine",
    category: "Cough & Cold",
    composition: "Dextromethorphan HBr 15 mg + Phenylephrine HCl 5 mg + Chlorpheniramine 2 mg",
    image: "/Cofcyilix-D.png",
    uses: ["Dry cough", "Allergic cough", "Cold"],
    benefits: ["Reduces cough frequency", "Relieves nasal congestion", "Dries secretions"],
  },
  {
    id: 3,
    name: "COFCYILIX-LS",
    generic: "Ambroxol + Levosalbutamol + Guaiphenesin",
    category: "Productive Cough",
    composition: "Ambroxol 30 mg + Levosalbutamol 1 mg + Guaiphenesin 50 mg",
    image: "/Cofcyilix-LS.png",
    uses: ["Productive cough", "Wheezing"],
    benefits: ["Expels mucus", "Improves airflow", "Relieves bronchospasm"],
  },
  {
    id: 4,
    name: "LINIBRAL-600",
    generic: "Linezolid Tablets IP 600 mg",
    category: "Antibiotic (MRSA)",
    composition: "Linezolid 600 mg",
    image: "/Linibral-600.png",
    uses: ["MRSA infections", "Diabetic foot ulcer"],
    benefits: ["High tissue penetration", "100% bioavailability", "IV to oral switch therapy"],
  },
  {
    id: 5,
    name: "ZEROBRAL-P",
    generic: "Aceclofenac + Paracetamol",
    category: "Pain Relief",
    composition: "Aceclofenac 100 mg + Paracetamol 325 mg",
    image: "/ZEROBRAL-P - 1.png",
    uses: ["Pain", "Fever", "Inflammation"],
    benefits: ["Fast pain relief", "Dual mechanism action", "Strong anti-inflammatory effect"],
  },
  {
    id: 6,
    name: "ZEROBRAL-SP",
    generic: "Aceclofenac + Paracetamol + Serratiopeptidase",
    category: "Pain & Inflammation",
    composition: "Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg",
    image: "/ZEROBRAL-SP.png",
    uses: ["Tonsillitis", "Sinusitis", "Pharyngitis", "Trauma", "Swelling"],
    benefits: ["Aceclofenac: Reduces pain severity", "Serratiopeptidase: Preferred over Trypsin"],
  },
  {
    id: 7,
    name: "CALOBRAL-LOTION",
    generic: "Calamine + Allantoin + Vitamin-E + Aloe Vera",
    category: "Topical",
    composition: "Calamine 10% + Allantoin 0.5% + Vitamin-E 0.5%",
    image: "/calobral-lotion.png",
    uses: ["Insect Bite", "Diaper rashes", "Viral Infections", "Summer Associated Dermatitis", "Urticaria"],
    benefits: ["Calamine: Antipruritic", "Allantoin: Protects dry skin", "Vitamin E: Antioxidant", "Aloe Vera: Moisturizes"],
  },
  {
    id: 8,
    name: "MONTIBRAL-LC",
    generic: "Montelukast Sodium + Levocetirizine Hydrochloride",
    category: "Anti-Allergic",
    composition: "Montelukast Sodium 10 mg + Levocetirizine Hydrochloride 5 mg",
    image: "/Montibral-LC.png",
    uses: ["Seasonal Allergic Rhinitis", "Chronic Idiopathic Urticaria", "Prophylaxis & Chronic Treatment of ASTHMA", "Persistent Allergic Rhinitis"],
    benefits: ["Gold Standard Anti-Leukotriene", "Reduces Bronchoconstriction", "Relieves distressing symptoms"],
  },
  {
    id: 9,
    name: "ZIBCLAV-625",
    generic: "Amoxycillin + Potassium Clavulanate",
    category: "Antibiotic",
    composition: "Amoxycillin 500 mg & Potassium Clavulanate 125 mg",
    image: "/ZIBCLAV 625.jpg",
    uses: ["Recurrent Tonsillitis", "Recurrent Sinusitis", "Tonsillo-Pharyngitis", "Dental Infection", "SSTI's"],
    benefits: ["Active against wide range of bacteria", "Excellent clinical results", "Broad-Spectrum protection"],
  },
  {
    id: 10,
    name: "ZIBCLAV-457",
    generic: "Amoxycillin + Potassium Clavulanate",
    category: "Syrups",
    composition: "Amoxycillin 400 mg & Potassium Clavulanate 57 mg",
    image: "/ZIBCLAV 457.jpg",
    uses: ["Recurrent Tonsillitis", "Recurrent Sinusitis", "Tonsillo-Pharyngitis", "Dental Infection"],
    dosage: "For paediatric use",
    benefits: ["Active against bacteria", "Excellent clinical results", "Orange flavour for children"],
  },
  {
    id: 11,
    name: "PPZOLE-40",
    generic: "Pantoprazole",
    category: "Tablets",
    composition: "Pantoprazole 40 mg",
    image: "/Pantoprazole 40 mg Tablet.png",
    uses: ["GERD", "Peptic Ulcer", "Zollinger Ellison Syndrome", "NSAID Induced Ulcer"],
    benefits: ["Superior anti-secretory activity", "Most effective in preventing stress ulcers", "No drug interference"],
  },
  {
    id: 12,
    name: "URIBRAL-B6",
    generic: "Potassium Citrate + Magnesium Citrate + Pyridoxal 5-Phosphate + Cranberry + D-Mannose",
    category: "Syrups",
    composition: "Potassium Citrate 1100 mg, Magnesium Citrate 375 mg, Pyridoxal 5-Phosphate 20 mg, Cranberry 200 mg, D-Mannose 300 mg",
    image: "/URIBRAL-B6 syrup.png",
    uses: ["Urinary Tract Infections", "Recurrent UTI Prophylaxis", "UTIs during Pregnancy", "Kidney Stones"],
    benefits: ["P-5-P: Active Vitamin B6", "Cranberry: Makes urine acidic", "D-Mannose: Inhibits E-coli adhesion"],
  },
  {
    id: 13,
    name: "Q-BRAL-DHA",
    generic: "(6s)-5-Methyltetrahydrofolic Acid + Vit B6 + Vit B12",
    category: "Supplements",
    composition: "(6s)-5-Methyltetrahydrofolic Acid with Vitamin B6 & B12",
    image: "/BRALDHA-5-Methyltetrahydrofolic Acid.png",
    dosage: "One Tablet daily",
    uses: ["Adults & Elderly", "Infants & Children", "Pre-concept & Fertility", "Pregnancy & Lactation"],
    benefits: ["Only folate that crosses blood-brain barrier", "99% purity", "Improves fertility", "Lowers risk of birth defects"],
  },
  {
    id: 14,
    name: "BABYMA",
    generic: "Baby Bathing Bar",
    category: "Topical",
    composition: "Kokum Butter, Shea Butter, Olive Oil, Jojoba Oil & Vitamin E",
    image: "/babyma - 1.jpg",
    uses: ["Newborn's sensitive skin", "Eczema prone skin", "Daily baby bathing"],
    benefits: ["pH 5.5", "100% Natural cleanser", "Dermatologically Tested", "Paraben & Silicone Free", "Tear Free"],
  },
  {
    id: 15,
    name: "CRAMPLIN",
    generic: "Magnesium Biglycinate + L-Carnitine + Methylcobalamin + Folic Acid + Vitamin D3 + Tocotrienol + Zinc",
    category: "Supplements",
    composition: "Magnesium Biglycinate 300mg, L-Carnitine 500mg, Methylcobalamin 1500mcg, Folic Acid 1.5mg, Vitamin D3 1000IU, Tocotrienol 100mg & Zinc 37.5mg",
    image: "/CRAMPLIN.jpg",
    uses: ["Cholesterol Management", "Liver Health", "Brain Health", "Cardiovascular Health", "Bone Health"],
    benefits: ["Tocotrienol E: Superior Vitamin E", "Magnesium for muscle function", "Vitamin D3 for bone density"],
  },
  {
    id: 16,
    name: "ZIPHALA",
    generic: "Lactulose + FOS + Wheat Dextrin + Polydextrose",
    category: "Syrups",
    composition: "Lactulose 10G, FOS 2.5G, Wheat Dextrin 3.5G, Polydextrose 2.1G",
    image: "/Ziphalac oral solution.jpg",
    uses: ["Constipation", "Irregular bowel movements", "Gut health", "Bloating"],
    benefits: ["Lactulose: Osmotic laxative", "Wheat Dextrin: Improves regularity", "FOS: Prebiotic", "Gluten Free"],
  },
  {
    id: 17,
    name: "NEFRO-DEAL",
    generic: "NAC + Taurine + Ubiquinol + Pyridoxamine",
    category: "Supplements",
    composition: "NAC 300mg, Taurine 500mg, Ubiquinol 100mg, Pyridoxamine 75mg",
    image: "/nefrodeal.png",
    uses: ["Diabetic Kidney Protection", "Diabetic Neuropathy", "Oxidative Stress", "Cardio-Renal Support"],
    benefits: ["NAC: Reduces kidney oxidative stress", "Taurine: Kidney cell protection", "Ubiquinol: Mitochondrial health"],
  },
  {
    id: 18,
    name: "ZIZINC",
    generic: "Zinc Gluconate Oral Solution",
    category: "Syrups",
    composition: "Zinc Gluconate (20 mg elemental Zinc per 5 ml)",
    image: "/zinzic.png",
    dosage: "Above 1 Year: 5 ml/day",
    uses: ["Diarrhoea", "Immunity", "Respiratory Tract Infection", "Common Cold"],
    benefits: ["Improves innate & adaptive immunity", "Facilitates absorption of fluids", "Powerful antioxidant"],
  },
  {
    id: 19,
    name: "NEMCOFLEX",
    generic: "Natural Eggshell Membrane + Collagen + Glucosamine + Chondroitin + MSM + Curcumin + Boswellia + Vitamins",
    category: "Supplements",
    composition: "Natural Eggshell Membrane 300mg, Collagen Type 2 50mg, Hyaluronic Acid 25mg, Glucosamine 500mg, Chondroitin 500mg, MSM 500mg, Curcumin 150mg, Boswellia 150mg, Vitamin C 500mg, Vitamin D3 1000IU",
    image: "/nemcoflex.png",
    uses: ["Joint Health", "Osteoarthritis", "Cartilage Degeneration", "Joint Pain"],
    benefits: ["Restore Cartilage", "Rebuild Joint Matrix", "Reduce Inflammation", "Natural Anti-Inflammatory"],
  },
  {
    id: 20,
    name: "Q-BRAL-DHA",
    generic: "(6s)-5-Methyltetrahydrofolic Acid + Methylcobalamin + Pyridoxal 5'-Phosphate + DHA",
    category: "Supplements",
    composition: "(6s)-5-Methyltetrahydrofolic Acid (4th Gen Folate), Methylcobalamin, Pyridoxal 5'-Phosphate & DHA",
    image: "/Q-BRAL DHA.png",
    uses: ["Pregnancy", "Lactation", "Fetal Brain Development", "Maternal Health"],
    benefits: ["4th Generation Folic Acid", "Ready-to-use folate", "DHA for brain development", "Active B12 & B6"],
  },
];

export const categories = ["All", "Antibiotic", "Cough & Cold", "Productive Cough", "Antibiotic (MRSA)", "Pain Relief", "Pain & Inflammation", "Topical", "Anti-Allergic", "Syrups", "Supplements", "Tablets"];

export function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function findProductBySlug(slug: string): Product | undefined {
  return products.find(product => createSlug(product.name) === slug);
}