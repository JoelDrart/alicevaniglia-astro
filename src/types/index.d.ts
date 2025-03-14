export interface Poem {
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt: string;
    image?: { // Sanity maneja imágenes con referencia a un asset
      asset: {
        _ref: string;
        _type: "reference";
      };
    };
    body: PortableTextBlock[]; // Usamos el tipo de astro-portabletext
  }
  