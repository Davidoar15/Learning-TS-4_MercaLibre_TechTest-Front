import { api } from "@/app/api";

export default async function ItemPage({params: { id }}: {params: { id: string }}) {

    const item = await api.item.fetch(id)

    return (
        <section style={{display: 'grid', gap: '8px', backgroundColor: 'lightgray', padding: '0.5rem'}}>
            <img src={item.thumbnail} alt={item.title}/>
            <p style={{fontWeight: "bold"}}>{Number(item.price).toLocaleString("es-AR", {
                style: "currency",
                currency: item.currency_id,
            })}</p>
            <p>{item.title}</p>
            <p>{item.description}</p>
        </section>
    );
}
