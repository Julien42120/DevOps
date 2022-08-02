export class Book {
  public "@id"?: string;

  constructor(
    _id?: string,
    public author?: string,
    public name?: string,
    public datePublished?: Date
  ) {
    this["@id"] = _id;
  }
}
