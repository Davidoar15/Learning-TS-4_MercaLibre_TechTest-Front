export default async function ItemPage({params: { id }}: {params: { id: string }}) {

    const item = await fetch(
        `https://api.mercadolibre.com/items/${id}`
    ).then(
        (res) =>
        res.json() as Promise<{
            id: string;
            title: string;
            thumbnail: string;
            price: number;
            currency_id: string;
        }>
    );

    const { plain_text } = await fetch(
        `https://api.mercadolibre.com/items/${id}/description`
    ).then(
        (res) =>
        res.json() as Promise<{
            plain_text: string;
        }>
    );

    return (
        <section style={{display: 'grid', gap: '8px', backgroundColor: 'lightgray', padding: '0.5rem'}}>
            <img src={item.thumbnail} alt={item.title}/>
            <p style={{fontWeight: "bold"}}>{Number(item.price).toLocaleString("es-AR", {
                style: "currency",
                currency: item.currency_id,
            })}</p>
            <p>{item.title}</p>
            <p>{plain_text}</p>
        </section>
    );
}
