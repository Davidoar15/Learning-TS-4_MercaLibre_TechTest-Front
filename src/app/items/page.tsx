// * https://api.mercadolibre.com/sites/MLA/search?q=iphone&limit=5

import Link from "next/link";

export default async function ItemsPage({searchParams}: {searchParams: { search: string }}) {

    const { results } = await fetch(
        `https://api.mercadolibre.com/sites/MLA/search?q=${searchParams}&limit=5`
    ).then(
        (res) =>
        res.json() as Promise<{
            results: {
            id: string;
            title: string;
            thumbnail: string;
            price: number;
            currency_id: string;
            seller_address: {
                city: {
                name: string;
                };
            };
            }[];
        }>
    );

    return (
        <section>
            <article style={{display: 'grid', gap: '16px'}}>
                {results.map(item => (
                    <Link href={`/items/${item.id}`} key={item.id} style={{display: 'flex', gap: '16px', backgroundColor: 'lightgray', border: '2px lightblue solid', textDecoration: 'none', color: "black"}}>
                        <img src={item.thumbnail} alt={item.title}/>
                        <div>
                            <p style={{fontWeight: "bold"}}>{Number(item.price).toLocaleString("es-AR", {
                                style: "currency",
                                currency: item.currency_id,
                            })}</p>
                            <p>{item.title}</p>
                        </div>
                        <span style={{marginLeft: 'auto', fontSize: 'small', opacity: '70%', textTransform: 'capitalize', paddingRight: '3.7px'}}>
                            {item.seller_address.city.name.toLowerCase()}
                        </span>
                    </Link>
                ))}
            </article>
        </section>
    )
}
