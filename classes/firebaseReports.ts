import firebase from "firebase";

type Timestamp = firebase.firestore.Timestamp;
type GeoPoint = firebase.firestore.GeoPoint;

export default class Report {
  category: string;
  description: string;
  street: string;
  city: string;
  county: string;
  country: string;
  images: Array<string>;
  location: GeoPoint;
  status: Number;
  upload_date: Timestamp;
  email: string;
  starred: boolean;

  constructor({
    category,
    description,
    country,
    county,
    city,
    street,
    location,
    images,
    email,
    upload_date,
    status,
    starred,
  }) {
    this.category = category;
    this.city = city;
    this.county = county;
    this.country = country;
    this.description = description;
    this.street = street;
    this.location = location;
    this.images = images;
    this.email = email;
    this.upload_date = upload_date;
    this.status = status;
    this.starred = starred ?? false;
  }
}
