// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
          charset: "utf-16",
          viewport: "width=device-width, initial-scale=1",
          title: "Pokesearch",
          meta: [
            // <meta name="description" content="My amazing site">
            //{ name: "description", content: "Portal de información del Área de Juventud del Excmo. Ayuntamiento de Güímar" },
          ],
          htmlAttrs: {
            lang: "es",
          },
          link: [
            {
                href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
                rel: "stylesheet",
                integrity: "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",
                crossorigin: "anonymous"
            },
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            {
              rel: "stylesheet",
              href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css",
            },
          ],
          script: [
            {
              src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js",
              integrity:
                "sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8",
              crossorigin: "anonymous",
            },
            // {
            //   children:
            //     "(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}; h._hjSettings={hjid:3253298,hjsv:6}; a=o.getElementsByTagName('head')[0]; r=o.createElement('script');r.async=1; r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; a.appendChild(r); })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');",
            // },
          ],
        },
      },
      
    modules:[
        ["@storyblok/nuxt", {
            accessToken:"liFlpEUJ4pr1zyxtx6vPjgtt"
        }]
    ]
})
