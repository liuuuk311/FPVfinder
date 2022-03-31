<script>
    import { variables } from "../../variables";
    import { getLocaleFromNavigator } from 'svelte-i18n';

    const icons = {
        stats: `<svg height="48" viewBox="0 0 48 48" width="48" stroke="currentColor"><path d="M1 0a1 1 0 0 1 .993.883L2 1v45h45a1 1 0 0 1 .993.883L48 47a1 1 0 0 1-.883.993L47 48H1a1 1 0 0 1-.993-.883L0 47V1a1 1 0 0 1 1-1Zm44.025 6.277a2.5 2.5 0 0 1 .372 4.973L35.279 29.472a2.5 2.5 0 1 1-4.868.526l-10.756-11.33a2.493 2.493 0 0 1-1.366.138l-10.06 18.14a2.5 2.5 0 1 1-1.696-1.066l10.09-18.19a2.5 2.5 0 1 1 4.44-.444l10.399 10.95a2.489 2.489 0 0 1 1.438-.454c.336 0 .656.066.948.186l9.569-17.236a2.5 2.5 0 0 1 1.608-4.414Z" fill-rule="evenodd"></path></svg>`,
        shield: `<svg height="48" viewBox="0 0 48 48" width="48" stroke="currentColor"><path d="M24.06 0c.272.004.548.047.848.137l16.853 6.046c1.053.375 1.753 1.365 1.739 2.458v18.107c0 4.396-2.246 8.354-6.32 12.088a105.621 105.621 0 0 1-11.653 8.69c-.918.63-2.137.63-3.03.016-4.097-2.631-8-5.54-11.707-8.731-4.078-3.796-6.29-7.684-6.29-12.063V8.462a2.508 2.508 0 0 1 1.736-2.279L23.146.124c.241-.075.493-.116.737-.12Zm.02 1.921h-.114l-.103.006a.674.674 0 0 0-.101.016L6.857 8.001c-.25.08-.418.296-.427.5v18.247c0 3.76 1.955 7.195 5.652 10.636a102.604 102.604 0 0 0 11.487 8.562.778.778 0 0 0 .885-.016 103.83 103.83 0 0 0 11.441-8.526c3.69-3.384 5.674-6.88 5.674-10.656V8.628a.675.675 0 0 0-.46-.639L24.304 1.96a.999.999 0 0 0-.339-.039Zm9.61 15.104a1.25 1.25 0 0 1 .09 1.666l-.09.101-11.092 11.092a1.25 1.25 0 0 1-1.666.091l-.102-.091-6.326-6.327a1.25 1.25 0 0 1 1.666-1.859l.101.092 5.443 5.442 10.208-10.207a1.25 1.25 0 0 1 1.768 0Z" fill-rule="evenodd"></path></svg>`,
        free: `<svg height="48" viewBox="0 0 48 48" width="48" stroke="currentColor"><path d="M35.243 0c.553 0 1 .43 1 .96v2.892h7.669c.553 0 1 .43 1 .96 0 6.487-3.831 11.835-8.717 12.457-.476 5.537-5.304 9.906-11.189 9.924v14.263h5.423c3.207 0 5.815 2.504 5.815 5.583 0 .53-.447.96-1 .96H12.769c-.552 0-1-.43-1-.96 0-3.079 2.609-5.583 5.816-5.583h5.421V27.193c-5.884-.018-10.713-4.386-11.19-9.924C6.931 16.647 3.1 11.3 3.1 4.812c0-.53.448-.96 1-.96h7.669V.96c0-.53.448-.96 1-.96Zm-4.814 43.377H17.586c-1.757 0-3.225 1.15-3.667 2.703h20.175c-.443-1.552-1.91-2.703-3.665-2.703ZM34.244 1.92H13.769v14.452c0 4.908 4.16 8.903 9.275 8.903h1.926c5.114 0 9.274-3.994 9.274-8.903V1.92ZM23.392 7.367c.23-.49.998-.49 1.228 0l1.175 2.492 2.625.4c.257.04.473.23.553.489.08.26.013.545-.174.736l-1.9 1.939.449 2.738a.733.733 0 0 1-.272.702.66.66 0 0 1-.722.054l-2.348-1.292-2.349 1.292a.658.658 0 0 1-.721-.054.736.736 0 0 1-.272-.703l.449-2.738-1.9-1.94a.74.74 0 0 1-.173-.735c.08-.26.295-.45.553-.489l2.625-.4Zm19.485-1.595h-6.634v9.539c3.53-.64 6.312-4.601 6.634-9.539Zm-31.108 0H5.135c.323 4.938 3.103 8.899 6.634 9.539V5.772Z" fill-rule="evenodd"></path></svg>`
    }
    const content = {
        en: {
            subtitle: "About FPVFinder",
            title: "The search engine for FPV drones and parts",
            pillars: [
                {
                    icon: icons.stats,
                    title: "Find FPV products at the best price",
                    text: "On FPVFinder you can find and compare the lowest prices of more than 20k FPV products from over 20 online stores, in more than 7 countries. Build your FPV drone and save money.",
                },
                {
                    icon: icons.shield,
                    title: "Independent and trustworthy",
                    text: "FPVFinder is an independent informational service offering real price comparisons. No store can influence any information you find on our site.",
                },
                {
                    icon: icons.free,
                    title: "Free to use",
                    text: "FPVFinder's purpose is to help you to save money and time when you are shopping for your FPV drone parts, giving you free access to helpful information in order to make smart purchasing decisions.",
                }
            ]
        },
        it: {
            subtitle: "Cos'è FPVFinder",
            title: "Il motore di ricerca per droni FPV e parti di ricambio",
            pillars: [
                {
                    icon: icons.stats,
                    title: "Trova i prodotti FPV products al miglior prezzo",
                    text: "Su FPVFinder puoi trovare e confrontare i prezzi più bassi tra oltre 20.000 prodotti FPV in più 20 negozi online, da oltre 7 paesi. Costruisci il tuo drone FPV risparmiando.",
                },
                {
                    icon: icons.shield,
                    title: "Indipendete e fidato",
                    text: "FPVFinder è un servizio indipendente che offre confronti di prezzi reali. Nessun negozio può influenzare le informazioni che trovi sul nostro sito.",
                },
                {
                    icon: icons.free,
                    title: "Gratuito",
                    text: "Lo scopo di FPVFinder è aiutarti a risparmiare tempo e denaro quando acquisti le parti del tuo drone FPV, offrendoti libero accesso a informazioni utili per prendere decisioni di acquisto intelligenti.",
                }
            ]
        }
    }
    let lang = getLocaleFromNavigator();
    lang = content.hasOwnProperty(lang) ? lang : "en"
</script>
<div class="mx-4 md:mx-auto lg:w-full max-w-6xl items-center mt-8">
    <div class="md:w-2/5 mb-8">
        <p class="uppercase text-{variables.mainAccentColor}">{content[lang].subtitle}</p>
        <div>
            <h2 class="text-3xl font-bold">{content[lang].title}</h2>
        </div>
    </div>
    <div class="flex flex-col md:flex-row">
        {#each content[lang].pillars as col}
        <div class="md:w-1/3 flex md:flex-col flex-row my-4">
            <div class="mb-4 mr-4">{@html col.icon}</div>
            <div>
                <h3 class="text-xl font-bold md:w-11/12">{col.title}</h3>
                <p class="md:w-11/12">{col.text}</p>
            </div>
        </div>
        {/each}
    </div>
</div>