export const sections = {
  fundamentos: await Astro.glob("../pages/notes/html/fundamentos/*.md"),
  cabecera: await Astro.glob("../pages/notes/html/cabecera/*.md"),
};
