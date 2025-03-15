import { sanityClient } from "sanity:client";
import type { Poem } from "../types";

const POEMS_QUERY = `*[
    _type == "poem" && defined(slug.current)
  ]|order(publishedAt desc)[0...12]{
    _id,
    title,
    slug,
    publishedAt,
    body
  }`;

const POEM_QUERY = `*[
    _type == "poem"
    && slug.current == $slug
  ][0]{
    title,
    publishedAt,
    body
  }`;


  const SLUGS_QUERY = `*[_type == "poem" && defined(slug.current)]{
    "params": { "slug": slug.current }
  }`;

export async function getPaths() {
  return await sanityClient.fetch(SLUGS_QUERY);
}
  
export async function getPoems() {
    return await sanityClient.fetch<Poem[]>(POEMS_QUERY);
}

export async function getPoem(slug: string) {
    return await await sanityClient.fetch<Poem>(POEM_QUERY, { slug });
}
