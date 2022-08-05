export class Book {
  public "@id"?: string;

  constructor(
    _id?: string,
    public author?: string,
    public name?: string,
    public datePublished?: String
  ) {
    this["@id"] = _id;
  }
}
