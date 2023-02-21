import React from 'react';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5';
import Zocial from 'react-native-vector-icons/Zocial';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const aboutBtns = [
  {
    title: 'Email',
    icon: <Zocial name="email" size={22} color={'pink'} />,
    detail: 'abc@xyz.com',
  },
  {
    title: 'Telephone',
    icon: <FontAwesome name="phone" size={22} color={'pink'} />,
    detail: ['+919075878', '+9198278'],
  },
  //   {
  //     title: 'Address',
  //     icon: <Ionicons name="location-sharp" size={22} color={'pink'} />,
  //     detail: Constants.about.address,
  //   },
];

export const socialBtns = [
  {
    id: 3,
    icon: <FontAwesome5Brands name="whatsapp" size={22} color={'white'} />,
    url: 'http://www.google.com',
  },
];
