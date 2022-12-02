import styled from "styled-components"

export const ItemStyle = styled.li`
    margin: 0.5rem 0;
    padding: 0.25rem;
    display: grid;
    grid-template-columns: 1fr 1fr 160px 100px;
    column-gap: 1rem;
    align-items: center;
    border-radius: 4px;
  `

  export const Title = styled.h2`
  color: #fff;
  font-weight: 300;
`
export const Date = styled.div`
  color: #black;
  font-weight: 300;
  margin: 6px 0;
`
 export const Description = styled.p`
  color: #black;
  font-weight: 300;
`