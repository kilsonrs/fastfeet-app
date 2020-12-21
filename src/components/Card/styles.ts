import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  height: 184px;
  border-radius: 4px;
  margin: 8px 24px 8px;
  elevation: 1;
`;

export const Content = styled.View`
  width: 100%;
  justify-content: space-between;
  padding: 16px;
`;

export const PackageContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PackageImage = styled.Image``;

export const PackageTitle = styled.Text`
  font-family: 'RobotoCondensed-Bold';
  font-size: 22px;
  color: #4c4766;
  margin-left: 12px;
`;

export const PackageDate = styled.Text`
  font-family: 'Inter-Medium';
  font-size: 10px;
  color: #6f6c80;
  margin-left: auto;
`;

export const DetailButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #fff1d6;
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const DetailButtonText = styled.Text`
  font-family: 'Inter-Medium';
  font-size: 15px;
  color: #4c4766;
`;
