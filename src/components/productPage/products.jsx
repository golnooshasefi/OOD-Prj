import styled from "styled-components";
import Item from "./item";

const Container = styled.div`
  /* display: flex; */
  /* flex-direction: row;
  align-items: stretch; */
  display: grid;
`;

const ProductContainer = styled.div`
  padding: 20px;
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
  display: grid;
  /* gap: 1rem; */
  grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
  /* grid-template-row: repeat(auto-fill, minmax(40rem, 1fr)); */
  /* background-color: black; */
`;
const SearchContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
`;

function Products() {
  return (
    <Container>
      <ProductContainer>
        <Item
          name={" شلوار مردانه سیدونا مدل MSI03072-403"}
          price={99000}
          img={`https://dkstatics-public.digikala.com/digikala-products/7adc2bbaa968a555893cd3b7336279ce11856319_1644051263.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80`}
        ></Item>
        <Item
          name={" شلوار مردانه سیدونا مدل MSI03072-403"}
          price={99000}
          img={`https://dkstatics-public.digikala.com/digikala-products/7adc2bbaa968a555893cd3b7336279ce11856319_1644051263.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80`}
        ></Item>
        <Item
          name={" شلوار مردانه سیدونا مدل MSI03072-403"}
          price={99000}
          img={`https://dkstatics-public.digikala.com/digikala-products/7adc2bbaa968a555893cd3b7336279ce11856319_1644051263.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80`}
        ></Item>
        <Item
          name={" شلوار مردانه سیدونا مدل MSI03072-403"}
          price={99000}
          img={`https://dkstatics-public.digikala.com/digikala-products/7adc2bbaa968a555893cd3b7336279ce11856319_1644051263.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80`}
        ></Item>
        <Item
          name={" شلوار مردانه سیدونا مدل MSI03072-403"}
          price={99000}
          img={`https://dkstatics-public.digikala.com/digikala-products/7adc2bbaa968a555893cd3b7336279ce11856319_1644051263.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80`}
        ></Item>
        <Item
          name={" شلوار مردانه سیدونا مدل MSI03072-403"}
          price={99000}
          img={`https://dkstatics-public.digikala.com/digikala-products/7adc2bbaa968a555893cd3b7336279ce11856319_1644051263.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80`}
        ></Item>
      </ProductContainer>
      <SearchContainer></SearchContainer>
    </Container>
  );
}
export default Products;
