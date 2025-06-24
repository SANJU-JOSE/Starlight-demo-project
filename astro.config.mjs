// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightVersions from 'starlight-versions'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightVersions({
          versions: [
            {slug :"4.0"},
            {slug: "3.25"}, 
            {slug:"3.0"},
            {slug : '2.5'},
            {
              slug: '2.0',
            },{ slug: '1.0' }
          ],
        }),
      ],
     
      title: 'Bizarre Binary Docs',
      description: `Welcome to Bizarre Binary, your trusted companion for exploring the vast expanse of space.`,
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        fr: {
          label: 'French',
        },
      },
      logo: {
        src: './public/Fav-icon.ico',
      },

      sidebar: [
        {
          label: 'Getting Started',
          autogenerate: { directory: 'getting-started' },
        },

        {
          label: 'Cosmic Navigation', // Group title
          items: [
            { slug: 'cosmic-navigation/reading-star-charts-and-maps' }, // Uses doc frontmatter title
            { label: 'Plotting a Course Through Space', slug: 'cosmic-navigation/plotting-course-through-space' }, // Custom label
            'cosmic-navigation/dealing-with-gravity-and-orbit', // Shorthand, uses doc title
          ],
        },
        // External links
        { label: 'Spaceships and Rockets', link: 'https://www.nasa.gov/humans-in-space/spaceships-and-rockets/' }, // An external link to the NASA website.
        { label: 'Space Movie', link: 'https://en.wikipedia.org/wiki/Interstellar_(film)' },
      ],
    }),
  ],
});