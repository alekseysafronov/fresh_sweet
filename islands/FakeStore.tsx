const products = () => {
    fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
};

export default function FakeStore() {
    return (
        <div>
            <button onClick={products}>Products</button>
        </div>
    );
}