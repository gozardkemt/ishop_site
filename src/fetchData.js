
/**
 * getData - description
 *
 * @return {type}  description
 */
export const getProducts = async () => {
  const data = await fetch('http://192.168.1.3:8080/data/products.json');
  return data.json();
};

export const getCategories = async () => {
  const data = await fetch('http://192.168.1.3:8080/data/categories.json');
  return data.json();
}
