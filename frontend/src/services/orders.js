export const getOrder = async () => {
    const orders = await fetch('http://localhost:3000/api/orders');
    const response = await orders.json();
    return response;
}