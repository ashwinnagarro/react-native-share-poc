import React from 'react';
import {
  Text,
  View,
  Linking,
  Switch,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {aboutBtns, socialBtns} from '../AboutConst';
import RoundedSquareButton from '../RoundedSquareButton';
import images from '../images/imagesBase64';
import Share from 'react-native-share';
//import pdfBase64 from '../images/pdfBase64';

const Profile = ({navigation}) => {
  // const goSNshare = item => {
  //   const url = item.url;
  //   Linking.canOpenURL(url)
  //     .then(supported => {
  //       Linking.openURL(supported ? url : item.webUrl);
  //     })
  //     .catch(e => {});
  // };
  const goSNshare = async () => {
    const shareOptions = {
      message: 'Example WhatsApp',
      url: 'https://www.google.com',
      social: Share.Social.WHATSAPP,
    };

    try {
      const ShareResponse = await Share.shareSingle(shareOptions);
      console.log('Response =>', ShareResponse);
      // setResult(JSON.stringify(ShareResponse, null, 2));
    } catch (error) {
      console.log('Error =>', JSON.stringify(error, null, 3));
      // setResult('error: '.concat(getErrorString(error)));
    }
  };
  const openMail = id => {
    const url = `mailto:${id}`;
    Linking.openURL(url);
  };

  const openPhone = number => {
    const url = `tel:${number}`;
    Linking.openURL(url);
  };

  const getContactDescription = item => {
    switch (item.title) {
      case 'Email':
        return (
          <TouchableOpacity onPress={() => openMail(item.detail)}>
            <Text style={(styles.aboutBtnDetail, styles.aboutBtnDescription)}>
              {item.detail}
            </Text>
          </TouchableOpacity>
        );
      case 'Telephone':
        const telephoneNumber = item.detail[0];
        const phoneNumber = item.detail[1];
        return (
          <View style={styles.numberContainer}>
            <TouchableOpacity onPress={() => openPhone(telephoneNumber)}>
              <Text style={(styles.aboutBtnDetail, styles.aboutBtnDescription)}>
                {telephoneNumber}
              </Text>
            </TouchableOpacity>
            <Text> | </Text>
            <TouchableOpacity onPress={() => openPhone(phoneNumber)}>
              <Text style={(styles.aboutBtnDetail, styles.aboutBtnDescription)}>
                {phoneNumber}
              </Text>
            </TouchableOpacity>
          </View>
        );
      // case strings.address:
      //   return <Text style={styles.aboutBtnDetail}>{item.detail}</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {/* <StaticImageHeader source={about_first} title={strings.about} /> */}
      <View style={styles.contentContainer}>
        <ScrollView
          VERTICAL
          contentContainerStyle={styles.scrollContentContainer}>
          {/* Contact details container */}
          <View style={styles.detailContainer}>
            {aboutBtns.map(item => (
              <View key={item.title} style={styles.buttonRow}>
                <RoundedSquareButton disabled style={styles.button}>
                  {item.icon}
                </RoundedSquareButton>
                <View style={styles.aboutBtnDetailColumn}>
                  <Text style={[styles.aboutBtnDetail, styles.aboutBtnTitle]}>
                    {item.title}
                  </Text>
                  {getContactDescription(item)}
                </View>
              </View>
            ))}
          </View>

          {/* Disable Notifications button */}
          <View style={styles.spacedHorizontallyBetween}>
            <Text style={[styles.aboutBtnDetail, styles.aboutBtnTitle]}>
              {/* {strings.disableNotifications} */}
            </Text>
            {/* <Switch /> */}
          </View>

          {/* Choose language button */}
          {/* <View style={styles.spacedHorizontallyBetween}>
            <Text style={[styles.aboutBtnDetail, styles.aboutBtnTitle]}>
              {strings.chooseLanguage}
            </Text>
            <TouchableOpacity
              onPress={() => {
                const lanuageToBeToggled =
                  language == Constants.language.ar
                    ? Constants.language.en
                    : Constants.language.ar;
                changeLangReq(lanuageToBeToggled);
              }}
              style={styles.languageButtonBackground}>
              <View style={styles.languageButtonContent}>
                <Text style={styles.languageButtonText}>
                  {language.includes(Constants.language.en)
                    ? Constants.languageText.en
                    : Constants.languageText.ar}
                </Text>
                <Icon name="gear" />
              </View>
            </TouchableOpacity>
          </View> */}

          {/* Privacy Statement Text */}
          {/* <TouchableOpacity onPress={() => Linking.openURL(privacyPolicyUrl)}>
            <Text
              style={[
                styles.aboutBtnDetail,
                styles.aboutBtnTitle,
                styles.privacyStatementText,
                styles.sectionDivider,
              ]}>
              {strings.privacyStatement}
            </Text>
          </TouchableOpacity> */}

          {/* Social media container */}
          <View style={[styles.socialNetContainer, styles.sectionDivider]}>
            {socialBtns.map(item => (
              <View key={item.id} style={styles.socialButtonRow}>
                <RoundedSquareButton
                  style={styles.socialButton}
                  onPress={() => goSNshare(item)}>
                  {item.icon}
                </RoundedSquareButton>
              </View>
            ))}
          </View>

          {/* (Footer) App version & copyrights */}
          {/* <View style={styles.disclaimer}>
            <Text style={[styles.aboutBtnDetail, styles.disclaimerNotes]}>
              {strings.appVersion} {VersionInfo.appVersion}
            </Text>
            <Text style={[styles.aboutBtnDetail, styles.disclaimerNotes]}>
              {strings.rights}
            </Text>
          </View> */}
        </ScrollView>
      </View>
    </View>
  );
};

// Profile.navigationOptions = {
//   title: strings.profile,
// };

export default Profile;
