export class Ficha {
  public nome: string;
  public img: string;
  public titulo: string;
  public curso: string;
  public lattes: string;
  public resumo: string;

  constructor(
    img: string,
    nome: string,
    titulo: string,
    curso: string,
    lattes: string,
    resumo: string
  ) {
    this.img = img;
    this.nome = nome;
    this.titulo = titulo;
    (this.curso = curso), (this.lattes = lattes), (this.resumo = resumo);
  }
}
