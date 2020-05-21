import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    background: #1e222b;    
`;

export const Option = styled.TouchableOpacity`
    padding: 10px 10px;
    flex-direction: row;
`;

export const Img = styled.Image`
    margin-right: 10px;
`;

export const Label = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`;

export const Description = styled.Text`
    color: #fff;
    font-size: 14px;
    position: absolute;
    margin-left: 80px;
    margin-top: 35px;
`;
