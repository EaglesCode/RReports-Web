export default class City {
  city: string;
  county: string;
  country: string;
  mayorEmail: string;
  constructor(
    city: string,
    county: string,
    country: string,
    mayorEmail: string
  ) {
    this.city = city;
    this.country = country;
    this.county = county;
    this.mayorEmail = mayorEmail;
  }
  isEmpty() {
    if (
      this.city == "" ||
      this.country ||
      this.county == "" ||
      this.mayorEmail == ""
    )
      return true;
    return false;
  }
}
