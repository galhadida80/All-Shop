import React from 'react';
import { Text } from 'react-native';
import defaultstyles from '../config/styles';


function AppText({children,style}) {
    return <Text style={[defaultstyles.text,style]}>{children}</Text>;
}

export default AppText;