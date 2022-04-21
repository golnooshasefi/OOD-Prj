import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartReqular } from "@fortawesome/free-regular-svg-icons";
import { digitsEnToFa, addCommas } from "@persian-tools/persian-tools";
const heart = <FontAwesomeIcon icon={faHeart} />;
const heartRegular = <FontAwesomeIcon icon={faHeartReqular} />;

const Container = styled.div`
  /* flex: 1; */
  border: 1px solid #f0f0f1;
  /* margin: 5px; */
  /* min-width: 280px; */
  /* height: 350px;
  width: 300px; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  /* background-color: #f5fbfd; */
  /* position: relative; */

  &:hover {
    z-index: 10;
    /* -webkit-filter: drop-shadow(0 1px 5px rgba(0, 0, 0, 0.2)); */
    /* filter: drop-shadow(0 1px 5px rgba(0, 0, 0, 0.2)); */
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  }
`;

// const Link = styled.a`
//   &:hover {
//     /* z-index: 10; */
//     /* -webkit-filter: drop-shadow(0 1px 5px rgba(0, 0, 0, 0.2)); */
//     filter: drop-shadow(0 1px 5px rgba(0, 0, 0, 0.2));
//     /* box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1); */
//   }
// `;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Image = styled.img`
  height: 240px;
  width: 240px;
`;
const Description = styled.div`
  padding: 10px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
`;
const Name = styled.h2`
  /* font-family: Vazir; */
  font-size: 15px;
  direction: rtl;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-height: 2.1; /* fallback */
  max-height: 2.1 * 2; /* fallback */
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  justify-content: flex-end;
`;
const Price = styled.span`
  /* align-items: center; */
  direction: rtl;
  font-family: BNazanin;
  font-size: 20px;
  padding-left: 5px;
`;
const Toman = styled.span`
  font-size: 1.5rem;
  /* font-family: Vazir; */
`;

const Icon = styled.i`
  position: absolute;
  color: #5e4d9b;
  top: 5%;
  left: 5%;
  font-size: 30px;
  &:hover {
    color: #777;
    cursor: pointer;
  }
`;

function Item(props) {
  return (
    <Container>
      {/* <Link> */}
      <ImgContainer>
        <Icon>{true ? heart : heartRegular}</Icon>
        <Image src={props.img} alt={props.name} />
      </ImgContainer>
      <Description>
        <Name>{props.name}</Name>
        <PriceContainer>
          <Price>{digitsEnToFa(addCommas(props.price))}</Price>
          <Toman>تومان</Toman>
        </PriceContainer>
      </Description>
      {/* </Link> */}
    </Container>
  );
}

export default Item;
