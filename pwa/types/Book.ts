export class Book {
  public "@id"?: string;
  public "name"?: string;
  public "author"?: string;
  public "datePublished"?: string;

  constructor(
    _id?: string,
    name?: string,
    author?: string,
    datePublished?: string,

  ) {
    this["@id"] = _id;
    this["name"] = name;
    this["author"] = author;
    this["datePublished"] = datePublished;
  }
}