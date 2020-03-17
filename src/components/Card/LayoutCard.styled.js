import styled from 'styled-components';
export const StyledCard = styled.div`

div{
    transform: ${({ openCard }) => openCard ? 'translateY(-60px)' : 'translateY(0)'};
}
`;