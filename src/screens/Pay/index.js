import React from 'react';
import { SearchBar, Input } from 'react-native-elements';
import { MaterialCommunityIcons, MaterialIcons, Ionicons, Octicons, Entypo } from '@expo/vector-icons';

import { 
  Wrapper, 
  Container, 
  HeaderContainer, 
  Header, 
  ActionMenu,
  ActionButton,
  ActionTitle,
  SuggestionLabel, } from './styles';

import Suggestions from '../../components/Suggestions';
import PaySuggestions from '../../components/PaySuggestions';


export default function Pay() {
  return (
    <Wrapper>
      <Container>
      <HeaderContainer>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={30} color="#0DB060" />
          <SearchBar
            containerStyle={{
              backgroundColor: '#1e222b',      
              flex: 1,
              padding: 20,
            }}
            inputContainerStyle={{
              borderRadius: 1,
              backgroundColor: '#1e222b',
              borderStyle: 'solid',
            }}
            leftIconContainerStyle={{
              justifyContent: 'center',
            }}
            placeholder="A quem você quer pagar?"
            />
        </Header>

        <ActionMenu>
          <ActionButton>
            <Entypo name="home" size={25} color="#FFF" />
            <ActionTitle>Principais</ActionTitle>
          </ActionButton>

          <ActionButton>
            <Octicons name="location" size={25} color="#FFF" />
            <ActionTitle>Locais</ActionTitle>
          </ActionButton>

          <ActionButton>
          <Ionicons name="md-appstore" size={25} color="#FFF" />
           <ActionTitle>Store</ActionTitle>
          </ActionButton>
        </ActionMenu>
      </HeaderContainer>

      <SuggestionLabel>
        Sugestões para Você
      </SuggestionLabel>
      <Suggestions />

      <SuggestionLabel>
        Serviços
      </SuggestionLabel>
      <PaySuggestions />
      </Container>
    </Wrapper>
  );
};