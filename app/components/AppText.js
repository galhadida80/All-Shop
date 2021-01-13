import React from 'react';
import { Text } from 'react-native';
import defaultstyles from '../config/styles';


function AppText({children,style,...otherProps}) {
    return <Text style={[defaultstyles.text,style]} {...otherProps}>{children}</Text>;
}

export default AppText;