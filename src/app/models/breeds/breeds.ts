export class Breeds {
  id: number;
  name: string;
  icon: string;
  mattoltip: string;
  info: string;
  image: string;
  region: string;
  age: number;
  weight: number;
  height: number;
  life_span: number;
  temperament: string;
  nerf: string;
  energy: number;
  habilities: string[];

  constructor(
    id: number,
    name: string,
    icon: string,
    mattoltip: string,
    info: string,
    image: string,
    region: string,
    age: number,
    weight: number,
    height: number,
    life_span: number,
    energy: number,
    habilities: string[]
  ) {
    this.id = id;
    this.name = name;
    this.icon = icon;
    this.mattoltip = mattoltip;
    this.info = info;
    this.image = image;
    this.region = region;
    this.age = age;
    this.weight = weight;
    this.height = height;
    this.life_span = life_span;
    this.energy = energy;
    this.habilities = habilities;
  }

  static getBreeds(): Breeds[] {
    return [
      new Breeds(
        2,
        "Elf",
        "elf.png",
        "Elfos",
        "Nascidos na mesma era dos Draconatos, os Elfos são uma raça ancestral, marcada por sua longevidade, sabedoria e conexão profunda com a magia e a natureza. Dotados de uma graça inata e sentidos aguçados, eles caminham entre as árvores como sombras e moldam a energia arcana com maestria. Se você busca uma raça ideal para classes que dominam a magia ou a arte da furtividade, os Elfos são uma escolha certeira, combinando agilidade, inteligência e um legado de mistério.",
        "backelf.png",
        "Reino de Elvendar - Floresta de Lysandra",
        220,
        60,
        180,
        8,
        12,
        [
          "Canalizar - Você recupera 1 - até o máximo nos pontos de Magia",
          "Olho de gato - Visão noturna",
          "Sábedoria - +4 em testes de Sabedoria",
        ]
      ),
      new Breeds(
        4,
        "Human",
        "human.png",
        "Humanos",
        "Humanos são uma raça versátil e adaptável, capazes de se adaptar a qualquer ambiente e situação. Com uma vida curta em comparação com outras raças, eles compensam sua brevidade com uma capacidade de aprendizado e evolução acelerada, tornando-se mestres em diversas áreas. Se você busca uma raça que possa se encaixar em qualquer classe ou papel, os Humanos são a escolha perfeita, com habilidades que se destacam em qualquer situação.",
        "backhuman.png",
        "Reino de Arton - Cidade de Valkaria",
        80,
        90,
        180,
        8,
        8,
        [
          "Adaptabilidade - +2 em qualquer atributo de sua escolha / Apenas na criação do personagem.",
          "Adaptabilidade Versátil - +1 em qualquer teste de habilidade.",
          "Inteligência - +2 em testes de resistência a controle mental ou manipulação por Magia.",
        ]
      ),
      new Breeds(
        5,
        "Githyanki",
        "githyanki.png",
        "Githyankis",
        "Guerreiros criados nos céus astrais, os Githyankis são uma raça de guerreiros, marcados por sua resistência e habilidades psíquicas. Com uma cultura marcada por guerras intermináveis e uma sociedade rígida, eles são uma raça de guerreiros, capazes de manipular objetos com a mente. Se você busca uma raça que combine força bruta e truques, os Githyankis são a escolha perfeita.",
        "backgithyanki.png",
        "Planalto Astral - Fortaleza de Tu'Narath",
        140,
        100,
        185,
        12,
        4,
        [
          "Telecinese - Move objetos ou inimigos com a mente (consome 1 - 6 de magia por uso)",
          "Domadores - +5 em testes de montaria.",
          "Força - +2 em testes de força.",
        ]
      ),
      new Breeds(
        6,
        "Tiefling",
        "tiefling.png",
        "Tieflings",
        "Tieflings são descendentes de humanos e demônios, marcados por sua aparência exótica e habilidades mágicas. Com uma aparência marcante e uma aura de mistério, eles são uma raça de manipuladores e feiticeiros, capazes de lançar feitiços e manipular a energia arcana com facilidade. Se você busca uma raça que combine magia e astúcia, os Tieflings são a escolha perfeita.",
        "backtiefling.png",
        "Terras de Vih Okar - Cidade de Baator",
        185,
        80,
        190,
        9,
        9,
        [
          "Chamas Infernais - Fogo que não se apaga. 1 a 6 de dano por turno. (consome 3 de Magia por turno)",
          "Olhar Hipnótico - +2 em testes de persuasão.",
          "Destreza - +2 em testes de destreza.",
        ]
      ),
      new Breeds(
        7,
        "Dragonborn",
        "dragonborn.png",
        "Draconatos",
        "Descendentes de dragões ancestrais, os Draconatos são uma raça à beira da extinção, vagando pelo mundo como guerreiros nômades em busca de glória e redenção. Forjados no fogo da batalha, possuem uma força descomunal e uma resistência sobre-humana, com corpos cobertos por escamas reluzentes como ouro ou tão escuras quanto a noite. Além de sua imponente presença física, herdam o poder místico de seus ancestrais dracônicos, sendo capazes de conjurar feitiços devastadores. Se você procura uma raça que una brutalidade e magia em um só ser, os Draconatos são a escolha definitiva.",
        "backdragonborn.png",
        "Antiga Cidade de Drak'Thalon",
        600,
        160,
        200,
        14,
        6,
        [
          "Sopro Dracônico - Expele um ataque elemental causa 1 - 8 de dano. (consome 6 de Magia por uso)",
          "Escamas Resistentes - Pele naturalmente protegida contra ataques. (1 - 6 de dano reduzido por ataque)",
          "Força - +2 em testes de força.",
        ]
      ),
    ];
  }

  static getBreedById(id: number): Breeds | undefined {
    return this.getBreeds().find((breed) => breed.id === id);
  }
}
