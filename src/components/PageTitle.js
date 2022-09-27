import Head from "next/head";

const PageTitle = ({ title, description, keywords }) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    )
}
PageTitle.defaultProps={
    title:"District Assembly",
    keywords:"district",
    description:"District Assembly property management"
}
export default PageTitle;