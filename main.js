class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo.toLowerCase();
  }

  atacar() {
    const ataques = {
      mago: "magia",
      guerreiro: "espada",
      monge: "artes marciais",
      ninja: "shuriken"
    };

    const ataque = ataques[this.tipo] || "um ataque desconhecido";
    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

const heroi1 = new Heroi("Aragorn", 35, "guerreiro");
heroi1.atacar(); 

const heroi2 = new Heroi("Gandalf", 200, "mago");
heroi2.atacar(); 

const heroi3 = new Heroi("Kenshin", 28, "ninja");
heroi3.atacar(); 

const heroi4 = new Heroi("Shifu", 45, "monge");
heroi4.atacar(); 