const items = [
    {
        id: 1,
        title: "Item 1 Рубашка",
    },
    {
        id: 2,
        title: "Item 2 Джинсы",
    },
    {
        id: 3,
        title: "Item 3 Свитер",
    },
];

export default function Card() {
    return (
        <div>
            {items.map((item) => (
                <div key={item.id}>{item.title}</div>
            ))}
            {items.map((item) => (
                <div>Товар номер {item.id}</div>
            ))}



        </div>
    );
}