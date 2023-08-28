import React, { useState } from 'react';
import { View } from 'react-native';
import { PhoneInput, ICountry } from 'react-native-international-phone-number';
import { useTheme } from 'src/utils/theme';

export function PhoneNumberInput() {
  const { theme } = useTheme();

  const [selectedCountry, setSelectedCountry] = useState<undefined | ICountry>(
    undefined,
  );
  const [inputValue, setInputValue] = useState<string>('');

  function handleInputValue(phoneNumber: string) {
    setInputValue(phoneNumber);
  }

  function handleSelectedCountry(country: ICountry) {
    setSelectedCountry(country);
  }

  return (
    <View style={{ width: '85%', marginBottom: 10 }}>
      <PhoneInput
        value={inputValue}
        onChangePhoneNumber={handleInputValue}
        selectedCountry={selectedCountry}
        onChangeSelectedCountry={handleSelectedCountry}
        defaultValue="+251"
        containerStyle={{
          borderRadius: 3,
          borderColor: theme.colors.gray[300],
        }}
        placeholder="Phone Number"
      />
      {/* <View style={{ marginTop: 10 }}>
        <Text>
          Country: {`${selectedCountry?.name} (${selectedCountry?.cca2})`}
        </Text>
        <Text>
          Phone Number: {`${selectedCountry?.callingCode} ${inputValue}`}
        </Text>
      </View> */}
    </View>
  );
}
