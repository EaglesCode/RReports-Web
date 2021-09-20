export default function categoryChooser(category: string) {
  switch (category.toLocaleLowerCase()) {
    case "fire":
      return "Foc";
    case "streets":
      return "Drumuri";
    case "buildings":
      return "Cladiri";
    case "trash":
      return "Gunoi";
    case "other":
      return "Altele";
    case "greenareasparks":
      return "Spatii verzi/Parcuri";
    case "taxes":
      return "Taxe";
    case "wastestorage":
      return "Depozitări deșeuri";
    case "sanitation":
      return "Salubritate";
    case "parking":
      return "Parcari";
    case "publiclighting":
      return "Iluminat Public";
    default:
      return category;
  }
}
