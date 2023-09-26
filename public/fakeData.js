const brands = [
  {
    "brand": "Audi"
  },
  {
    "brand": "BMW"
  },
  {
    "brand": "Mercedes-Benz"
  },
  {
    "brand": "Volkswagen"
  },
  {
    "brand": "Toyota"
  },
  {
    "brand": "Honda"
  },
  {
    "brand": "Ford"
  },
  {
    "brand": "Chevrolet"
  },
  {
    "brand": "Nissan"
  },
  {
    "brand": "Mazda"
  },
  {
    "brand": "Hyundai"
  },
  {
    "brand": "Kia"
  },
  {
    "brand": "Volvo"
  },
  {
    "brand": "Lexus"
  },
  {
    "brand": "Subaru"
  },
  {
    "brand": "Jeep"
  },
  {
    "brand": "Tesla"
  },
  {
    "brand": "Porsche"
  },
  {
    "brand": "Ferrari"
  },
  {
    "brand": "Lamborghini"
  },
  {
    "brand": "Maserati"
  },
  {
    "brand": "Bentley"
  },
  {
    "brand": "Rolls-Royce"
  },
  {
    "brand": "Land Rover"
  },
  {
    "brand": "Jaguar"
  },
  {
    "brand": "Aston Martin"
  },
  {
    "brand": "Bugatti"
  },
  {
    "brand": "McLaren"
  },
  {
    "brand": "Lotus"
  },
  {
    "brand": "Alfa Romeo"
  },
  {
    "brand": "Fiat"
  },
  {
    "brand": "Peugeot"
  },
  {
    "brand": "Renault"
  },
  {
    "brand": "Citroën"
  },
  {
    "brand": "Opel"
  },
  {
    "brand": "Suzuki"
  },
  {
    "brand": "Mitsubishi"
  },
  {
    "brand": "Dodge"
  },
  {
    "brand": "Chrysler"
  },
  {
    "brand": "Buick"
  },
  {
    "brand": "Cadillac"
  },
  {
    "brand": "GMC"
  },
  {
    "brand": "Lincoln"
  },
  {
    "brand": "Infiniti"
  },
  {
    "brand": "Acura"
  },
  {
    "brand": "Saturn"
  },
  {
    "brand": "Pontiac"
  },
  {
    "brand": "Hummer"
  }
]

brands.sort((a, b) => {
  const brandA = a.brand.toUpperCase();
  const brandB = b.brand.toUpperCase();

  if (brandA < brandB) {
    return -1;
  }
  if (brandA > brandB) {
    return 1;
  }
  return 0;
});

const years = () => {
  let year = []
  for (let i = 1935; i < 2023; i++) {
    year.push(i)
  }
  return year
}

const colors = [
  "Red",
  "Blue",
  "Silver",
  "Black",
  "White",
  "Gray",
  "Green",
  "Yellow",
  "Orange",
  "Purple",
  "Brown",
  "Gold",
  "Pink",
  "Teal",
  "Beige",
  "Maroon",
  "Navy",
  "Cyan",
  "Magenta",
  "Turquoise"
];

export {
  brands,
  years,
  colors
}