import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #000;
  flex: 1;
`;

export const Container = styled.ScrollView`

`;

export const HeaderContainer = styled.View`
  background: #1e222b;
`;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
`;

export const ActionMenu = styled.View`
  height: 75px;
  padding: 0 16px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background: #1e222b;
`;

export const ActionButton = styled.TouchableOpacity`
  flex-direction: row;
`;

export const ActionTitle = styled.Text`
  color: #0DB060;
  font-size: 20px;
  padding: 0 10px;
`;

export const SuggestionLabel = styled.Text`
  color: rgba(255, 255, 255, 0.7);
  padding: 0 20px;
  font-size: 22px;
  background: #1e222b;
`;

