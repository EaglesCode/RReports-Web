export default function categryChooser(category: string) {
  switch (category) {
    case "Fire":
      return "Foc";
    case "streets":
      return "Drumuri";
    case "buildings":
      return "Cladiri";
    case "trash":
      return "Gunoi";
    case "other":
      return "Altele";
    default:
      return category;
  }
}
